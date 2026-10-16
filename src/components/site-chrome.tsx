import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SiteInteractions } from "./site-interactions";

const siteFontsStylesheetUrl =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link href={siteFontsStylesheetUrl} rel="stylesheet" precedence="default" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <SiteInteractions />
    </>
  );
}
