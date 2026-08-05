import {CmsPageView, getCmsPageMetadata} from "@/components/pages/CmsPageView"

const SLUG = "rent-wheel-loader-kansas-city"

export async function generateMetadata() {
  return getCmsPageMetadata(SLUG)
}

export default async function RentWheelLoaderPage() {
  return <CmsPageView slug={SLUG} />
}
