import {defineArrayMember, defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

const imageWithAlt = defineField({
  name: 'image',
  type: 'image',
  options: {hotspot: true},
  fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
})

export const seoLandingType = defineType({
  name: 'seoLanding',
  title: 'SEO Landing',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
      description: 'Use "landing" for the main /landing quote page',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'highlightedTitle', title: 'Highlighted title line', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 3}),
        defineField({
          name: 'bullets',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'ctaLabel', title: 'CTA button label', type: 'string'}),
        defineField({name: 'formHeading', type: 'string'}),
        defineField({name: 'formSubheading', type: 'text', rows: 2}),
        imageWithAlt,
      ],
    }),
    defineField({
      name: 'whySection',
      title: 'Why section',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'subheading', type: 'text', rows: 2}),
        defineField({
          name: 'reasons',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text', rows: 2}),
              ],
              preview: {select: {title: 'title', subtitle: 'description'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services section',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'subheading', type: 'text', rows: 2}),
        defineField({
          name: 'services',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text', rows: 2}),
                defineField({name: 'badge', type: 'string'}),
                imageWithAlt,
                defineField({name: 'ctaLabel', type: 'string'}),
              ],
              preview: {select: {title: 'title', subtitle: 'badge', media: 'image'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'howItWorksSection',
      title: 'How it works section',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'subheading', type: 'text', rows: 2}),
        defineField({
          name: 'steps',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'step',
                  title: 'Step number',
                  type: 'string',
                  description: 'e.g. 01',
                }),
                defineField({name: 'title', type: 'string'}),
                defineField({name: 'description', type: 'text', rows: 2}),
              ],
              preview: {select: {title: 'title', subtitle: 'step'}},
            }),
          ],
        }),
        defineField({name: 'ctaLabel', title: 'CTA button label', type: 'string'}),
      ],
    }),
    defineField({
      name: 'conversationSection',
      title: 'Conversation / form section',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 3}),
        defineField({
          name: 'bullets',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'formHeading', type: 'string'}),
        defineField({name: 'formSubheading', type: 'text', rows: 2}),
        imageWithAlt,
      ],
    }),
  ],
  preview: {
    select: {title: 'title', slug: 'slug.current'},
    prepare({title, slug}) {
      return {
        title: title || 'SEO Landing',
        subtitle: slug ? `/${slug}` : 'Set title + Generate slug',
        media: EarthGlobeIcon,
      }
    },
  },
})
