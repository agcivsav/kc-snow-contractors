"use client"

import Link from "next/link"
import {useCallback, useEffect, useState} from "react"
import type {ExitIntentSettings} from "./site-settings-defaults"

const STORAGE_KEY = "rpm-exit-intent-dismissed"

type ExitIntentPopupProps = {
  settings?: ExitIntentSettings | null
}

export function ExitIntentPopup({settings}: ExitIntentPopupProps) {
  const [open, setOpen] = useState(false)

  const dismiss = useCallback(() => {
    setOpen(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, "1")
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!settings?.enabled || !settings.heading) return

    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {
      /* ignore */
    }

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY > 0) return
      if (event.relatedTarget) return
      setOpen(true)
    }

    document.addEventListener("mouseout", onMouseOut)
    return () => document.removeEventListener("mouseout", onMouseOut)
  }, [settings?.enabled, settings?.heading])

  if (!settings?.enabled || !open || !settings.heading) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-heading"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 min-w-11 min-h-11"
          aria-label="Close"
        >
          ×
        </button>
        <h2
          id="exit-intent-heading"
          className="text-2xl font-extrabold text-gray-900 mb-3 pr-8"
        >
          {settings.heading}
        </h2>
        {settings.description ? (
          <p className="text-gray-600 mb-6 leading-relaxed">{settings.description}</p>
        ) : null}
        <div className="flex flex-col gap-3">
          {settings.cta?.href ? (
            <Link
              href={settings.cta.href}
              className="btn-primary text-center"
              onClick={dismiss}
            >
              {settings.cta.label}
            </Link>
          ) : null}
          <button
            type="button"
            onClick={dismiss}
            className="text-sm text-gray-500 hover:text-gray-800 py-2"
          >
            {settings.dismissLabel || "No thanks"}
          </button>
        </div>
      </div>
    </div>
  )
}
