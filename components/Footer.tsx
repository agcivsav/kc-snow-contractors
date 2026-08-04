import Link from "next/link"
import Image from "next/image"
import {stegaClean} from "next-sanity"
import {resolveSanityImageUrl} from "@/lib/sanity/image"
import {
  defaultSiteSettings,
  type SiteSettingsData,
} from "./site/site-settings-defaults"

type FooterProps = {
  settings?: SiteSettingsData | null
}

function cleanHref(href?: string) {
  return href ? stegaClean(href) : ""
}

export default function Footer({settings}: FooterProps) {
  const footer = settings?.footer ?? defaultSiteSettings.footer
  const brandName =
    settings?.brandName || defaultSiteSettings.brandName || "RPM Equipment Leasing"
  const columns = footer?.columns?.length
    ? footer.columns
    : defaultSiteSettings.footer?.columns || []
  const bottomLinks = footer?.bottomLinks?.length
    ? footer.bottomLinks
    : defaultSiteSettings.footer?.bottomLinks || []
  const logoSrc =
    resolveSanityImageUrl(settings?.logo, 720) ||
    settings?.logo?.asset?.url ||
    "/logo.svg"
  const logoAlt = settings?.logo?.alt || brandName
  const year = new Date().getFullYear()
  const copyrightName = footer?.copyrightName || brandName

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={360}
                height={120}
                className="h-12 w-auto"
              />
            </Link>
            {footer?.brandDescription ? (
              <p className="text-sm text-gray-400 leading-relaxed">
                {footer.brandDescription}
              </p>
            ) : null}
          </div>

          {columns.map((col) => (
            <div key={col._key || col.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {col.links?.map((l) => (
                  <li key={l._key || l.href}>
                    <Link
                      href={cleanHref(l.href)}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {col.title.toLowerCase() === "contact" && footer?.serviceAreaNote ? (
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mt-1">{footer.serviceAreaNote}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            © {year} {copyrightName}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            {bottomLinks.map((l) => (
              <Link
                key={l._key || l.href}
                href={cleanHref(l.href)}
                className="hover:text-gray-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
