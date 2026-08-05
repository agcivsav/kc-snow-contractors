import type {Metadata} from "next"
import {notFound} from "next/navigation"
import {LandingPageView} from "@/app/landing/LandingPageView"
import {
  CmsPageView,
  getCmsPageMetadata,
  hasCmsPage,
} from "@/components/pages/CmsPageView"
import {CMS_MARKETING_SLUGS_QUERY} from "@/lib/sanity/queries"
import {getSeoLanding} from "@/lib/sanity/seo-landing"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"

type PageProps = {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  const {data} = await safeSanityFetch({
    query: CMS_MARKETING_SLUGS_QUERY,
    stega: false,
  })
  const slugs = (Array.isArray(data) ? data : []).filter(
    (slug): slug is string =>
      typeof slug === "string" && slug.length > 0 && slug !== "landing",
  )
  return slugs.map((slug) => ({slug}))
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params
  const landing = await getSeoLanding(slug, false)
  if (landing) {
    return {
      title: landing.seo?.title || landing.title,
      description: landing.seo?.description || undefined,
    }
  }
  return getCmsPageMetadata(slug)
}

export default async function CmsMarketingPage({params}: PageProps) {
  const {slug} = await params

  const landing = await getSeoLanding(slug)
  if (landing) {
    return <LandingPageView data={landing} />
  }

  if (!(await hasCmsPage(slug))) notFound()
  return <CmsPageView slug={slug} />
}
