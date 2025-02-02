import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'qi23uqs6',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export default client 