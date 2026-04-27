import { errMsg, type QuoteFormFieldsProps } from "./quote-form-shared";

export function QuoteFormContactSection({
  register,
  registerWithTracking,
  errors,
  inputClass,
  errClass,
}: QuoteFormFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-name"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Full Name *
          </label>
          <input
            id="quote-name"
            type="text"
            className={inputClass}
            aria-invalid={errors.name ? "true" : "false"}
            {...registerWithTracking("name", { required: "Name is required" })}
          />
          {errors.name && <span className={errClass}>{errMsg(errors.name)}</span>}
        </div>
        <div>
          <label
            htmlFor="quote-email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            id="quote-email"
            type="email"
            className={inputClass}
            aria-invalid={errors.email ? "true" : "false"}
            {...registerWithTracking("email", {
              required: "Email is required",
            })}
          />
          {errors.email && <span className={errClass}>{errMsg(errors.email)}</span>}
        </div>
        <div>
          <label
            htmlFor="quote-phone"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Phone *
          </label>
          <input
            id="quote-phone"
            type="tel"
            className={inputClass}
            aria-invalid={errors.phone ? "true" : "false"}
            {...registerWithTracking("phone", {
              required: "Phone is required",
            })}
          />
          {errors.phone && <span className={errClass}>{errMsg(errors.phone)}</span>}
        </div>
        <div>
          <label
            htmlFor="quote-company"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Company (optional)
          </label>
          <input id="quote-company" type="text" className={inputClass} {...register("company")} />
        </div>
      </div>

      <div>
        <label
          htmlFor="quote-machine"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Machine Needed *
        </label>
        <select
          id="quote-machine"
          className={`${inputClass} bg-white`}
          aria-invalid={errors.machine ? "true" : "false"}
          {...register("machine", { required: "Please select a machine" })}
        >
          <option value="">Select a machine</option>
          <option value="321f">CASE 321F Compact Wheel Loader</option>
          <option value="sv280b">CASE SV280B Skid Steer</option>
          <option value="both">Both (multiple units)</option>
          <option value="unsure">Not sure — need advice</option>
        </select>
        {errors.machine && <span className={errClass}>{errMsg(errors.machine)}</span>}
      </div>
    </>
  );
}
