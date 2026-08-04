import {defineArrayMember, defineField, defineType} from 'sanity'
import {ComposeIcon} from '@sanity/icons'

export const processStepType = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({
      name: 'step',
      title: 'Step number',
      type: 'string',
      description: 'e.g. 01',
      validation: (rule) => rule.required(),
    }),
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
    select: {title: 'title', subtitle: 'step'},
  },
})

export const howItWorksSectionType = defineType({
  name: 'howItWorksSection',
  title: 'How It Works',
  type: 'object',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subheading', type: 'text', rows: 2}),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid (homepage)', value: 'grid'},
          {title: 'Vertical list', value: 'list'},
        ],
        layout: 'radio',
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'steps',
      type: 'array',
      of: [defineArrayMember({type: 'processStep'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'footerLink',
      title: 'Footer link',
      type: 'link',
    }),
    defineField({
      name: 'ctaBox',
      title: 'Bottom CTA box',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 2}),
        defineField({name: 'cta', type: 'button'}),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'How It Works',
        subtitle: 'How It Works',
        media: ComposeIcon,
      }
    },
  },
})
