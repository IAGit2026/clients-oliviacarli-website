export type LinkPageLink = {
  label: string;
  description: string;
  href: string;
  opensInNewTab: boolean;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
};

/*
  Placeholder links are marked with isPlaceholder: true.
  Replace each placeholder href with the final link, then remove the flag.
*/
export const linkPageLinks: LinkPageLink[] = [
  {
    label: "Book a Clarity Consult",
    description: "A complimentary 30-minute conversation. Clarity, not pressure.",
    href: "https://oliviacarli.as.me/clarityconsult",
    opensInNewTab: true,
    isFeatured: true,
  },
  {
    label: "Answer the Call",
    description: "90 days. 13 in-person experiences. 10 people per cohort.",
    href: "/the-calling",
    opensInNewTab: false,
  },
  {
    label: "Take the Missing Piece Assessment",
    description: "Discover your archetype and the area of life asking for your attention.",
    href: "/missing-piece",
    opensInNewTab: false,
  },
  {
    label: "Empower Thyself",
    description: "Begin cultivating wisdom and self-mastery.",
    href: "/empower-thyself",
    opensInNewTab: false,
  },
  {
    label: "Read the Love Notes",
    description: "Kind words from the people who have walked the path.",
    href: "/love-notes",
    opensInNewTab: false,
  },
  {
    label: "Meet Olivia",
    description: "Guide. Teacher. Healer.",
    href: "/",
    opensInNewTab: false,
  },
  {
    label: "Follow on Instagram",
    description: "Daily reflections, rituals and beauty.",
    href: "https://www.instagram.com/",
    opensInNewTab: true,
    isPlaceholder: true,
  },
  {
    label: "Watch on YouTube",
    description: "Teachings and conversations on living wisely.",
    href: "https://www.youtube.com/",
    opensInNewTab: true,
    isPlaceholder: true,
  },
  {
    label: "Join the Letter",
    description: "Notes on wisdom, beauty and meaningful service.",
    href: "https://oliviacarli.com/",
    opensInNewTab: true,
    isPlaceholder: true,
  },
];
