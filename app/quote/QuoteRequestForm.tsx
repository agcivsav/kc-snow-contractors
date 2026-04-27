"use client";

import {
  DEFAULT_HONEYPOT_FIELD_NAME,
  useFormSubmission,
} from "@/hooks/useFormSubmission";
import { QuoteFormFields } from "./QuoteFormFields";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400";
const errClass = "text-sm text-red-600 mt-1 block";

type QuoteRequestFormProps = {
  onSuccess: () => void;
};

export function QuoteRequestForm({ onSuccess }: QuoteRequestFormProps) {
  const {
    register,
    registerWithTracking,
    handleSubmit,
    errors,
    isSubmitting,
    submitCompletedForm,
  } = useFormSubmission({
    formId: "69ef879a",
    formName: "quote_form",
    trackingFields: ["email", "name", "phone"],
    successMessage: "Quote request received. We'll be in touch shortly.",
    onSuccess,
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <form
        onSubmit={handleSubmit(submitCompletedForm)}
        className="space-y-5"
        noValidate
      >
        <input type="hidden" {...register(DEFAULT_HONEYPOT_FIELD_NAME)} />
        <QuoteFormFields
          register={register}
          registerWithTracking={registerWithTracking}
          errors={errors}
          isSubmitting={isSubmitting}
          inputClass={inputClass}
          errClass={errClass}
        />
      </form>
    </div>
  );
}
