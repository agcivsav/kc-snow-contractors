import type {StatsBannerBlock} from "./home-types"

export function StatsBanner({stats}: StatsBannerBlock) {
  if (!stats?.length) return null

  return (
    <section className="bg-yellow-500 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s._key || s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-black">
                {s.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-black/70 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
