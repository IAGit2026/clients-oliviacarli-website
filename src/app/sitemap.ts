import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/page-metadata";
import { siteNavigationItems } from "@/lib/site-navigation";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteNavigationItems.map((item) => ({ url: `${siteOrigin}${item.publicUrl}` }));
}
