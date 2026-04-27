import { errMsg, type QuoteFormFieldsProps } from "./quote-form-shared";

export function QuoteFormRentalSection({
  register,
  errors,
  isSubmitting,
  inputClass,
  errClass,
}: QuoteFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-start"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Rental Start Date *
          </label>
          <input
            id="quote-start"
            type="date"
            className={inputClass}
            aria-invalid={errors.startDate ? "true" : "false"}
            {...register("startDate", { required: "Start date is required" })}
          />
          {errors.startDate && (
            <span className={errClass}>{errMsg(errors.startDate)}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="quote-end"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Rental End Date *
          </label>
          <input
            id="quote-end"
            type="date"
            className={inputClass}
            aria-invalid={errors.endDate ? "true" : "false"}
            {...register("endDate", { required: "End date is required" })}
          />
          {errors.endDate && <span className={errClass}>{errMsg(errors.endDate)}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-delivery"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Delivery Needed?
          </label>
          <select
            id="quote-delivery"
            className={`${inputClass} bg-white`}
            {...register("deliveryNeeded")}
          >
            <option value="">Select</option>
            <option value="yes">Yes — deliver to my site</option>
            <option value="no">No — I'll pick up</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="quote-job"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Job Type
          </label>
          <select
            id="quote-job"
            className={`${inputClass} bg-white`}
            {...register("jobType")}
          >
            <option value="">Select</option>
            <option value="snow">Snow Removal</option>
            <option value="landscaping">Landscaping</option>
            <option value="construction">Construction / Site Work</option>
            <option value="grading">Grading / Earthwork</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="quote-notes"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Additional Notes
        </label>
        <textarea
          id="quote-notes"
          rows={4}
          placeholder="Job site location, specific attachment needs, quantity, anything else..."
          className={`${inputClass} resize-none`}
          {...register("notes")}
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full py-3 min-h-[44px] disabled:opacity-50 disabled:pointer-events-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting…" : "Submit Quote Request"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        We respond same day during business hours.
      </p>
    </>
  );
}
