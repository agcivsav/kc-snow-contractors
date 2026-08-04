import {stegaClean} from "next-sanity"
import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {WhoWeServeSectionBlock} from "./home-types"

export function WhoWeServeSection({
  heading,
  subheading,
  audiences,
}: WhoWeServeSectionBlock) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">{heading}</h2>
          {subheading ? (
            <p className="section-subheading mx-auto">{subheading}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience) => {
            const variant = stegaClean(audience.variant) || "light"
            const isDark = variant === "dark"

            return (
              <div
                key={audience._key || audience.title}
                className={
                  isDark
                    ? "border-2 border-gray-800 rounded-xl p-8 bg-gray-900 text-white"
                    : "border-2 border-yellow-400 rounded-xl p-8"
                }
              >
                <h3
                  className={
                    isDark
                      ? "text-2xl font-extrabold mb-3"
                      : "text-2xl font-extrabold text-gray-900 mb-3"
                  }
                >
                  {audience.title}
                </h3>
                <p
                  className={
                    isDark
                      ? "text-gray-300 mb-5 leading-relaxed"
                      : "text-gray-600 mb-5 leading-relaxed"
                  }
                >
                  {audience.description}
                </p>
                {audience.bullets?.length ? (
                  <ul
                    className={
                      isDark
                        ? "space-y-2 text-sm text-gray-300 mb-6"
                        : "space-y-2 text-sm text-gray-700 mb-6"
                    }
                  >
                    {audience.bullets.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          className={
                            isDark
                              ? "w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"
                              : "w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0"
                          }
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {audience.cta?.href ? (
                  <CmsButtonLink
                    button={{
                      ...audience.cta,
                      variant:
                        audience.cta.variant ||
                        (isDark ? "secondary" : "primary"),
                    }}
                    className="text-xs"
                  />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
