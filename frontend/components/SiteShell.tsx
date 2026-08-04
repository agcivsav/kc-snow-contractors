"use client"

import {usePathname} from "next/navigation"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import {LandingFooter} from "@/app/landing/LandingFooter"
import {LandingHeader} from "@/app/landing/LandingHeader"
import {ExitIntentPopup} from "@/components/site/ExitIntentPopup"
import type {SiteSettingsData} from "@/components/site/site-settings-defaults"

function isLandingPath(pathname: string) {
  return pathname.replace(/\/$/, "") === "/landing"
}

type SiteShellProps = {
  children: React.ReactNode
  settings?: SiteSettingsData | null
}

export function SiteShell({children, settings}: SiteShellProps) {
  const pathname = usePathname()

  if (isLandingPath(pathname)) {
    return (
      <>
        <LandingHeader />
        <main>{children}</main>
        <LandingFooter />
      </>
    )
  }

  return (
    <>
      <Navbar settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
      <ExitIntentPopup settings={settings?.exitIntent} />
    </>
  )
}
