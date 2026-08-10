import Image from "next/image"
import {stegaClean} from "next-sanity"
import {resolveSanityImageUrl} from "@/lib/sanity/image"
import {CmsButtonLink} from "@/components/ui/CmsButtonLink"
import type {CmsButton, HeroBlock} from "./home-types"

function resolveHeroButtons(hero: HeroBlock): CmsButton[] {
  if (hero.buttons?.length) return hero.buttons
  const legacy: CmsButton[] = []
  if (hero.primaryCta?.href) {
    legacy.push({...hero.primaryCta, variant: hero.primaryCta.variant || "primary"})
  }
  if (hero.secondaryCta?.href) {
    legacy.push({
      ...hero.secondaryCta,
      variant: hero.secondaryCta.variant || "secondary",
    })
  }
  return legacy
}

function eyebrowClass(style?: string, layout?: string) {
  const mb = stegaClean(layout) === "home" ? "mb-6" : "mb-4"
  return stegaClean(style) === "green"
    ? `inline-flex items-center bg-green-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded ${mb}`
    : `inline-flex items-center bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded ${mb}`
}

type HomeHeroProps = HeroBlock & {
  headingLevel?: "h1" | "h2"
}

export function HomeHero({
  layout,
  eyebrow,
  eyebrowStyle,
  title,
  highlightedTitle,
  description,
  buttons,
  primaryCta,
  secondaryCta,
  image,
  headingLevel = "h1",
}: HomeHeroProps) {
  const Heading = headingLevel
  const variant = stegaClean(layout) || "banner"
  const src = resolveSanityImageUrl(image, 1920) || image?.asset?.url || null
  const alt = image?.alt || title
  const ctaButtons = resolveHeroButtons({
    title,
    buttons,
    primaryCta,
    secondaryCta,
  })

  const isHome = variant === "home"
  const isCentered = variant === "centered"
  const isCompact = variant === "compact"
  const showImage = (isHome || variant === "banner") && Boolean(src)

  const sectionPad = isHome
    ? "py-28 md:py-40"
    : isCentered
      ? "py-14"
      : isCompact
        ? "py-16"
        : "py-20"

  const titleClass = isHome
    ? "text-5xl md:text-6xl font-extrabold leading-tight mb-6"
    : isCentered
      ? "text-4xl font-extrabold mb-3"
      : "text-4xl md:text-5xl font-extrabold mb-4"

  const descClass = isHome
    ? "text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
    : isCentered
      ? "text-gray-400 text-lg"
      : "text-gray-300 text-lg mb-8 leading-relaxed"

  const innerMax = isCentered ? "max-w-4xl" : "max-w-3xl"
  const containerAlign = isCentered ? "text-center" : ""

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {showImage && src ? (
        isHome ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={headingLevel === "h1"}
            sizes="100vw"
            className="object-cover opacity-35"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.25,
            }}
          />
        )
      ) : null}

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${sectionPad}`}
      >
        <div className={`${innerMax} ${isCentered ? "mx-auto" : ""} ${containerAlign}`}>
          {eyebrow ? (
            <div className={eyebrowClass(eyebrowStyle, variant)}>{eyebrow}</div>
          ) : null}
          <Heading className={titleClass}>
            {title}
            {highlightedTitle ? (
              <>
                <br />
                <span className="text-yellow-400">{highlightedTitle}</span>
              </>
            ) : null}
          </Heading>
          {description ? <p className={descClass}>{description}</p> : null}
          {ctaButtons.length ? (
            <div
              className={`flex flex-col sm:flex-row gap-4 ${isCentered ? "justify-center" : ""}`}
            >
              {ctaButtons.map((btn, i) => (
                <CmsButtonLink
                  key={btn._key || `${btn.href}-${i}`}
                  button={btn}
                  className={isHome || variant === "banner" ? "text-sm" : undefined}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
