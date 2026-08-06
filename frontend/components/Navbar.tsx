"use client"

import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import {stegaClean} from "next-sanity"
import {resolveSanityImageUrl} from "@/lib/sanity/image"
import {
  defaultSiteSettings,
  type SiteSettingsData,
} from "./site/site-settings-defaults"

type NavbarProps = {
  settings?: SiteSettingsData | null
}


function cleanHref(href?: string) {
  return href ? stegaClean(href) : ""
}

export default function Navbar({settings}: NavbarProps) {
  const [open, setOpen] = useState(false)
  const header = settings?.header ?? defaultSiteSettings.header
  const brandName = settings?.brandName || defaultSiteSettings.brandName || "RPM Equipment Leasing"
  const links = header?.navLinks?.length
    ? header.navLinks
    : defaultSiteSettings.header?.navLinks || []
  const cta = header?.cta ?? defaultSiteSettings.header?.cta
  const logoSrc =
    resolveSanityImageUrl(settings?.logo, 720) ||
    settings?.logo?.asset?.url ||
    "/logo.svg"
  const logoAlt = settings?.logo?.alt || brandName

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={360}
              height={120}
              priority
              className="h-14 w-auto py-2 px-1"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((l) => (
              <Link
                key={l._key || l.href}
                href={cleanHref(l.href)}
                className="text-sm text-gray-300 hover:text-yellow-400 transition-colors font-medium"
              >
                {l.label || l.title}
              </Link>
            ))}
            {cta?.href ? (
              <Link href={cleanHref(cta.href)} className="btn-primary text-xs py-2 px-4">
                {cta.label || cta.title}
              </Link>
            ) : null}
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white min-w-11 min-h-11"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open ? (
          <div className="md:hidden border-t border-gray-700 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l._key || l.href}
                href={cleanHref(l.href)}
                className="block px-2 py-2 text-sm text-gray-300 hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {cta?.href ? (
              <Link
                href={cleanHref(cta.href)}
                className="block mt-2 btn-primary text-center text-xs py-2"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </nav>
  )
}
