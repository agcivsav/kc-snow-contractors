"use client";

import { useState } from "react";
import {
  DEFAULT_HONEYPOT_FIELD_NAME,
  useFormSubmission,
} from "@/hooks/useFormSubmission";
import { FormSuccessMessage } from "./FormSuccessMessage";
import { errClass, errMsg, inputClass } from "./landing-form-shared";

type LandingFormProps = {
  idPrefix?: string;
};

export function LandingForm({ idPrefix = "landing" }: LandingFormProps) {
  const [sent, setSent] = useState(false);

  const {
    register,
    registerWithTracking,
    handleSubmit,
    errors,
    isSubmitting,
    submitCompletedForm,
  } = useFormSubmission({
    formId: "6a26d28b",
    formName: "quote_form",
    trackingFields: ["email", "name", "phone"],
    successMessage: "Quote request received. We'll be in touch shortly.",
    onSuccess: () => setSent(true),
    additionalFields: { source: "landing_email_campaign" },
  });

  if (sent) {
    return (
      <FormSuccessMessage
        title="Quote Request Received"
        message="We'll get back to you same day — usually within the hour during business hours."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(submitCompletedForm)} className="space-y-4" noValidate>
      <input type="hidden" {...register(DEFAULT_HONEYPOT_FIELD_NAME)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name *
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            className={inputClass}
            aria-invalid={errors.name ? "true" : "false"}
            {...registerWithTracking("name", { required: "Name is required" })}
          />
          {errors.name && <span className={errClass}>{errMsg(errors.name)}</span>}
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            className={inputClass}
            aria-invalid={errors.email ? "true" : "false"}
            {...registerWithTracking("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <span className={errClass}>{errMsg(errors.email)}</span>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-phone`}
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Phone *
        </label>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          className={inputClass}
          aria-invalid={errors.phone ? "true" : "false"}
          {...registerWithTracking("phone", {
            required: "Phone is required",
          })}
        />
        {errors.phone && (
          <span className={errClass}>{errMsg(errors.phone)}</span>
        )}
      </div>
      <div>
        <label
          htmlFor={`${idPrefix}-notes`}
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Project Details (optional)
        </label>
        <textarea
          id={`${idPrefix}-notes`}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Dates, delivery needs, job type…"
          {...register("notes")}
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full min-h-[44px] disabled:opacity-50 disabled:pointer-events-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting…" : "Get My Free Quote"}
      </button>
    </form>
  );
}
