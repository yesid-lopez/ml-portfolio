import {ClientConfig, createClient} from '@sanity/client'

const config: ClientConfig = {
  dataset: 'production',
  projectId: process.env.SANITY_PROJECT_ID || '',
  apiVersion: '2021-08-31',
  useCdn: false
}

export default createClient(config)
