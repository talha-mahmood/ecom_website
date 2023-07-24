import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../../../sanity/env'

export const client = createClient({ 
  token:process.env.SANITY_ACCESS_TOKEN,
  apiVersion,
  dataset,
  projectId,
  useCdn:true,
})
