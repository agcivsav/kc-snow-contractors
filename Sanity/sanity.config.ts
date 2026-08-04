import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {dashboardTool, projectInfoWidget} from '@sanity/dashboard'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'
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

/** Navbar: Structure → Vision → Media → Dashboard */
const TOOL_ORDER = ['structure', 'vision', 'media', 'dashboard']

export default defineConfig({
  name: 'default',
  title: 'RPM Snow KC',

  projectId: 'qfubtji5',
  dataset: 'production',

  // Classic draft → Publish workflow (Content Releases hides Publish for many docs)
  releases: {
    enabled: false,
  },

  plugins: [
    structureTool({structure}),
    visionTool(),
    media(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify deploys',
          sites: [
            {
              title: 'KC Snow Contractors',
              name: 'kcsnow-contractors',
              apiId: '6bda06e0-bf3e-4692-95e5-2cb7e5562844',
              buildHookId: '6a721add3380780de226f6e0',
            },
          ],
        }),
        projectInfoWidget(),
      ],
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
