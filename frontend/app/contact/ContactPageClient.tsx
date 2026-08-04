"use client"

import {useState} from "react"
import Link from "next/link"
import {HomeHero} from "@/components/home/HomeHero"
import {CmsButtonLink, buttonTitle} from "@/components/ui/CmsButtonLink"
import type {HeroBlock} from "@/components/home/home-types"
import type {
  ContactFormCopy,
  ContactInfoCard,
  ContactQuoteCta,
} from "@/lib/sanity/form-page-types"
import {ContactForm} from "./ContactForm"

type ContactPageClientProps = {
  hero: HeroBlock
  form: NonNullable<ContactFormCopy>
  infoCard: NonNullable<ContactInfoCard>
  quoteCta: NonNullable<ContactQuoteCta>
}

export function ContactPageClient({
  hero,
  form,
  infoCard,
  quoteCta,
}: ContactPageClientProps) {
  const [sent, setSent] = useState(false)
  const ctaHref = quoteCta.button?.href || "/quote"
  const ctaLabel =
    buttonTitle(quoteCta.button || {href: ctaHref}) || "Get a Quote"

  return (
    <>
      <HomeHero {...hero} headingLevel="h1" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                {form.heading || "Get in Touch"}
              </h2>
              {sent ? (
                <div
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-7 h-7 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {form.successTitle || "Message Sent"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {form.successMessage || "We'll get back to you shortly."}
                  </p>
                </div>
              ) : (
                <ContactForm copy={form} onSuccess={() => setSent(true)} />
              )}
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  {infoCard.heading || "RPM Equipment Leasing"}
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-yellow-500 text-xs uppercase">
                      {infoCard.locationLabel || "Location"}
                    </span>
                    <span>
                      {infoCard.locationValue || "RPM Equipment Leasing"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-yellow-500 text-xs uppercase">
                      {infoCard.areaLabel || "Area"}
                    </span>
                    <span>
                      {infoCard.areaValue || "Serving our local service area"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold mb-2 text-yellow-400">
                  {quoteCta.heading || "Need a Machine Fast?"}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {quoteCta.description ||
                    "Skip the message — go straight to a quote request and we'll respond same day."}
                </p>
                {quoteCta.button?.href ? (
                  <CmsButtonLink
                    button={quoteCta.button}
                    className="text-xs block text-center min-h-[44px] leading-[44px]"
                  />
                ) : (
                  <Link
                    href={ctaHref}
                    className="btn-primary text-xs block text-center min-h-[44px] leading-[44px]"
                  >
                    {ctaLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
