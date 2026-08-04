import type { QuoteFormFieldsProps } from "./quote-form-shared";
import { QuoteFormContactSection } from "./QuoteFormContactSection";
import { QuoteFormRentalSection } from "./QuoteFormRentalSection";

export function QuoteFormFields(props: QuoteFormFieldsProps) {
  return (
    <>
      <QuoteFormContactSection {...props} />
      <QuoteFormRentalSection {...props} />
    </>
  );
}
