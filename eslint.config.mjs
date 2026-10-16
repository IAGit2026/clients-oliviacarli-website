import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      // Page copy is kept as readable text with real apostrophes and quotes.
      "react/no-unescaped-entities": "off",
      // Plain <img> tags keep the original markup and appearance on a static export.
      "@next/next/no-img-element": "off",
      // Each page is a standalone document, so links use plain anchors and full page loads like the original site.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "dist/**", "node_modules/**", "next-env.d.ts", "public/assets/**"]),
]);
