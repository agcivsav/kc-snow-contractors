import {stegaClean} from "next-sanity"
import {
  equipmentItems,
  getEquipmentBySlug as getStaticEquipmentBySlug,
  getEquipmentSlugs as getStaticEquipmentSlugs,
  type EquipmentItem,
} from "@/data/equipment"
import {mapSanityEquipment} from "@/lib/sanity/map-equipment"
import {
  EQUIPMENT_BY_SLUG_QUERY,
  EQUIPMENT_LIST_QUERY,
  EQUIPMENT_SLUGS_QUERY,
} from "@/lib/sanity/queries"
import {safeSanityFetch} from "@/lib/sanity/safe-fetch"

export async function getEquipmentList(): Promise<EquipmentItem[]> {
  const {data} = await safeSanityFetch({
    query: EQUIPMENT_LIST_QUERY,
    stega: false,
  })
  const mapped = (Array.isArray(data) ? data : [])
    .map((doc) => mapSanityEquipment(doc))
    .filter((item): item is EquipmentItem => Boolean(item))

  if (!mapped.length) return equipmentItems

  const bySlug = new Map(equipmentItems.map((item) => [item.slug, item]))
  for (const item of mapped) bySlug.set(item.slug, item)
  return Array.from(bySlug.values())
}

export async function getEquipmentBySlug(
  slug: string,
): Promise<EquipmentItem | undefined> {
  const cleanSlug = stegaClean(slug)
  const {data} = await safeSanityFetch({
    query: EQUIPMENT_BY_SLUG_QUERY,
    params: {slug: cleanSlug},
    stega: false,
  })
  const fromCms = data ? mapSanityEquipment(data) : null
  return fromCms || getStaticEquipmentBySlug(cleanSlug)
}

export async function getEquipmentSlugs(): Promise<string[]> {
  const {data} = await safeSanityFetch({
    query: EQUIPMENT_SLUGS_QUERY,
    stega: false,
  })
  const cmsSlugs = (Array.isArray(data) ? data : [])
    .map((slug) => (typeof slug === "string" ? stegaClean(slug) : ""))
    .filter(Boolean)
  return Array.from(new Set([...getStaticEquipmentSlugs(), ...cmsSlugs]))
}
