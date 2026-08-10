import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {BulletCardsSectionBlock} from "./home-types"

export function BulletCardsSection({
  heading,
  description,
  cards,
  ctaBox,
}: BulletCardsSectionBlock) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="section-heading">{heading}</h2>
          {description ? (
            <p className="section-subheading mx-auto mt-3">{description}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card) => (
            <article
              key={card._key || card.title}
              className="bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              {card.title ? (
                <h3 className="font-bold text-gray-900 mb-3 text-lg border-b border-gray-200 pb-2">
                  {card.title}
                </h3>
              ) : null}
              {card.bullets?.length ? (
                <ul className="space-y-1">
                  {card.bullets.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        {ctaBox?.heading ? (
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
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
