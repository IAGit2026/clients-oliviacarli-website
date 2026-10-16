export type SiteNavigationItem = {
  label: string;
  publicUrl: string;
  routePath: string;
  originalPageKey: string;
};

export const siteNavigationItems: SiteNavigationItem[] = [
  { label: "About", publicUrl: "/", routePath: "/", originalPageKey: "about" },
  { label: "Philosophy", publicUrl: "/philosophy.html", routePath: "/philosophy", originalPageKey: "philosophy" },
  { label: "The Lineage", publicUrl: "/the-lineage.html", routePath: "/the-lineage", originalPageKey: "path" },
  { label: "The Path", publicUrl: "/the-path.html", routePath: "/the-path", originalPageKey: "work" },
  { label: "Love Notes", publicUrl: "/love-notes.html", routePath: "/love-notes", originalPageKey: "love" },
  { label: "The Calling", publicUrl: "/the-calling.html", routePath: "/the-calling", originalPageKey: "calling" },
  { label: "Empower Thyself", publicUrl: "/empower-thyself.html", routePath: "/empower-thyself", originalPageKey: "empower" },
];
