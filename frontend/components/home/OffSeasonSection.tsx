import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {OffSeasonSectionBlock} from "./home-types"

export function OffSeasonSection({
  eyebrow,
  heading,
  highlightedHeading,
  description,
  seasons,
  features,
  cta,
}: OffSeasonSectionBlock) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {eyebrow ? (
              <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="section-heading mb-4">
              {heading}
              {highlightedHeading ? (
                <>
                  <br />
                  <span className="text-yellow-500">{highlightedHeading}</span>
                </>
              ) : null}
            </h2>
            {description ? (
              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            ) : null}
            {seasons?.length ? (
              <ul className="space-y-3 mb-8">
                {seasons.map((s) => (
                  <li key={s._key || s.season} className="flex items-start gap-3">
                    <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded mt-0.5 w-14 text-center shrink-0">
                      {s.season}
                    </span>
                    <span className="text-gray-600 text-sm">{s.use}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {cta?.href ? <CmsButtonLink button={cta} /> : null}
          </div>
          {features?.length ? (
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f._key || f.title}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
