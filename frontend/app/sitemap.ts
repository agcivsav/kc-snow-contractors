import type {MetadataRoute} from "next"
import {getEquipmentSlugs} from "@/lib/sanity/equipment"
import {CMS_MARKETING_SLUGS_QUERY} from "@/lib/sanity/queries"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"
import {SITE_URL} from "@/lib/site-url"

const STATIC_ROUTES = [
  {path: "/", priority: 1.0, changeFrequency: "weekly" as const},
  {path: "/how-it-works/", priority: 0.8, changeFrequency: "monthly" as const},
  {
    path: "/contractor-program/",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {path: "/inventory/", priority: 0.9, changeFrequency: "weekly" as const},
  {
    path: "/rent-skid-steer-kansas-city/",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/rent-wheel-loader-kansas-city/",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {path: "/quote/", priority: 0.8, changeFrequency: "yearly" as const},
  {path: "/contact/", priority: 0.8, changeFrequency: "yearly" as const},
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [{data: marketingSlugs}, equipmentSlugs] = await Promise.all([
    safeSanityFetch({query: CMS_MARKETING_SLUGS_QUERY, stega: false}),
    getEquipmentSlugs(),
  ])

  const fromCms = (Array.isArray(marketingSlugs) ? marketingSlugs : [])
    .filter((slug): slug is string => typeof slug === "string")
    .map((slug) => ({
      path: `/${slug}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }))

  const inventoryItems = equipmentSlugs.map((slug) => ({
    path: `/inventory/${slug}/`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }))

  const routes = [...STATIC_ROUTES, ...inventoryItems, ...fromCms]

  return routes.map(({path, priority, changeFrequency}) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
