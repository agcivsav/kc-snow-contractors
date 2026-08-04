import type {CmsButton, HeroBlock, SeoData} from "@/components/home/home-types"

export type ContactFormCopy = {
  heading?: string
  submitLabel?: string
  submittingLabel?: string
  successTitle?: string
  successMessage?: string
} | null

export type ContactInfoCard = {
  heading?: string
  locationLabel?: string
  locationValue?: string
  areaLabel?: string
  areaValue?: string
} | null

export type ContactQuoteCta = {
  heading?: string
  description?: string
  button?: CmsButton | null
} | null

export type ContactPageData = {
  seo?: SeoData
  hero?: HeroBlock | null
  contactForm?: ContactFormCopy
  contactInfoCard?: ContactInfoCard
  contactQuoteCta?: ContactQuoteCta
}

export type QuoteSuccessCopy = {
  title?: string
  description?: string
  homeLinkLabel?: string
} | null

export type QuoteSidebarCard = {
  heading?: string
  description?: string
} | null

export type QuoteWhatYouGet = {
  heading?: string
  bullets?: string[]
} | null

export type QuoteMultiUnit = {
  heading?: string
  description?: string
  link?: CmsButton | null
} | null

export type QuotePageData = {
  seo?: SeoData
  hero?: HeroBlock | null
  quoteSuccess?: QuoteSuccessCopy
  quoteSidebarFast?: QuoteSidebarCard
  quoteSidebarWhatYouGet?: QuoteWhatYouGet
  quoteSidebarMultiUnit?: QuoteMultiUnit
}
