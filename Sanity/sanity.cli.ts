import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qfubtji5',
    dataset: 'production',
  },
  server: {
    port: 3333,
  },
  deployment: {
    autoUpdates: true,
  },
})
