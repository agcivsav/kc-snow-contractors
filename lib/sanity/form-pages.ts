import type {ContactPageData, QuotePageData} from "./form-page-types"
import {CONTACT_PAGE_QUERY, QUOTE_PAGE_QUERY} from "./queries"
import {safeSanityFetch} from "./safe-fetch"

export async function getContactPage(
  stega?: boolean,
): Promise<ContactPageData | null> {
  const {data} = await safeSanityFetch({
    query: CONTACT_PAGE_QUERY,
    stega,
  })
  return (data as ContactPageData | null) ?? null
}

export async function getQuotePage(
  stega?: boolean,
): Promise<QuotePageData | null> {
  const {data} = await safeSanityFetch({
    query: QUOTE_PAGE_QUERY,
    stega,
  })
  return (data as QuotePageData | null) ?? null
}
