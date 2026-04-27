import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type RegisterWithTracking = (
  name: string,
  options?: Parameters<UseFormRegister<FieldValues>>[1],
) => Record<string, unknown>;

export type QuoteFormFieldsProps = {
  register: UseFormRegister<FieldValues>;
  registerWithTracking: RegisterWithTracking;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  inputClass: string;
  errClass: string;
};

export function errMsg(e: unknown) {
  if (e && typeof e === "object" && "message" in e) {
    const m = (e as { message?: string }).message;
    if (m != null) {
      return String(m);
    }
  }
  return "";
}
