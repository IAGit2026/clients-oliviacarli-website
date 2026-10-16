import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteOrigin } from "@/lib/page-metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  icons: { icon: [{ url: "/assets/img/img-59d9f8597c.png", type: "image/png" }] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
