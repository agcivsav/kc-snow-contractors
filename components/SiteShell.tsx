"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LandingFooter } from "@/app/landing/LandingFooter";
import { LandingHeader } from "@/app/landing/LandingHeader";

function isLandingPath(pathname: string) {
  return pathname.replace(/\/$/, "") === "/landing";
}

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  if (isLandingPath(pathname)) {
    return (
      <>
        <LandingHeader />
        <main>{children}</main>
        <LandingFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
