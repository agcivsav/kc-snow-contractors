import {useEffect} from 'react'
import {
  PatchEvent,
  set,
  useFormValue,
  type ObjectInputProps,
  type StringInputProps,
} from 'sanity'
import {getMainPageById, slugify} from '../lib/main-pages'

/** Visually hide a field while keeping it mounted (so sync effects run). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VisuallyHiddenField(props: any) {
  return <div style={{display: 'none'}}>{props.renderDefault(props)}</div>
}

function currentSlug(value: unknown): string | undefined {
  if (value && typeof value === 'object' && 'current' in value) {
    return (value as {current?: string}).current
  }
  return undefined
}

/**
 * Main pages: slug locked to the app route folder (e.g. app/how-it-works → how-it-works).
 * Nested pages: slug generated from hero title.
 */
export function AutoSlugInput(props: ObjectInputProps) {
  const docId = useFormValue(['_id']) as string | undefined
  const heroTitle = useFormValue(['hero', 'title']) as string | undefined
  const {value, onChange, renderDefault} = props

  useEffect(() => {
    const main = getMainPageById(docId)

    // Main pages → slug from app route file/folder name only
    if (main) {
      if (currentSlug(value) !== main.slug) {
        onChange(PatchEvent.from(set({_type: 'slug', current: main.slug})))
      }
      return
    }

    // Nested (+ created) pages → slug from hero title
    if (!heroTitle || typeof heroTitle !== 'string') return
    const next = slugify(heroTitle)
    if (!next || currentSlug(value) === next) return
    onChange(PatchEvent.from(set({_type: 'slug', current: next})))
  }, [docId, heroTitle, onChange, value])

  return renderDefault(props)
}

/**
 * Main pages: title from route config.
 * Nested pages: title mirrors hero title for list previews.
 */
export function AutoTitleInput(props: StringInputProps) {
  const docId = useFormValue(['_id']) as string | undefined
  const heroTitle = useFormValue(['hero', 'title']) as string | undefined
  const {value, onChange, renderDefault} = props

  useEffect(() => {
    const main = getMainPageById(docId)

    if (main) {
      if (value !== main.title) {
        onChange(PatchEvent.from(set(main.title)))
      }
      return
    }

    if (!heroTitle || typeof heroTitle !== 'string') return
    if (value === heroTitle) return
    onChange(PatchEvent.from(set(heroTitle)))
  }, [docId, heroTitle, onChange, value])

  return renderDefault(props)
}
