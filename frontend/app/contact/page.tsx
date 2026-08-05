import type {Metadata} from "next"
import {ContactPageClient} from "./ContactPageClient"
import type {HeroBlock} from "@/components/home/home-types"
import {withResolvedHeroLayout} from "@/lib/sanity/hero-layout"
import {getContactPage} from "@/lib/sanity/form-pages"

export const revalidate = 60

const defaultHero: HeroBlock = {
  title: "Contact Us",
  description: "We're based in Kansas City. Reach out any time.",
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage(false)
  return {
    title: page?.seo?.title || "Contact | RPM Equipment Leasing",
    description:
      page?.seo?.description ||
      "Contact RPM Equipment Leasing in Kansas City for equipment rental questions.",
  }
}

export default async function ContactPage() {
  const page = await getContactPage()
  const hero = withResolvedHeroLayout(
    "contact",
    page?.hero?.title ? page.hero : defaultHero,
  )

  return (
    <ContactPageClient
      hero={hero}
      form={page?.contactForm || {}}
      infoCard={page?.contactInfoCard || {}}
      quoteCta={page?.contactQuoteCta || {}}
    />
  )
}
