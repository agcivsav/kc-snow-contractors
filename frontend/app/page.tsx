import type {Metadata} from "next"
import {HomeHero} from "@/components/home/HomeHero"
import {PageBuilder} from "@/components/home/PageBuilder"
import type {HomePageData} from "@/components/home/home-types"
import {withResolvedHeroLayout} from "@/lib/sanity/hero-layout"
import {HOME_PAGE_QUERY} from "@/lib/sanity/queries"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"

// Netlify caches pages at build time; without this, Sanity edits never show until redeploy
export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await safeSanityFetch({
    query: HOME_PAGE_QUERY,
    stega: false,
  })
  const page = data as HomePageData | null

  return {
    title: page?.seo?.title || undefined,
    description: page?.seo?.description || undefined,
  }
}

export default async function HomePage() {
  const {data} = await safeSanityFetch({query: HOME_PAGE_QUERY})
  const page = data as HomePageData | null

  if (!page?.hero) {
    return null
  }

  const hero = withResolvedHeroLayout("home", page.hero)

  return (
    <>
      <HomeHero {...hero} headingLevel="h1" />
      <PageBuilder blocks={page.pageBuilder ?? []} />
    </>
  )
}
