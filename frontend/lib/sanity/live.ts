import {defineLive} from "next-sanity/live"
import {client} from "./client"

const token = process.env.SANITY_API_READ_TOKEN

export const {sanityFetch, SanityLive} = defineLive({
  client: client.withConfig({
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-08-03",
  }),
  // false = published content only (silences defineLive token warnings)
  serverToken: token || false,
  browserToken: token || false,
})
