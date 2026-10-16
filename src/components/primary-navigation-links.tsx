"use client";

import { usePathname } from "next/navigation";
import { siteNavigationItems } from "@/lib/site-navigation";

export function PrimaryNavigationLinks() {
  const currentPath = usePathname();

  return (
    <>
      {siteNavigationItems.map((item) => (
        <a
          key={item.routePath}
          className={item.routePath === currentPath ? "active" : undefined}
          data-go={item.originalPageKey}
          href={item.publicUrl}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}
