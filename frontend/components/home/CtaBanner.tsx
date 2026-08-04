import {stegaClean} from "next-sanity"
import {resolveSanityImageUrl} from "@/lib/sanity/image"
import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {CmsButton, CtaBannerBlock} from "./home-types"

function resolveBannerButtons(block: CtaBannerBlock): CmsButton[] {
  if (block.buttons?.length) return block.buttons
  const legacy: CmsButton[] = []
  if (block.primaryCta?.href) {
    legacy.push({
      ...block.primaryCta,
      variant: block.primaryCta.variant || "primary",
    })
  }
  if (block.secondaryCta?.href) {
    legacy.push({
      ...block.secondaryCta,
      variant: block.secondaryCta.variant || "secondary",
    })
  }
  return legacy
}

export function CtaBanner(props: CtaBannerBlock) {
  const {heading, description, backgroundImage, backgroundImageUrl} = props
  const variant = stegaClean(props.variant) || "dark"
  const isAccent = variant === "accent"
  const bg =
    resolveSanityImageUrl(backgroundImage, 1920) ||
    backgroundImageUrl ||
    backgroundImage?.asset?.url ||
    ""
  const buttons = resolveBannerButtons(props)

  if (isAccent) {
    return (
      <section className="bg-yellow-400 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            {heading}
          </h2>
          {description ? (
            <p className="text-gray-800 mb-6 text-base md:text-lg">
              {description}
            </p>
          ) : null}
          {buttons.length ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((btn, i) => (
                <CmsButtonLink
                  key={btn._key || `${btn.href}-${i}`}
                  button={btn}
                  className="!bg-gray-900 !text-white hover:!bg-black border-0"
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {bg ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${bg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
      ) : null}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {heading}
        </h2>
        {description ? (
          <p className="text-gray-400 mb-8 text-lg">{description}</p>
        ) : null}
        {buttons.length ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((btn, i) => (
              <CmsButtonLink key={btn._key || `${btn.href}-${i}`} button={btn} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
