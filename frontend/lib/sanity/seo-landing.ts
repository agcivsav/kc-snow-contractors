import {SEO_LANDING_BY_SLUG_QUERY} from "@/lib/sanity/queries"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"
import type {SeoLandingData} from "@/app/landing/landing-types"

export async function getSeoLanding(
  slug: string,
  stega?: boolean,
): Promise<SeoLandingData | null> {
  const {data} = await safeSanityFetch({
    query: SEO_LANDING_BY_SLUG_QUERY,
    params: {slug},
    stega,
  })
  return (data as SeoLandingData | null) ?? null
}
