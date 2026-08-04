import {resolveSanityImageUrl} from "@/lib/sanity/image"
import type {LandingServicesData} from "./landing-types"
import {LandingFormCtaLink} from "./LandingFormCtaLink"

type LandingServicesSectionProps = {
  data: NonNullable<LandingServicesData>
}

export function LandingServicesSection({data}: LandingServicesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {data.heading ? (
            <h2 className="section-heading">{data.heading}</h2>
          ) : null}
          {data.subheading ? (
            <p className="section-subheading mx-auto">{data.subheading}</p>
          ) : null}
        </div>
        {data.services?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((service) => {
              const src =
                resolveSanityImageUrl(service.image, 800) ||
                service.image?.asset?.url ||
                ""
              return (
                <div key={service._key || service.title} className="card group">
                  <div className="relative h-56 overflow-hidden">
                    {src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={src}
                        alt={service.image?.alt || service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    {service.badge ? (
                      <div className="absolute bottom-4 left-4">
                        <div className="text-yellow-400 text-sm">
                          {service.badge}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    {service.description ? (
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                        {service.description}
                      </p>
                    ) : null}
                    <LandingFormCtaLink className="btn-primary w-full text-center text-xs py-2.5">
                      {service.ctaLabel || "Get a Quote"}
                    </LandingFormCtaLink>
                  </div>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}
