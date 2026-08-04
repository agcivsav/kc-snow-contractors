import {resolveSanityImageUrl} from "@/lib/sanity/image"
import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {MachineCardData, MachinesSectionBlock} from "./home-types"

function MachineCard({machine}: {machine: MachineCardData}) {
  const src =
    resolveSanityImageUrl(machine.image, 800) ||
    machine.imageUrl ||
    machine.image?.asset?.url ||
    ""
  const alt = machine.image?.alt || machine.title

  return (
    <div className="card group">
      <div className="relative h-56 overflow-hidden">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="text-white font-bold text-lg">{machine.model}</div>
          <div className="text-yellow-400 text-sm">{machine.category}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">{machine.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{machine.description}</p>
        {machine.stats?.length ? (
          <div className="grid grid-cols-3 gap-3 mb-5">
            {machine.stats.map((s) => (
              <div
                key={s._key || s.label}
                className="text-center bg-gray-50 rounded-lg p-2"
              >
                <div className="font-extrabold text-gray-900 text-sm">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        ) : null}
        {machine.cta?.href ? (
          <CmsButtonLink
            button={machine.cta}
            className="w-full text-center text-xs py-2.5"
          />
        ) : null}
      </div>
    </div>
  )
}

export function MachinesSection({
  heading,
  subheading,
  machines,
}: MachinesSectionBlock) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-heading">{heading}</h2>
          {subheading ? (
            <p className="section-subheading mx-auto">{subheading}</p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machines.map((machine) => (
            <MachineCard
              key={machine._key || machine.title}
              machine={machine}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
