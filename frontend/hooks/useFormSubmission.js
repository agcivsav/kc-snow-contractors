import { useRef, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  readAppDeviceId,
  getAppDeviceId,
  deleteAppDeviceId,
} from "../utils/idempotency-key";

/**
 * Default name for the hidden honeypot input (must match register("…") in your form).
 * Use an obscure name so password managers do not autofill it.
 */
export const DEFAULT_HONEYPOT_FIELD_NAME = "x_b7f3a9";

/** Old honeypot names — still stripped from payloads if they appear in saved state. */
const LEGACY_HONEYPOT_NAMES = ["hp_referrer", "website"];

/**
 * Field names never sent inside `data` to the API (besides top-level name/email/phone).
 * `currentHoneypot` is the active trap from config; it is NOT a "bot flag" — it is only
 * the input `name`. Users should never type in it; submission is blocked only when it is non-empty.
 */
function buildExcludedDataFieldSet(currentHoneypot) {
  const s = new Set([
    "name",
    "email",
    "phone",
    "_hp",
    ...LEGACY_HONEYPOT_NAMES,
  ]);
  if (currentHoneypot) {
    s.add(currentHoneypot);
  }
  return s;
}

function parseFormApiPayload(text) {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * Leaman often persists the lead then returns a generic 500 (notification /
 * side-effect failure). Treat that — and explicit success payloads — as accepted
 * so the UI clears and shows success when the CRM actually got the lead.
 */
function isFormSubmitAccepted(response, payload) {
  if (response.ok) return true;

  if (payload && typeof payload === "object") {
    if (payload.success === true) return true;
    if (payload.id != null || payload.lead_id != null) return true;
    if (
      payload.data &&
      typeof payload.data === "object" &&
      (payload.data.id != null || payload.data.uuid != null)
    ) {
      return true;
    }
    if (
      response.status === 500 &&
      payload.message === "Server Error" &&
      !payload.errors &&
      !payload.error
    ) {
      return true;
    }
  }

  return false;
}

function formSubmitErrorMessage(payload, fallbackText) {
  if (payload && typeof payload === "object") {
    if (typeof payload.message === "string" && payload.message.trim()) {
      return payload.message;
    }
    if (typeof payload.error === "string" && payload.error.trim()) {
      return payload.error;
    }
  }
  return fallbackText || "Something went wrong! Please try again";
}

export const useFormSubmission = (config) => {
  const {
    formId,
    formName,
    trackingFields = ["name", "email"],
    successMessage = "Request has been submitted successfully",
    additionalFields = {},
    onSuccess,
    /**
     * Name of the hidden honeypot input. Falsy (`null` / `""`) disables the check and
     * stops excluding that key from the payload. The default does not label users as bots —
     * only a non-empty value for that field blocks submit.
     */
    honeypotField = DEFAULT_HONEYPOT_FIELD_NAME,
    /** Reject if submitted before this many ms after mount (blocks instant scripted submits). 0 to disable. */
    minTimeBeforeSubmitMs = 2000,
  } = config;

  const formReadyAtRef = useRef(null);
  useEffect(() => {
    formReadyAtRef.current = Date.now();
  }, []);

  // Form state ref to track data without re-renders
  const formState = useRef({
    started: false,
    lastFieldChanged: null,
    fieldValues: {},
    debugMessages: "",
    abandonTimer: null,
  });

  const [formStarted, setFormStarted] = useState(false);

  const {
    register,
    handleSubmit: rhfHandleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty, isSubmitting },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (honeypotField) {
      setValue(honeypotField, "", {
        shouldValidate: false,
        shouldDirty: false,
      });
    }
  }, [honeypotField, setValue]);

  /**
   * Browsers can autofill without firing React-friendly change events, so RHF's
   * value may stay stale. Syncing from the form DOM into setValue() immediately
   * before validation/submit covers fields the user never focused or tabbed.
   */
  const handleSubmit = useCallback(
    (onValid) => (e) => {
      const form = e?.currentTarget;
      if (form?.elements) {
        for (let i = 0; i < form.elements.length; i += 1) {
          const el = form.elements[i];
          if (!el.name) continue;
          // Never sync honeypot from DOM — password managers autofill hidden
          // inputs and that was silently blocking real submissions.
          if (honeypotField && el.name === honeypotField) continue;
          if (el.type === "submit" || el.type === "button") continue;
          if (el.type === "checkbox" || el.type === "radio") continue;
          if (el.type === "file") continue;
          if (
            el instanceof HTMLInputElement ||
            el instanceof HTMLTextAreaElement ||
            el instanceof HTMLSelectElement
          ) {
            setValue(el.name, el.value, {
              shouldValidate: true,
              shouldDirty: true,
            });
            formState.current.fieldValues[el.name] = el.value;
          }
        }
      }
      // Keep honeypot empty in RHF so autofill cannot trip the bot check
      if (honeypotField) {
        setValue(honeypotField, "", {
          shouldValidate: false,
          shouldDirty: false,
        });
      }
      return rhfHandleSubmit(onValid)(e);
    },
    [rhfHandleSubmit, setValue, honeypotField],
  );

  // Debug logging (in-memory always; console only in dev — avoids "DEBUG:" noise in prod)
  const logDebug = useCallback((message) => {
    const timestamp = new Date().toISOString();
    formState.current.debugMessages += `\n${timestamp}: ${message}`;
    if (process.env.NODE_ENV === "development") {
      console.log(`DEBUG: ${message}`);
    }
  }, []);

  // Submit abandoned form function
  const submitAbandonedForm = useCallback(() => {
    const hasData = trackingFields.some((field) =>
      formState.current.fieldValues[field]?.trim(),
    );

    if (!formState.current.started || !hasData) {
      logDebug("Abandoned form not submitted - no data or not started");
      return;
    }

    try {
      const idemKey = readAppDeviceId(formName) || getAppDeviceId(formName);

      // Extract name, email, phone for top level (if they exist)
      const topLevelFields = {};
      if (formState.current.fieldValues.name) {
        topLevelFields.name = formState.current.fieldValues.name;
      }
      if (formState.current.fieldValues.email) {
        topLevelFields.email = formState.current.fieldValues.email;
      }
      if (formState.current.fieldValues.phone) {
        topLevelFields.phone = formState.current.fieldValues.phone;
      }

      const abandonSkip = buildExcludedDataFieldSet(honeypotField);
      // All other fields (excluding PII top-level + honeypots) go into `data` for abandoned sends
      const otherFields = Object.keys(formState.current.fieldValues)
        .filter((key) => !abandonSkip.has(key))
        .reduce((acc, key) => {
          acc[key] = formState.current.fieldValues[key];
          return acc;
        }, {});

      const abandonData = {
        ...topLevelFields,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        status: "abandoned",
        data: {
          ...additionalFields,
          ...otherFields,
          date: new Date().toUTCString(),
        },
        formId,
      };

      logDebug(`Sending abandoned form data: ${JSON.stringify(abandonData)}`);

      // Trailing slash required — next.config has trailingSlash: true
      fetch("/api/forms-api/", {
        method: "POST",
        body: JSON.stringify(abandonData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "idempotency-key":
            idemKey ||
            `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        },
        keepalive: true,
      }).catch((err) => {
        logDebug(`Fetch error: ${err.message}`);
      });

      // Track the abandoned form in analytics
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "form_abandon",
          form_type: formName,
          ...trackingFields.reduce((acc, field) => {
            acc[`has_${field}`] = !!formState.current.fieldValues[field];
            return acc;
          }, {}),
          last_field_completed: formState.current.lastFieldChanged,
        });
        logDebug("GTM event pushed");
      }
    } catch (error) {
      logDebug(`Error in abandoned form: ${error?.message}`);
    }
  }, [
    logDebug,
    formId,
    formName,
    trackingFields,
    additionalFields,
    honeypotField,
  ]);

  // Form tracking effect
  useEffect(() => {
    const scheduleAbandonedFormSubmission = () => {
      if (formState.current.abandonTimer) {
        clearTimeout(formState.current.abandonTimer);
        logDebug("Cleared existing abandon timer");
      }

      logDebug("Scheduling abandoned form submission in 3 seconds");
      formState.current.abandonTimer = setTimeout(() => {
        formState.current.abandonTimer = null;
        logDebug("Executing delayed abandoned form submission");
        submitAbandonedForm();
      }, 3000);
    };

    const cancelScheduledSubmission = () => {
      if (formState.current.abandonTimer) {
        clearTimeout(formState.current.abandonTimer);
        formState.current.abandonTimer = null;
        logDebug("Canceled scheduled abandon form submission");
      }
    };

    const handleBeforeUnload = (e) => {
      const hasData = trackingFields.some((field) =>
        formState.current.fieldValues[field]?.trim(),
      );

      logDebug(
        `BeforeUnload triggered - Data: ${JSON.stringify(
          formState.current.fieldValues,
        )}`,
      );

      if (formState.current.started && !isSubmitSuccessful && hasData) {
        logDebug("Submitting abandoned form immediately (beforeunload)");
        submitAbandonedForm();
        e.preventDefault();
        e.returnValue = "Are you sure you want to leave?";
        return "Are you sure you want to leave?";
      }
    };

    const handleVisibilityChange = () => {
      const hasData = trackingFields.some((field) =>
        formState.current.fieldValues[field]?.trim(),
      );

      if (document.visibilityState === "hidden") {
        logDebug(`Visibility changed to: hidden`);

        if (formState.current.started && !isSubmitSuccessful && hasData) {
          logDebug("Scheduling abandoned form submission (visibility:hidden)");
          scheduleAbandonedFormSubmission();
        }
      } else if (document.visibilityState === "visible") {
        logDebug(`Visibility changed to: visible`);
        cancelScheduledSubmission();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelScheduledSubmission();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isSubmitSuccessful, logDebug, submitAbandonedForm, trackingFields]);

  // Track when form is started
  useEffect(() => {
    if (isDirty && !formStarted) {
      setFormStarted(true);
      formState.current.started = true;
      logDebug("Form started via isDirty");
    }
  }, [isDirty, formStarted, logDebug]);

  // Enhanced register: must forward RHF's onChange / onBlur or submit sees stale values
  // (e.g. browser autofill for fields the user did not focus).
  const registerWithTracking = useCallback(
    (name, options) => {
      const {
        onChange: rhfOnChange,
        onBlur: rhfOnBlur,
        ref,
        name: fieldName,
      } = register(name, options);

      const markStarted = () => {
        if (!formState.current.started) {
          formState.current.started = true;
          setFormStarted(true);
          logDebug(`Form started with ${name} field`);
        }
      };

      return {
        name: fieldName,
        ref,
        onChange: (e) => {
          rhfOnChange(e);
          const value = e.target.value;
          formState.current.fieldValues[name] = value;
          formState.current.lastFieldChanged = name;
          markStarted();
        },
        onInput: (e) => {
          rhfOnChange(e);
          const value = e.target.value;
          formState.current.fieldValues[name] = value;
          formState.current.lastFieldChanged = name;
          markStarted();
        },
        onBlur: (e) => {
          rhfOnBlur(e);
          const value = e.target.value;
          formState.current.fieldValues[name] = value;
          setValue(name, value, { shouldValidate: true, shouldDirty: true });
        },
        onAnimationStart: (e) => {
          if (e.animationName === "onAutoFillStart" && e.target) {
            const el = e.target;
            setTimeout(() => {
              const value = el.value ?? "";
              formState.current.fieldValues[name] = value;
              formState.current.lastFieldChanged = name;
              setValue(name, value, {
                shouldValidate: true,
                shouldDirty: true,
              });
              if (value) {
                markStarted();
              }
            }, 100);
          }
        },
      };
    },
    [register, logDebug, setValue],
  );

  // Submit completed form
  const submitCompletedForm = useCallback(
    async (data) => {
      if (honeypotField) {
        const raw = data[honeypotField];
        if (raw != null && String(raw).trim() !== "") {
          // Bot filled the trap — pretend success so scrapers learn nothing
          logDebug("Honeypot filled — fake success (likely bot)");
          onSuccess?.();
          toast.success(successMessage);
          reset();
          return;
        }
      }

      if (minTimeBeforeSubmitMs > 0 && formReadyAtRef.current != null) {
        const elapsed = Date.now() - formReadyAtRef.current;
        if (elapsed < minTimeBeforeSubmitMs) {
          logDebug(
            `Submit too fast (${elapsed}ms) — min ${minTimeBeforeSubmitMs}ms`,
          );
          toast.error(
            "Please take a moment to review the form, then try again.",
          );
          return;
        }
      }

      const toastId = toast.loading("Submitting...");

      // Clear any pending abandon form submissions
      if (formState.current.abandonTimer) {
        clearTimeout(formState.current.abandonTimer);
        formState.current.abandonTimer = null;
        logDebug("Cleared abandon timer during form submission");
      }

      // Always pass an idempotency key: use existing or create new
      const idemKey = readAppDeviceId(formName) || getAppDeviceId(formName);

      // Log all incoming form data to verify all fields are captured
      logDebug(
        `Received form data with fields: ${Object.keys(data).join(", ")}`,
      );
      logDebug(`Form data values: ${JSON.stringify(data)}`);

      // Extract name, email, phone for top level (if they exist)
      const topLevelFields = {};
      if (data.name !== undefined && data.name !== null && data.name !== "") {
        topLevelFields.name = data.name;
      }
      if (
        data.email !== undefined &&
        data.email !== null &&
        data.email !== ""
      ) {
        topLevelFields.email = data.email;
      }
      if (
        data.phone !== undefined &&
        data.phone !== null &&
        data.phone !== ""
      ) {
        topLevelFields.phone = data.phone;
      }

      const excludedFromData = buildExcludedDataFieldSet(honeypotField);
      const otherFields = Object.keys(data)
        .filter((key) => !excludedFromData.has(key))
        .reduce((acc, key) => {
          acc[key] = data[key];
          return acc;
        }, {});

      logDebug(`Top level fields: ${Object.keys(topLevelFields).join(", ")}`);
      logDebug(
        `Other fields in data object: ${Object.keys(otherFields).join(", ")}`,
      );

      const formData = {
        ...topLevelFields,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        status: "completed",
        data: {
          ...additionalFields,
          ...otherFields,
          date: new Date().toUTCString(),
        },
        formId,
      };

      logDebug(
        `Final form data structure: ${JSON.stringify(formData, null, 2)}`,
      );

      try {
        // Trailing slash required — next.config has trailingSlash: true
        const response = await fetch("/api/forms-api/", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "idempotency-key":
              idemKey ||
              `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          },
        });

        const text = await response.text();
        const payload = parseFormApiPayload(text);

        if (!isFormSubmitAccepted(response, payload)) {
          throw new Error(formSubmitErrorMessage(payload, text));
        }

        // Reset everything
        formState.current = {
          started: false,
          lastFieldChanged: null,
          fieldValues: {},
          debugMessages: "",
          abandonTimer: null,
        };
        setFormStarted(false);
        reset();

        // DataLayer tracking
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "generate_lead",
          });
        }

        toast.success(successMessage, {id: toastId});
        onSuccess?.();

        deleteAppDeviceId(formName);
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error(error?.message || "Something went wrong! Please try again", {
          id: toastId,
        });
      }
    },
    [
      formId,
      formName,
      reset,
      logDebug,
      successMessage,
      additionalFields,
      onSuccess,
      honeypotField,
      minTimeBeforeSubmitMs,
    ],
  );

  // Add autofill detection CSS
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes onAutoFillStart { from {} to {} }
      input:-webkit-autofill {
        animation-name: onAutoFillStart;
      }
    `;
    document.head.appendChild(styleEl);
    return () => {
      if (styleEl.parentNode) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  return {
    register,
    registerWithTracking,
    handleSubmit,
    reset,
    errors,
    isSubmitSuccessful,
    isDirty,
    isSubmitting,
    submitCompletedForm,
    submitAbandonedForm,
  };
};
