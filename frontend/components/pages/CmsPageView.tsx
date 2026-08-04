import type {Metadata} from "next"
import {HomeHero} from "@/components/home/HomeHero"
import {PageBuilder} from "@/components/home/PageBuilder"
import type {CmsPageData} from "@/components/home/home-types"
import {withResolvedHeroLayout} from "@/lib/sanity/hero-layout"
import {getPageDocumentId} from "@/lib/sanity/page-ids"
import {PAGE_BY_ID_QUERY, PAGE_BY_SLUG_QUERY} from "@/lib/sanity/queries"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"

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
  return {
    title: page?.seo?.title || undefined,
    description: page?.seo?.description || undefined,
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
