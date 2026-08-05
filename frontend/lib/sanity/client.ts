import {createClient} from "next-sanity"
import {apiVersion, dataset, projectId} from "./env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // false = always hit Sanity API (not APICDN), so publishes show immediately
  useCdn: false,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})
