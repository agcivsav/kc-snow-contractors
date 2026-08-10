import type {HomeLink} from "@/components/home/home-types"
import type {HomeImage} from "@/components/home/home-types"

export type SiteHeaderSettings = {
  navLinks?: (HomeLink & {_key?: string})[]
  cta?: HomeLink | null
}

export type SiteFooterColumn = {
  _key?: string
  title: string
  links?: (HomeLink & {_key?: string})[]
}

export type SiteFooterSettings = {
  brandDescription?: string
  columns?: SiteFooterColumn[]
  bottomLinks?: (HomeLink & {_key?: string})[]
  serviceAreaNote?: string
  copyrightName?: string
}

export type ExitIntentSettings = {
  enabled?: boolean
  heading?: string
  description?: string
  cta?: HomeLink | null
  dismissLabel?: string
}

export type SiteSettingsData = {
  _id?: string
  brandName?: string
  logo?: HomeImage
  header?: SiteHeaderSettings | null
  footer?: SiteFooterSettings | null
  exitIntent?: ExitIntentSettings | null
}

export const defaultSiteSettings: SiteSettingsData = {
  brandName: "RPM Equipment Leasing",
  header: {
    navLinks: [
      {href: "/inventory", label: "Inventory"},
      {href: "/inventory/compact-wheel-loader", label: "Wheel Loader"},
      {href: "/inventory/skid-steer", label: "Skid Steer"},
      {href: "/how-it-works", label: "How It Works"},
      {href: "/contractor-program", label: "Contractor Program"},
      {href: "/contact", label: "Contact"},
    ],
    cta: {href: "/quote", label: "Get a Quote"},
  },
  footer: {
    brandDescription:
      "Premium heavy equipment leasing — built for contractors, available year-round.",
    columns: [
      {
        title: "Equipment",
        links: [
          {href: "/inventory", label: "View Inventory"},
          {href: "/inventory/compact-wheel-loader", label: "CASE 321F Wheel Loader"},
          {href: "/inventory/521G", label: "CASE 521G Wheel Loader"},
          {href: "/inventory/skid-steer", label: "CASE SV280B Skid Steer"},
          {href: "/quote", label: "Request a Quote"},
        ],
      },
      {
        title: "Rental Programs",
        links: [
          {
            href: "/off-season-equipment-rental-kansas-city",
            label: "Off-Season Rentals",
          },
          {href: "/spring-equipment-rental", label: "Spring Rentals"},
          {href: "/summer-equipment-rental", label: "Summer Rentals"},
          {href: "/fall-equipment-rental", label: "Fall Rentals"},
          {href: "/contractor-program", label: "Contractor Program"},
        ],
      },
      {
        title: "Contact",
        links: [
          {href: "/contact", label: "Get in Touch"},
          {href: "/how-it-works", label: "How It Works"},
        ],
      },
    ],
    bottomLinks: [
      {href: "/rent-wheel-loader-kansas-city", label: "Wheel Loader Rental KC"},
      {href: "/rent-skid-steer-kansas-city", label: "Skid Steer Rental KC"},
    ],
    serviceAreaNote: "Serving our local service area",
    copyrightName: "RPM Equipment Leasing",
  },
  exitIntent: {
    enabled: false,
    heading: "Before you go — get a free quote",
    description:
      "Tell us what you need and we'll respond the same day with availability and pricing.",
    cta: {href: "/quote", label: "Get a Quote"},
    dismissLabel: "No thanks",
  },
}
