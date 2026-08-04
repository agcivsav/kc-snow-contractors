import {defineArrayMember, defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const audienceCardType = defineType({
  name: 'audienceCard',
  title: 'Audience Card',
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
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bullets',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'cta', type: 'button'}),
    defineField({
      name: 'variant',
      type: 'string',
      options: {
        list: [
          {title: 'Light (accent border)', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'variant'},
  },
})

export const whoWeServeSectionType = defineType({
  name: 'whoWeServeSection',
  title: 'Who We Serve',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subheading', type: 'text', rows: 2}),
    defineField({
      name: 'audiences',
      type: 'array',
      of: [defineArrayMember({type: 'audienceCard'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'Who We Serve',
        subtitle: 'Who We Serve',
        media: UsersIcon,
      }
    },
  },
})
