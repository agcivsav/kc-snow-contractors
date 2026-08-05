import {CmsPageView, getCmsPageMetadata} from "@/components/pages/CmsPageView"

export const revalidate = 60

const SLUG = "how-it-works"

export async function generateMetadata() {
  return getCmsPageMetadata(SLUG)
}

export default async function HowItWorksPage() {
  return <CmsPageView slug={SLUG} />
}
