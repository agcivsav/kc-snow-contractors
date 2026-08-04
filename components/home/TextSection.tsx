import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import {RichText} from "@/components/ui/RichText"
import type {CmsButton, TextSectionBlock} from "./home-types"

function resolveCtaButtons(
  ctaBox: TextSectionBlock["ctaBox"],
): CmsButton[] {
  if (!ctaBox) return []
  if (ctaBox.buttons?.length) return ctaBox.buttons
  if (ctaBox.cta?.href) return [ctaBox.cta]
  return []
}

export function TextSection({
  heading,
  body,
  stats,
  bullets,
  cta,
  ctaBox,
}: TextSectionBlock) {
  const ctaButtons = resolveCtaButtons(ctaBox)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-6">{heading}</h2>

        {body ? <div className="mb-8"><RichText value={body} /></div> : null}

        {stats?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => (
              <div
                key={stat._key || `${stat.value}-${stat.label}`}
                className="text-center bg-gray-50 rounded-xl p-4"
              >
                <div className="font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        {bullets?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        ) : null}

        {cta?.href ? (
          <CmsButtonLink button={cta} className="mb-8 inline-flex" />
        ) : null}

        {ctaBox?.heading ? (
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-extrabold mb-3">{ctaBox.heading}</h3>
            {ctaBox.description ? (
              <p className="text-gray-400 mb-6">{ctaBox.description}</p>
            ) : null}
            {ctaButtons.length ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {ctaButtons.map((btn, i) => (
                  <CmsButtonLink
                    key={btn._key || `${btn.href}-${i}`}
                    button={btn}
                    className={
                      i > 0 || btn.variant === "secondary"
                        ? "text-sm"
                        : undefined
                    }
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
