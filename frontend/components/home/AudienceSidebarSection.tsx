import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {AudienceSidebarSectionBlock} from "./home-types"

export function AudienceSidebarSection({
  heading,
  items,
  sidebar,
}: AudienceSidebarSectionBlock) {
  const steps = sidebar?.steps?.filter(Boolean) ?? []

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              {heading}
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item._key || item.title}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {sidebar?.heading ? (
            <aside className="lg:col-span-2 bg-gray-900 text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-extrabold text-yellow-400 mb-6">
                {sidebar.heading}
              </h3>
              {steps.length ? (
                <ol className="space-y-4 mb-8">
                  {steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm text-gray-200">
                      <span
                        className="font-extrabold text-yellow-400 shrink-0 w-5"
                        aria-hidden
                      >
                        {index + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
              {sidebar.cta?.href ? (
                <CmsButtonLink
                  button={sidebar.cta}
                  className="w-full text-center text-xs min-h-[44px] leading-[44px]"
                />
              ) : null}
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  )
}
