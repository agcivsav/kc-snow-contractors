import type {Metadata} from "next"
import {HomeHero} from "@/components/home/HomeHero"
import {PageBuilder} from "@/components/home/PageBuilder"
import type {CmsPageData} from "@/components/home/home-types"
import {withResolvedHeroLayout} from "@/lib/sanity/hero-layout"
import {getPageDocumentId} from "@/lib/sanity/page-ids"
import {PAGE_BY_ID_QUERY, PAGE_BY_SLUG_QUERY} from "@/lib/sanity/queries"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"

const TITLE_FALLBACKS: Record<string, string> = {
  "rent-skid-steer-kansas-city": "Skid Steer Rental Kansas City, MO",
  "rent-wheel-loader-kansas-city": "Wheel Loader Rental Kansas City, MO",
  "how-it-works": "How Equipment Rental Works",
  "contractor-program": "Contractor Rental Program",
}

function firstText(...values: Array<string | undefined | null>): string | undefined {
  for (const value of values) {
    const text = value?.trim()
    if (text) return text
  }
  return undefined
}

function cmsPageTitle(page: CmsPageData | null, slug: string): string {
  const heroTitle = firstText(
    [page?.hero?.title, page?.hero?.highlightedTitle]
      .map((part) => part?.trim())
      .filter(Boolean)
      .join(" "),
  )

  return (
    firstText(page?.seo?.title, heroTitle, page?.title, TITLE_FALLBACKS[slug]) ??
    "RPM Equipment Leasing"
  )
}

async function fetchCmsPage(slug: string, stega?: boolean) {
  const documentId = getPageDocumentId(slug)
  if (documentId) {
    const {data} = await safeSanityFetch({
      query: PAGE_BY_ID_QUERY,
      params: {id: documentId},
      stega,
    })
    if (data) return data as CmsPageData
  }
  const {data} = await safeSanityFetch({
    query: PAGE_BY_SLUG_QUERY,
    params: {slug},
    stega,
  })
  return data as CmsPageData | null
}

export async function hasCmsPage(slug: string): Promise<boolean> {
  const page = await fetchCmsPage(slug, false)
  return Boolean(page?.hero)
}

export async function getCmsPageMetadata(slug: string): Promise<Metadata> {
  const page = await fetchCmsPage(slug, false)
  const title = cmsPageTitle(page, slug)
  const description = firstText(page?.seo?.description, page?.hero?.description)

  return {
    title,
    description,
    alternates: {canonical: `/${slug}/`},
    openGraph: {
      title,
      description,
      url: `/${slug}/`,
    },
  }
}

export async function CmsPageView({slug}: {slug: string}) {
  const page = await fetchCmsPage(slug)

  if (!page?.hero) {
    return null
  }

  const hero = withResolvedHeroLayout(slug, page.hero)

  return (
    <>
      <HomeHero {...hero} headingLevel="h1" />
      <PageBuilder blocks={page.pageBuilder ?? []} />
    </>
  )
}
