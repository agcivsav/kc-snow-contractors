import Link from "next/link"
import {stegaClean} from "next-sanity"
import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {HowItWorksSectionBlock} from "./home-types"

export function HowItWorksSection({
  heading,
  subheading,
  layout,
  steps,
  footerLink,
  ctaBox,
}: HowItWorksSectionBlock) {
  const isList = stegaClean(layout) === "list"

  return (
    <section className={isList ? "py-20 bg-white" : "py-20 bg-gray-50"}>
      <div
        className={
          isList
            ? "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
            : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        }
      >
        <div className={isList ? "mb-12" : "text-center mb-14"}>
          <h2 className="section-heading">{heading}</h2>
          {subheading ? (
            <p className={isList ? "text-gray-600 mt-2" : "section-subheading mx-auto"}>
              {subheading}
            </p>
          ) : null}
        </div>

        {isList ? (
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s._key || s.step} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-extrabold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s._key || s.step} className="text-center">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-extrabold text-sm">{s.step}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        )}

        {footerLink?.href ? (
          <div className="text-center mt-10">
            <Link
              href={stegaClean(footerLink.href)}
              className="text-yellow-600 font-semibold text-sm hover:underline"
            >
              {footerLink.label}
            </Link>
          </div>
        ) : null}

        {ctaBox?.heading ? (
          <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">{ctaBox.heading}</h3>
            {ctaBox.description ? (
              <p className="text-gray-400 mb-6">{ctaBox.description}</p>
            ) : null}
            {ctaBox.cta?.href ? <CmsButtonLink button={ctaBox.cta} /> : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
