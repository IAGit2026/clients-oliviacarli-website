import type { Metadata } from "next";

export const siteOrigin = "https://oliviacarli.com";

type PageMetadataInput = {
  title: string;
  description: string;
  publicUrl: string;
  shareImagePath: string;
  shareTitle?: string;
  shareDescription?: string;
  includeTwitterCard?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  publicUrl,
  shareImagePath,
  shareTitle = title,
  shareDescription = description,
  includeTwitterCard = true,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: publicUrl },
    openGraph: {
      type: "website",
      url: publicUrl,
      siteName: "Olivia Carli",
      title: shareTitle,
      description: shareDescription,
      images: [`${siteOrigin}${shareImagePath}`],
    },
    ...(includeTwitterCard ? { twitter: { card: "summary_large_image" } } : {}),
  };
}
