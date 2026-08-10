export type HomeLink = {
  label?: string
  title?: string
  href: string
  variant?: "primary" | "secondary" | string
}

/** CTA button from Sanity (Primary / Secondary + Title) */
export type CmsButton = HomeLink & {
  _key?: string
  title?: string
  variant?: "primary" | "secondary" | string
}

export type HomeStat = {
  _key?: string
  value: string
  label: string
}

export type HomeImage = {
  alt?: string
  asset?: {_id?: string; url?: string} | null
  hotspot?: unknown
  crop?: unknown
} | null

export type SeoData = {
  title?: string
  description?: string
} | null

export type HeroBlock = {
  layout?: "home" | "banner" | "centered" | "compact" | string
  eyebrow?: string
  eyebrowStyle?: "yellow" | "green" | string
  title: string
  highlightedTitle?: string
  description?: string
  buttons?: CmsButton[] | null
  /** @deprecated use buttons[] */
  primaryCta?: CmsButton | null
  /** @deprecated use buttons[] */
  secondaryCta?: CmsButton | null
  image?: HomeImage
}

export type CtaBox = {
  heading?: string
  description?: string
  buttons?: CmsButton[] | null
  cta?: CmsButton | null
} | null

export type StatsBannerBlock = {
  _key: string
  _type: "statsBanner"
  stats: HomeStat[]
}

export type MachineCardData = {
  _key?: string
  model: string
  category: string
  title: string
  description: string
  image?: HomeImage
  imageUrl?: string
  stats?: HomeStat[]
  cta: CmsButton
}

export type MachinesSectionBlock = {
  _key: string
  _type: "machinesSection"
  heading: string
  subheading?: string
  machines: MachineCardData[]
}

export type OffSeasonSectionBlock = {
  _key: string
  _type: "offSeasonSection"
  eyebrow?: string
  heading: string
  highlightedHeading?: string
  description?: string
  seasons?: {_key?: string; season: string; use: string}[]
  features?: {_key?: string; title: string; description: string}[]
  cta?: CmsButton | null
}

export type WhoWeServeSectionBlock = {
  _key: string
  _type: "whoWeServeSection"
  heading: string
  subheading?: string
  audiences: {
    _key?: string
    title: string
    description: string
    bullets?: string[]
    cta?: CmsButton | null
    variant?: "light" | "dark" | string
  }[]
}

export type AudienceSidebarSectionBlock = {
  _key: string
  _type: "audienceSidebarSection"
  heading: string
  items: {_key?: string; title: string; description: string}[]
  sidebar: {
    heading: string
    steps?: string[]
    cta?: CmsButton | null
  }
}

export type HowItWorksSectionBlock = {
  _key: string
  _type: "howItWorksSection"
  heading: string
  subheading?: string
  layout?: "grid" | "list" | string
  steps: {_key?: string; step: string; title: string; description: string}[]
  footerLink?: HomeLink | null
  ctaBox?: CtaBox
}

export type BulletCardsSectionBlock = {
  _key: string
  _type: "bulletCardsSection"
  heading: string
  description?: string
  cards: {_key?: string; title: string; bullets?: string[]}[]
  ctaBox?: CtaBox
}

export type FeatureGridBlock = {
  _key: string
  _type: "featureGrid"
  heading: string
  subheading?: string
  features: {_key?: string; title: string; description: string}[]
}

export type TextSectionBlock = {
  _key: string
  _type: "textSection"
  heading: string
  /** Portable Text, or legacy plain string */
  body?: import("next-sanity").PortableTextBlock[] | string | null
  stats?: HomeStat[]
  bullets?: string[]
  cta?: CmsButton | null
  ctaBox?: CtaBox
}

export type CtaBannerBlock = {
  _key: string
  _type: "ctaBanner"
  heading: string
  description?: string
  variant?: "dark" | "accent" | string
  buttons?: CmsButton[] | null
  /** @deprecated use buttons[] */
  primaryCta?: CmsButton | null
  /** @deprecated use buttons[] */
  secondaryCta?: CmsButton | null
  backgroundImage?: HomeImage
  backgroundImageUrl?: string
}

export type PageBuilderBlock =
  | StatsBannerBlock
  | MachinesSectionBlock
  | OffSeasonSectionBlock
  | WhoWeServeSectionBlock
  | AudienceSidebarSectionBlock
  | HowItWorksSectionBlock
  | BulletCardsSectionBlock
  | FeatureGridBlock
  | TextSectionBlock
  | CtaBannerBlock

export type HomePageData = {
  _id?: string
  title?: string
  seo?: SeoData
  hero?: HeroBlock | null
  pageBuilder?: PageBuilderBlock[] | null
}

export type CmsPageData = HomePageData & {
  slug?: string
}
