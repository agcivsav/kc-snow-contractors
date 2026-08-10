import {CmsPageView, getCmsPageMetadata} from "@/components/pages/CmsPageView"

const SLUG = "contractor-program"

export async function generateMetadata() {
  return getCmsPageMetadata(SLUG)
}

export default async function ContractorProgramPage() {
  return <CmsPageView slug={SLUG} />
}
