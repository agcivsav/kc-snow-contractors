import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {
  dashboardTool,
  projectInfoWidget,
  projectUsersWidget,
} from '@sanity/dashboard'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {MAIN_PAGES} from './lib/main-pages'

const mainPageTemplates = MAIN_PAGES.map((page) => ({
  id: page.templateId,
  title: page.title,
  schemaType: 'page' as const,
  value: {
    title: page.title,
    section: 'main',
    slug: {_type: 'slug', current: page.slug},
    hero: {
      title: page.title,
    },
  },
}))

/** Navbar order: Structure → Vision → Media → Dashboard → Releases */
const TOOL_ORDER = ['structure', 'vision', 'media', 'dashboard', 'releases']

export default defineConfig({
  name: 'default',
  title: 'RPM Snow KC',

  projectId: 'qfubtji5',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    media(),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],

  studio: {
    components: {
      toolMenu: (props) => {
        const {tools, renderDefault} = props
        const ordered = TOOL_ORDER.flatMap((name) =>
          tools.filter((tool) => tool.name === name),
        )
        const rest = tools.filter((tool) => !TOOL_ORDER.includes(tool.name))
        return renderDefault({...props, tools: [...ordered, ...rest]})
      },
    },
  },

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev.filter((template) => template.schemaType !== 'page'),
      ...mainPageTemplates,
    ],
  },

  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((template) =>
          ['equipment', 'rentalProgram', 'seoLanding'].includes(
            template.templateId,
          ),
        )
      }

      // Main page tabs only — never offer main-page templates from other lists
      if (
        creationContext.type === 'structure' &&
        creationContext.schemaType === 'page'
      ) {
        return []
      }

      return prev
    },
  },
})
