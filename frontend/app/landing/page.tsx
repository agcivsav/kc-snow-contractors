import type {Metadata} from "next"
import {LandingPageView} from "./LandingPageView"
import {getSeoLanding} from "@/lib/sanity/seo-landing"

export const revalidate = 60

const SLUG = "landing"

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSeoLanding(SLUG, false)
  return {
    title:
      page?.seo?.title ||
      "Get Your Equipment Quote | RPM Equipment Leasing — Kansas City",
    description:
      page?.seo?.description ||
      "Request a free quote on CASE wheel loaders and skid steers in Kansas City.",
    robots: {index: false, follow: false},
  }
}

export default async function LandingPage() {
  const page = await getSeoLanding(SLUG)
  if (!page) return null
  return <LandingPageView data={page} />
}
