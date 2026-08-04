"use client"

import {useState} from "react"
import Link from "next/link"
import {HomeHero} from "@/components/home/HomeHero"
import {CmsButtonLink, buttonTitle} from "@/components/ui/CmsButtonLink"
import type {HeroBlock} from "@/components/home/home-types"
import type {
  QuoteMultiUnit,
  QuoteSidebarCard,
  QuoteSuccessCopy,
  QuoteWhatYouGet,
} from "@/lib/sanity/form-page-types"
import {QuoteRequestForm} from "./QuoteRequestForm"

type QuotePageClientProps = {
  hero: HeroBlock
  success: NonNullable<QuoteSuccessCopy>
  sidebarFast: NonNullable<QuoteSidebarCard>
  whatYouGet: NonNullable<QuoteWhatYouGet>
  multiUnit: NonNullable<QuoteMultiUnit>
}

export function QuotePageClient({
  hero,
  success,
  sidebarFast,
  whatYouGet,
  multiUnit,
}: QuotePageClientProps) {
  const [submitted, setSubmitted] = useState(false)
  const bullets = whatYouGet.bullets?.length
    ? whatYouGet.bullets
    : [
        "Availability confirmation",
        "Daily / weekly / monthly pricing",
        "Delivery cost estimate",
        "Equipment specs & fit assessment",
      ]
  const multiHref = multiUnit.link?.href || "/contractor-program"
  const multiLabel =
    buttonTitle(multiUnit.link || {href: multiHref}) ||
    "Contractor Program →"

  return (
    <>
      <HomeHero {...hero} headingLevel="h1" />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
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
                    <h2 className="text-xl font-extrabold text-gray-900 mb-3">
                      {success.title || "Quote Request Received"}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {success.description ||
                        "We'll get back to you same day (usually within the hour during business hours). We'll confirm availability and send over pricing."}
                    </p>
                    <Link
                      href="/"
                      className="btn-primary text-sm inline-block mt-6 min-h-[44px] leading-[44px] px-6"
                    >
                      {success.homeLinkLabel || "Back to Home"}
                    </Link>
                  </div>
                </div>
              ) : (
                <QuoteRequestForm onSuccess={() => setSubmitted(true)} />
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 text-white rounded-xl p-5">
                <h3 className="font-bold mb-3 text-yellow-400">
                  {sidebarFast.heading || "Fast Response"}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {sidebarFast.description ||
                    "We reply to quote requests same day — usually within the hour on business days."}
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">
                  {whatYouGet.heading || "What You'll Get"}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0 inline-block mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">
                  {multiUnit.heading || "Need Multiple Units?"}
                </h3>
                <p className="text-sm text-gray-600">
                  {multiUnit.description ||
                    "We run a large fleet. Contractor programs and multi-unit discounts available."}
                </p>
                {multiUnit.link?.href ? (
                  <span className="inline-block mt-2">
                    <CmsButtonLink
                      button={{
                        ...multiUnit.link,
                        variant: "secondary",
                      }}
                      className="text-yellow-600 font-semibold text-xs hover:underline bg-transparent border-0 shadow-none p-0"
                    />
                  </span>
                ) : (
                  <Link
                    href={multiHref}
                    className="text-yellow-600 font-semibold text-xs mt-2 inline-block hover:underline"
                  >
                    {multiLabel}
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
