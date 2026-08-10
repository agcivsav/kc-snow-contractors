import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

type ButtonParent = {
  title?: string
  href?: string
  variant?: string
}

function isButtonStarted(parent?: ButtonParent) {
  return Boolean(parent?.title?.trim() || parent?.href?.trim())
}

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Button Type',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) =>
        rule.custom((title, context) => {
          const parent = context.parent as ButtonParent | undefined
          if (!isButtonStarted(parent) && !title) return true
          if (!title?.trim()) return 'Title is required'
          return true
        }),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      description: 'Internal path (e.g. /quote) or full URL',
      validation: (rule) =>
        rule.custom((href, context) => {
          const parent = context.parent as ButtonParent | undefined
          if (!isButtonStarted(parent) && !href) return true
          if (!href?.trim()) return 'URL is required'
          return true
        }),
    }),
  ],
  preview: {
    select: {title: 'title', variant: 'variant', href: 'href'},
    prepare({title, variant, href}) {
      const typeLabel = variant === 'secondary' ? 'Secondary' : 'Primary'
      return {
        title: title || 'Button',
        subtitle: `${typeLabel}${href ? ` · ${href}` : ''}`,
      }
    },
  },
})
