import type { ReactNode } from "react";
import "@/styles/missing-piece-styles.css";

const missingPieceFontsStylesheetUrl =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@300;400;500&family=Cinzel:wght@400;500;600&display=swap";

export default function MissingPieceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link href={missingPieceFontsStylesheetUrl} rel="stylesheet" precedence="default" />
      {children}
    </>
  );
}
