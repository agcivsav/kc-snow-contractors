/**
 * Fixed document IDs for top-level main pages only.
 * Rental programs + SEO landings are created with + and loaded by slug.
 */
export const PAGE_DOCUMENT_IDS: Record<string, string> = {
  "how-it-works": "page-how-it-works",
  "contractor-program": "page-contractor-program",
  contact: "page-contact",
  quote: "page-quote",
  inventory: "page-inventory",
  "rent-wheel-loader-kansas-city": "page-rent-wheel-loader",
  "rent-skid-steer-kansas-city": "page-rent-skid-steer",
}

export function getPageDocumentId(slug: string): string | undefined {
  return PAGE_DOCUMENT_IDS[slug]
}
