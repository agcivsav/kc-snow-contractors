import type {FeatureGridBlock} from "./home-types"

export function FeatureGrid({heading, subheading, features}: FeatureGridBlock) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">{heading}</h2>
          {subheading ? (
            <p className="section-subheading mx-auto">{subheading}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f._key || f.title}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 border-l-4 border-l-yellow-400"
            >
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
