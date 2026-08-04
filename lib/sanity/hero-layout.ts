import {stegaClean} from "next-sanity"
import type {HeroBlock} from "@/components/home/home-types"

export type HeroLayout = "home" | "banner" | "centered" | "compact"
export type EyebrowStyle = "yellow" | "green"

const CENTERED_SLUGS = new Set(["how-it-works", "contact"])
const COMPACT_SLUGS = new Set([
  "quote",
  "rent-wheel-loader-kansas-city",
  "rent-skid-steer-kansas-city",
])
const GREEN_EYEBROW_SLUGS = new Set(["spring-equipment-rental"])

/** Hero layout is derived from the route — not editable in Studio. */
export function heroLayoutForSlug(slug: string): HeroLayout {
  if (slug === "home" || slug === "") return "home"
  if (CENTERED_SLUGS.has(slug)) return "centered"
  if (COMPACT_SLUGS.has(slug) || slug.startsWith("rent-")) return "compact"
  return "banner"
}

export function defaultEyebrowStyleForSlug(slug: string): EyebrowStyle {
  return GREEN_EYEBROW_SLUGS.has(slug) ? "green" : "yellow"
}

/** Apply route-based layout; keep CMS eyebrow style when set. */
export function withResolvedHeroLayout(
  slug: string,
  hero: HeroBlock,
): HeroBlock {
  return {
    ...hero,
    layout: heroLayoutForSlug(slug),
    eyebrowStyle:
      stegaClean(hero.eyebrowStyle) || defaultEyebrowStyleForSlug(slug),
  }
}
