import Link from "next/link"
import {stegaClean} from "next-sanity"
import type {CmsButton} from "@/components/home/home-types"

type CmsButtonLinkProps = {
  button: CmsButton
  className?: string
}

export function buttonClassName(
  variant?: string | null,
  extra?: string,
): string {
  const clean = stegaClean(variant) || "primary"
  const base = clean === "secondary" ? "btn-secondary" : "btn-primary"
  return extra ? `${base} ${extra}` : base
}

/** Resolves title/label for legacy link objects and new button objects */
export function buttonTitle(button: CmsButton): string {
  return button.title || button.label || ""
}

export function CmsButtonLink({button, className}: CmsButtonLinkProps) {
  if (!button?.href) return null
  const title = buttonTitle(button)
  if (!title) return null
  const href = stegaClean(button.href)

  return (
    <Link href={href} className={buttonClassName(button.variant, className)}>
      {title}
    </Link>
  )
}
