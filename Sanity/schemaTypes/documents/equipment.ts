import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const equipmentType = defineType({
  name: 'equipment',
  title: 'Equipment',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'model',
      title: 'Display model',
      type: 'string',
      description: 'e.g. CASE 321F',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'model', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'make', type: 'string', initialValue: 'CASE'}),
    defineField({name: 'modelNumber', title: 'Model number', type: 'string'}),
    defineField({name: 'year', type: 'string'}),
    defineField({
      name: 'category',
      type: 'string',
      description: 'e.g. Compact Wheel Loader',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Full title',
      type: 'string',
      description: 'e.g. CASE 321F Compact Wheel Loader',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', type: 'text', rows: 4}),
    defineField({name: 'tagline', type: 'string'}),
    defineField({
      name: 'image',
      title: 'Primary image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', type: 'string', title: 'Alt text'})],
        }),
      ],
    }),
    defineField({
      name: 'cardStats',
      title: 'Card stats (inventory grid)',
      type: 'array',
      of: [defineArrayMember({type: 'statItem'})],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'stats',
      title: 'Highlight stats',
      type: 'array',
      of: [defineArrayMember({type: 'statItem'})],
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string'}),
            defineField({name: 'value', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        }),
      ],
    }),
    defineField({
      name: 'applications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string'}),
            defineField({name: 'desc', type: 'text', rows: 2}),
          ],
          preview: {select: {title: 'title', subtitle: 'desc'}},
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {collapsible: true, collapsed: true},
    }),
    defineField({name: 'ctaHeading', title: 'CTA heading', type: 'string'}),
    defineField({name: 'ctaDescription', title: 'CTA description', type: 'text', rows: 2}),
  ],
  preview: {
    select: {title: 'model', subtitle: 'category', media: 'image'},
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Equipment',
        subtitle: subtitle || 'Inventory detail',
        media: media ?? CaseIcon,
      }
    },
  },
})
