import type { ReactNode } from "react";
import { SiteChrome } from "@/components/site-chrome";
import "@/styles/site-styles.css";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteChrome>{children}</SiteChrome>;
}
