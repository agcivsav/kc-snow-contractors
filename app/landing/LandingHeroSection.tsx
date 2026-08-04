import Image from "next/image"
import {resolveSanityImageUrl} from "@/lib/sanity/image"
import type {LandingHeroData} from "./landing-types"
import {LandingForm} from "./LandingForm"
import {LandingFormCtaLink} from "./LandingFormCtaLink"

type LandingHeroSectionProps = {
  data: NonNullable<LandingHeroData>
}

export function LandingHeroSection({data}: LandingHeroSectionProps) {
  const src =
    resolveSanityImageUrl(data.image, 1920) ||
    data.image?.asset?.url ||
    "/images/Off-Season.jpg"
  const alt =
    data.image?.alt ||
    "View from inside a CASE skid steer cab overlooking a job site"

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {data.eyebrow ? (
              <div className="inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6">
                {data.eyebrow}
              </div>
            ) : null}
            {data.title ? (
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                {data.title}
                {data.highlightedTitle ? (
                  <>
                    <br />
                    <span className="text-yellow-400">{data.highlightedTitle}</span>
                  </>
                ) : null}
              </h1>
            ) : null}
            {data.description ? (
              <p className="text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
                {data.description}
              </p>
            ) : null}
            {data.bullets?.length ? (
              <ul className="space-y-2 text-sm text-gray-300">
                {data.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {data.ctaLabel ? (
              <div className="text-left mt-10">
                <LandingFormCtaLink className="btn-primary text-sm">
                  {data.ctaLabel}
                </LandingFormCtaLink>
              </div>
            ) : null}
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 text-gray-900">
            <h2 className="text-xl font-extrabold text-gray-900 mb-1">
              {data.formHeading || "Request Your Free Quote"}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {data.formSubheading ||
                "Takes about 2 minutes. We respond same day."}
            </p>
            <LandingForm idPrefix="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
