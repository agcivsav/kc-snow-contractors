import {CmsPageView, getCmsPageMetadata} from "@/components/pages/CmsPageView"

const SLUG = "rent-skid-steer-kansas-city"

export async function generateMetadata() {
  return getCmsPageMetadata(SLUG)
}

export default async function RentSkidSteerPage() {
  return <CmsPageView slug={SLUG} />
}
