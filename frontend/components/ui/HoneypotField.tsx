import {DEFAULT_HONEYPOT_FIELD_NAME} from "@/hooks/useFormSubmission"

type HoneypotFieldProps = {
  // RHF register — keep loose so JS/TS form hooks both work
  register: (name: string) => object
  name?: string
}

/** Off-screen trap — avoid type="hidden" (password managers autofill those). */
export function HoneypotField({
  register,
  name = DEFAULT_HONEYPOT_FIELD_NAME,
}: HoneypotFieldProps) {
  return (
    <div
      className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      aria-hidden="true"
    >
      <label htmlFor={`hp-${name}`}>Company website</label>
      <input
        id={`hp-${name}`}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register(name)}
      />
    </div>
  )
}
