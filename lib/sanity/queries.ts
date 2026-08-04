import {defineQuery} from "next-sanity"

const linkFields = /* groq */ `
  label,
  href
`

const buttonFields = /* groq */ `
  _key,
  variant,
  title,
  label,
  href
`

const imageFields = /* groq */ `
  asset->{_id, url},
  hotspot,
  crop,
  alt
`

const heroFields = /* groq */ `
  eyebrow,
  eyebrowStyle,
  title,
  highlightedTitle,
  description,
  buttons[]{${buttonFields}},
  primaryCta{${buttonFields}},
  secondaryCta{${buttonFields}},
  image{${imageFields}}
`

const pageBuilderFields = /* groq */ `
  pageBuilder[]{
    _key,
    _type,
    _type == "statsBanner" => {
      stats[]{_key, value, label}
    },
    _type == "machinesSection" => {
      heading,
      subheading,
      machines[]{
        _key,
        model,
        category,
        title,
        description,
        image{${imageFields}},
        stats[]{_key, value, label},
        cta{${buttonFields}}
      }
    },
    _type == "offSeasonSection" => {
      eyebrow,
      heading,
      highlightedHeading,
      description,
      seasons[]{_key, season, use},
      features[]{_key, title, description},
      cta{${buttonFields}}
    },
    _type == "whoWeServeSection" => {
      heading,
      subheading,
      audiences[]{
        _key,
        title,
        description,
        bullets,
        cta{${buttonFields}},
        variant
      }
    },
    _type == "audienceSidebarSection" => {
      heading,
      items[]{_key, title, description},
      sidebar{
        heading,
        steps,
        cta{${buttonFields}}
      }
    },
    _type == "howItWorksSection" => {
      heading,
      subheading,
      layout,
      steps[]{_key, step, title, description},
      footerLink{${linkFields}},
      ctaBox{heading, description, cta{${buttonFields}}}
    },
    _type == "bulletCardsSection" => {
      heading,
      description,
      cards[]{_key, title, bullets},
      ctaBox{heading, description, cta{${buttonFields}}}
    },
    _type == "featureGrid" => {
      heading,
      subheading,
      features[]{_key, title, description}
    },
    _type == "textSection" => {
      heading,
      body,
      stats[]{_key, value, label},
      bullets,
      cta{${buttonFields}},
      ctaBox{
        heading,
        description,
        buttons[]{${buttonFields}},
        cta{${buttonFields}}
      }
    },
    _type == "ctaBanner" => {
      heading,
      description,
      variant,
      buttons[]{${buttonFields}},
      primaryCta{${buttonFields}},
      secondaryCta{${buttonFields}},
      backgroundImage{${imageFields}}
    }
  }
`

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage"][0]{
    _id,
    title,
    seo{title, description},
    hero{${heroFields}},
    ${pageBuilderFields}
  }
`)

export const PAGE_BY_SLUG_QUERY = defineQuery(`
  *[
    (_type == "page" || _type == "rentalProgram") &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    "slug": slug.current,
    seo{title, description},
    hero{${heroFields}},
    ${pageBuilderFields}
  }
`)

/** Slugs for rental programs + SEO landings (dynamic [slug] route). */
export const CMS_MARKETING_SLUGS_QUERY = defineQuery(`
  *[
    (_type == "rentalProgram" || _type == "seoLanding") &&
    defined(slug.current)
  ].slug.current
`)

export const SEO_LANDING_BY_SLUG_QUERY = defineQuery(`
  *[_type == "seoLanding" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    seo{title, description},
    hero{
      eyebrow,
      title,
      highlightedTitle,
      description,
      bullets,
      ctaLabel,
      formHeading,
      formSubheading,
      image{${imageFields}}
    },
    whySection{
      eyebrow,
      heading,
      subheading,
      reasons[]{_key, title, description}
    },
    servicesSection{
      heading,
      subheading,
      services[]{
        _key,
        title,
        description,
        badge,
        ctaLabel,
        image{${imageFields}}
      }
    },
    howItWorksSection{
      heading,
      subheading,
      steps[]{_key, step, title, description},
      ctaLabel
    },
    conversationSection{
      heading,
      description,
      bullets,
      formHeading,
      formSubheading,
      image{${imageFields}}
    }
  }
`)

export const PAGE_BY_ID_QUERY = defineQuery(`
  *[_id == $id][0]{
    _id,
    title,
    "slug": slug.current,
    seo{title, description},
    hero{${heroFields}},
    ${pageBuilderFields}
  }
`)

export const CONTACT_PAGE_QUERY = defineQuery(`
  *[_id == "page-contact"][0]{
    _id,
    title,
    "slug": slug.current,
    seo{title, description},
    hero{${heroFields}},
    contactForm{
      heading,
      submitLabel,
      submittingLabel,
      successTitle,
      successMessage
    },
    contactInfoCard{
      heading,
      locationLabel,
      locationValue,
      areaLabel,
      areaValue
    },
    contactQuoteCta{
      heading,
      description,
      button{${buttonFields}}
    }
  }
`)

export const QUOTE_PAGE_QUERY = defineQuery(`
  *[_id == "page-quote"][0]{
    _id,
    title,
    "slug": slug.current,
    seo{title, description},
    hero{${heroFields}},
    quoteSuccess{
      title,
      description,
      homeLinkLabel
    },
    quoteSidebarFast{
      heading,
      description
    },
    quoteSidebarWhatYouGet{
      heading,
      bullets
    },
    quoteSidebarMultiUnit{
      heading,
      description,
      link{${buttonFields}}
    }
  }
`)

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    _id,
    brandName,
    logo{${imageFields}},
    header{
      navLinks[]{_key, ${linkFields}},
      cta{${linkFields}}
    },
    footer{
      brandDescription,
      columns[]{
        _key,
        title,
        links[]{_key, ${linkFields}}
      },
      bottomLinks[]{_key, ${linkFields}},
      serviceAreaNote,
      copyrightName
    },
    exitIntent{
      enabled,
      heading,
      description,
      cta{${linkFields}},
      dismissLabel
    }
  }
`)

const equipmentFields = /* groq */ `
  _id,
  model,
  "slug": slug.current,
  make,
  modelNumber,
  year,
  category,
  title,
  description,
  tagline,
  image{${imageFields}},
  gallery[]{${imageFields}},
  cardStats[]{_key, value, label},
  stats[]{_key, value, label},
  specs[]{_key, label, value},
  applications[]{_key, title, desc},
  seo{title, description},
  ctaHeading,
  ctaDescription
`

export const EQUIPMENT_LIST_QUERY = defineQuery(`
  *[_type == "equipment" && defined(slug.current)] | order(model asc) {
    ${equipmentFields}
  }
`)

export const EQUIPMENT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "equipment" && slug.current == $slug][0]{
    ${equipmentFields}
  }
`)

export const EQUIPMENT_SLUGS_QUERY = defineQuery(`
  *[_type == "equipment" && defined(slug.current)].slug.current
`)
