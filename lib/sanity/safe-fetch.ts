import {sanityFetch as liveFetch} from "./live"

type FetchArgs = Parameters<typeof liveFetch>[0]

/**
 * Wraps sanityFetch so network timeouts / CDN failures don't crash the page.
 */
export async function safeSanityFetch<const TArgs extends FetchArgs>(
  args: TArgs,
): Promise<{data: Awaited<ReturnType<typeof liveFetch>>["data"] | null}> {
  try {
    return await liveFetch(args)
  } catch (error) {
    console.error("[sanity] fetch failed:", error)
    return {data: null}
  }
}
