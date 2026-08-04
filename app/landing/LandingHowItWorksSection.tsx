import type {LandingHowItWorksData} from "./landing-types"
import {LandingFormCtaLink} from "./LandingFormCtaLink"

type LandingHowItWorksSectionProps = {
  data: NonNullable<LandingHowItWorksData>
}

export function LandingHowItWorksSection({
  data,
}: LandingHowItWorksSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {data.heading ? (
            <h2 className="section-heading">{data.heading}</h2>
          ) : null}
          {data.subheading ? (
            <p className="section-subheading mx-auto">{data.subheading}</p>
          ) : null}
        </div>
        {data.steps?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.steps.map((item) => (
              <div key={item._key || item.step} className="text-center">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-extrabold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                {item.description ? (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
        {data.ctaLabel ? (
          <div className="text-center mt-10">
            <LandingFormCtaLink className="btn-primary text-sm">
              {data.ctaLabel}
            </LandingFormCtaLink>
          </div>
        ) : null}
      </div>
    </section>
  )
}
