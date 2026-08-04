import type {HomeImage, SeoData} from "@/components/home/home-types"

export type LandingHeroData = {
  eyebrow?: string
  title?: string
  highlightedTitle?: string
  description?: string
  bullets?: string[]
  ctaLabel?: string
  formHeading?: string
  formSubheading?: string
  image?: HomeImage
} | null

export type LandingWhyData = {
  eyebrow?: string
  heading?: string
  subheading?: string
  reasons?: {_key?: string; title: string; description?: string}[]
} | null

export type LandingServicesData = {
  heading?: string
  subheading?: string
  services?: {
    _key?: string
    title: string
    description?: string
    badge?: string
    ctaLabel?: string
    image?: HomeImage
  }[]
} | null

export type LandingHowItWorksData = {
  heading?: string
  subheading?: string
  steps?: {
    _key?: string
    step: string
    title: string
    description?: string
  }[]
  ctaLabel?: string
} | null

export type LandingConversationData = {
  heading?: string
  description?: string
  bullets?: string[]
  formHeading?: string
  formSubheading?: string
  image?: HomeImage
} | null

export type SeoLandingData = {
  _id?: string
  title?: string
  slug?: string
  seo?: SeoData
  hero?: LandingHeroData
  whySection?: LandingWhyData
  servicesSection?: LandingServicesData
  howItWorksSection?: LandingHowItWorksData
  conversationSection?: LandingConversationData
}
