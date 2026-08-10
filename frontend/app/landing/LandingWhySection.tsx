import type {LandingWhyData} from "./landing-types"

type LandingWhySectionProps = {
  data: NonNullable<LandingWhyData>
}

export function LandingWhySection({data}: LandingWhySectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {data.eyebrow ? (
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              {data.eyebrow}
            </div>
          ) : null}
          {data.heading ? (
            <h2 className="section-heading">{data.heading}</h2>
          ) : null}
          {data.subheading ? (
            <p className="section-subheading mx-auto">{data.subheading}</p>
          ) : null}
        </div>
        {data.reasons?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.reasons.map((reason) => (
              <div
                key={reason._key || reason.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-black font-extrabold text-sm">✓</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                {reason.description ? (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
