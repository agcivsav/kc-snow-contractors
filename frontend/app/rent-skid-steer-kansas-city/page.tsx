import {CmsPageView, getCmsPageMetadata} from "@/components/pages/CmsPageView"

export const revalidate = 60

const SLUG = "rent-skid-steer-kansas-city"

export async function generateMetadata() {
  return getCmsPageMetadata(SLUG)
}

export default async function RentSkidSteerPage() {
  return <CmsPageView slug={SLUG} />
}
