import {stegaClean} from "next-sanity"
import type {EquipmentItem} from "@/data/equipment"
import {resolveSanityImageUrl} from "@/lib/sanity/image"

type SanityImage = {
  alt?: string
  asset?: {_id?: string; url?: string; _ref?: string} | null
} | null

type SanityEquipment = {
  slug?: string
  model?: string
  make?: string
  modelNumber?: string
  year?: string
  category?: string
  title?: string
  description?: string
  tagline?: string
  image?: SanityImage
  gallery?: SanityImage[] | null
  cardStats?: {value?: string; label?: string}[] | null
  stats?: {value?: string; label?: string}[] | null
  specs?: {label?: string; value?: string}[] | null
  applications?: {title?: string; desc?: string}[] | null
  seo?: {title?: string; description?: string} | null
  ctaHeading?: string
  ctaDescription?: string
}

function imageUrl(image: SanityImage | undefined, width: number) {
  return resolveSanityImageUrl(image, width) || image?.asset?.url || ""
}

export function mapSanityEquipment(doc: SanityEquipment): EquipmentItem | null {
  const slug = stegaClean(doc.slug || "")
  const model = stegaClean(doc.model || "")
  const title = stegaClean(doc.title || "") || model
  const category = stegaClean(doc.category || "")
  if (!slug || !model) return null

  const primary = imageUrl(doc.image, 1200)
  const gallery =
    doc.gallery
      ?.map((img) => ({
        src: imageUrl(img ?? null, 1200),
        alt: stegaClean(img?.alt || "") || model,
      }))
      .filter((img) => img.src) ?? []

  return {
    slug,
    model,
    make: stegaClean(doc.make || "") || "CASE",
    modelNumber: stegaClean(doc.modelNumber || ""),
    year: stegaClean(doc.year || ""),
    category: category || "Equipment",
    title,
    description: stegaClean(doc.description || ""),
    tagline: stegaClean(doc.tagline || ""),
    image: primary,
    imageAlt: stegaClean(doc.image?.alt || "") || model,
    gallery: gallery.length
      ? gallery
      : primary
        ? [{src: primary, alt: stegaClean(doc.image?.alt || "") || model}]
        : [],
    cardStats:
      doc.cardStats
        ?.filter((s) => s.value && s.label)
        .map((s) => ({
          val: stegaClean(s.value!),
          label: stegaClean(s.label!),
        })) ?? [],
    stats:
      doc.stats
        ?.filter((s) => s.value && s.label)
        .map((s) => ({
          num: stegaClean(s.value!),
          label: stegaClean(s.label!),
        })) ?? [],
    specs:
      doc.specs
        ?.filter((s) => s.label && s.value)
        .map((s) => ({
          label: stegaClean(s.label!),
          value: stegaClean(s.value!),
        })) ?? [],
    applications:
      doc.applications
        ?.filter((a) => a.title && a.desc)
        .map((a) => ({
          title: stegaClean(a.title!),
          desc: stegaClean(a.desc!),
        })) ?? [],
    metaTitle: stegaClean(doc.seo?.title || "") || title,
    metaDescription:
      stegaClean(doc.seo?.description || "") ||
      stegaClean(doc.description || ""),
    ctaHeading:
      stegaClean(doc.ctaHeading || "") || `Ready to Rent the ${model}?`,
    ctaDescription:
      stegaClean(doc.ctaDescription || "") ||
      "Daily, weekly, and monthly rates. Delivery available across our service area.",
  }
}
