import {defineArrayMember, defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const seasonItemType = defineType({
  name: 'seasonItem',
  title: 'Season',
  type: 'object',
  fields: [
    defineField({
      name: 'season',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'use',
      title: 'Typical use',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'season', subtitle: 'use'},
  },
})

export const featureCardType = defineType({
  name: 'featureCard',
  title: 'Feature Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})

export const offSeasonSectionType = defineType({
  name: 'offSeasonSection',
  title: 'Off-Season Section',
  type: 'object',
  icon: CalendarIcon,
  fields: [
    defineField({name: 'eyebrow', type: 'string'}),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightedHeading',
      title: 'Highlighted heading line',
      type: 'string',
    }),
    defineField({name: 'description', type: 'text', rows: 4}),
    defineField({
      name: 'seasons',
      type: 'array',
      of: [defineArrayMember({type: 'seasonItem'})],
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [defineArrayMember({type: 'featureCard'})],
    }),
    defineField({name: 'cta', type: 'button'}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'Off-Season Section',
        subtitle: 'Off-Season',
        media: CalendarIcon,
      }
    },
  },
})
