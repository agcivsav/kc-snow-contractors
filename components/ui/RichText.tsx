import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity"

const components: PortableTextComponents = {
  block: {
    normal: ({children}) => (
      <p className="text-gray-600 leading-relaxed mb-6 last:mb-0">{children}</p>
    ),
  },
  list: {
    bullet: ({children}) => (
      <ul className="space-y-2 mb-6 last:mb-0">{children}</ul>
    ),
    number: ({children}) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 last:mb-0 text-gray-600">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({children}) => (
      <li className="flex items-start gap-2 text-gray-600 leading-relaxed">
        <span
          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500"
          aria-hidden
        />
        <span>{children}</span>
      </li>
    ),
    number: ({children}) => (
      <li className="text-gray-600 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({children}) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({children}) => <em>{children}</em>,
    underline: ({children}) => <span className="underline">{children}</span>,
    "strike-through": ({children}) => (
      <span className="line-through">{children}</span>
    ),
    code: ({children}) => (
      <code className="rounded bg-gray-100 px-1 text-sm">{children}</code>
    ),
    link: ({children, value}) => {
      const href = typeof value?.href === "string" ? value.href : "#"
      const external = href.startsWith("http")
      return (
        <a
          href={href}
          className="text-yellow-600 underline hover:text-yellow-700"
          {...(external
            ? {target: "_blank", rel: "noopener noreferrer"}
            : {})}
        >
          {children}
        </a>
      )
    },
  },
}

type RichTextProps = {
  value?: PortableTextBlock[] | string | null
  className?: string
}

/** Renders Sanity Portable Text, or a plain string for legacy content. */
export function RichText({value, className}: RichTextProps) {
  if (!value) return null

  if (typeof value === "string") {
    const paragraphs = value
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
    if (!paragraphs.length) return null
    return (
      <div className={className}>
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-gray-600 leading-relaxed mb-6 last:mb-0 whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  if (!Array.isArray(value) || value.length === 0) return null

  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  )
}
