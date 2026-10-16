"use client";

import type { MouseEvent, ReactNode } from "react";

const RESTING_COLOR = "#BBA09A";
const HOVER_COLOR = "var(--gold-light)";

function setLinkColor(event: MouseEvent<HTMLAnchorElement>, color: string) {
  event.currentTarget.style.color = color;
}

export function FooterCreditLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="https://modernmysteryschoolint.com/"
      onMouseOut={(event) => setLinkColor(event, RESTING_COLOR)}
      onMouseOver={(event) => setLinkColor(event, HOVER_COLOR)}
      rel="noopener"
      style={{ color: RESTING_COLOR, borderBottom: "1px solid var(--line-light)", transition: ".3s" }}
      target="_blank"
    >
      {children}
    </a>
  );
}
