"use client";

import type { MouseEvent, ReactNode } from "react";
import { LANDING_FORM_SECTION_ID } from "./landing-form-shared";

type LandingFormCtaLinkProps = {
  children: ReactNode;
  className?: string;
};

export function LandingFormCtaLink({
  children,
  className,
}: LandingFormCtaLinkProps) {
  const href = `#${LANDING_FORM_SECTION_ID}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document
      .getElementById(LANDING_FORM_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
