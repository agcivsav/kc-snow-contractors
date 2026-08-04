"use client"

import {
  DEFAULT_HONEYPOT_FIELD_NAME,
  useFormSubmission,
} from "@/hooks/useFormSubmission"
import type {ContactFormCopy} from "@/lib/sanity/form-page-types"

const inputClass =
  "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
const errClass = "text-sm text-red-600 mt-1 block"

type ContactFormProps = {
  copy: NonNullable<ContactFormCopy>
  onSuccess: () => void
}

export function ContactForm({copy, onSuccess}: ContactFormProps) {
  const {
    register,
    registerWithTracking,
    handleSubmit,
    errors,
    isSubmitting,
    submitCompletedForm,
  } = useFormSubmission({
    formId: "69ef9db9",
    formName: "contact_form",
    trackingFields: ["email", "name", "phone"],
    successMessage:
      copy.successMessage || "Message sent. We'll get back to you shortly.",
    onSuccess,
  })

  return (
    <form
      onSubmit={handleSubmit(submitCompletedForm)}
      className="space-y-4"
      noValidate
    >
      <input type="hidden" {...register(DEFAULT_HONEYPOT_FIELD_NAME)} />
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Name *
        </label>
        <input
          id="contact-name"
          type="text"
          className={inputClass}
          aria-invalid={errors.name ? "true" : "false"}
          {...registerWithTracking("name", {required: "Name is required"})}
        />
        {errors.name ? (
          <span className={errClass}>{errors.name.message as string}</span>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          className={inputClass}
          aria-invalid={errors.email ? "true" : "false"}
          {...registerWithTracking("email", {required: "Email is required"})}
        />
        {errors.email ? (
          <span className={errClass}>{errors.email.message as string}</span>
        ) : null}
      </div>
      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          className={inputClass}
          {...registerWithTracking("phone")}
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={`${inputClass} resize-none`}
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", {required: "Message is required"})}
        />
        {errors.message ? (
          <span className={errClass}>{errors.message.message as string}</span>
        ) : null}
      </div>
      <button
        type="submit"
        className="btn-primary w-full min-h-[44px] disabled:opacity-50 disabled:pointer-events-none"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? copy.submittingLabel || "Sending…"
          : copy.submitLabel || "Send Message"}
      </button>
    </form>
  )
}
