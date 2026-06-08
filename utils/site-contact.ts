export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() ?? "";

export const CONTACT_PHONE_HREF = CONTACT_PHONE
  ? `tel:${CONTACT_PHONE.replace(/\D/g, "")}`
  : "";
