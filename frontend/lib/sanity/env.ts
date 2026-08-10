// Public Sanity ids — env overrides these; fallbacks keep Netlify builds
// working when Deploy Previews omit NEXT_PUBLIC_* vars.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "qfubtji5"
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production"
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2025-08-03"

export function assertSanityEnv() {
  if (!projectId || !dataset) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET",
    )
  }
}
