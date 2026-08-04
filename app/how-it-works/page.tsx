import {CmsPageView, getCmsPageMetadata} from "@/components/pages/CmsPageView"

const SLUG = "how-it-works"

export async function generateMetadata() {
  return getCmsPageMetadata(SLUG)
}

export default async function HowItWorksPage() {
  return <CmsPageView slug={SLUG} />
}
