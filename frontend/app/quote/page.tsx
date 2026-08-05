import type {Metadata} from "next"
import {QuotePageClient} from "./QuotePageClient"
import type {HeroBlock} from "@/components/home/home-types"
import {withResolvedHeroLayout} from "@/lib/sanity/hero-layout"
import {getQuotePage} from "@/lib/sanity/form-pages"

export const revalidate = 60

const defaultHero: HeroBlock = {
  title: "Get a Quote",
  description: "Fill out the form below. We respond same day.",
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getQuotePage(false)
  return {
    title: page?.seo?.title || "Get a Quote | RPM Equipment Leasing",
    description:
      page?.seo?.description ||
      "Request a quote for CASE equipment rental in Kansas City.",
  }
}

export default async function QuotePage() {
  const page = await getQuotePage()
  const hero = withResolvedHeroLayout(
    "quote",
    page?.hero?.title ? page.hero : defaultHero,
  )

  return (
    <QuotePageClient
      hero={hero}
      success={page?.quoteSuccess || {}}
      sidebarFast={page?.quoteSidebarFast || {}}
      whatYouGet={page?.quoteSidebarWhatYouGet || {}}
      multiUnit={page?.quoteSidebarMultiUnit || {}}
    />
  )
}
