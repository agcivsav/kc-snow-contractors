import {createImageUrlBuilder, type SanityImageSource} from "@sanity/image-url"
import {dataset, projectId} from "./env"

const builder = createImageUrlBuilder({projectId, dataset})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function resolveSanityImageUrl(
  source: SanityImageSource | null | undefined,
  width = 1600,
): string | null {
  if (!source) return null
  try {
    return urlFor(source).width(width).auto("format").url()
  } catch {
    return null
  }
}
