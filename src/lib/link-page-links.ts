export type LinkPageLink = {
  label: string;
  description: string;
  href: string;
  opensInNewTab: boolean;
  isFeatured?: boolean;
  isPlaceholder?: boolean;
};

/*
  Links copied from the previous Msha.ke link page, plus a few pages on this site.
  If a link is not final yet, mark it with isPlaceholder: true and replace it later.
*/
export const linkPageLinks: LinkPageLink[] = [
  {
    label: "Book a Clarity Call with Olivia",
    description: "A complimentary 30-minute conversation. Clarity, not pressure.",
    href: "https://oliviacarli.as.me/clarityconsult",
    opensInNewTab: true,
    isFeatured: true,
  },
  {
    label: "Discover Your Missing Piece",
    description: "Take the free self-discovery assessment and meet your archetype.",
    href: "/missing-piece",
    opensInNewTab: false,
  },
  {
    label: "Answer the Call",
    description: "90 days. 13 in-person experiences. 10 people per cohort.",
    href: "/the-calling",
    opensInNewTab: false,
  },
  {
    label: "Begin the Path: Empower Thyself",
    description: "Begin cultivating wisdom and self-mastery.",
    href: "https://empowerthyself.ca/",
    opensInNewTab: true,
  },
  {
    label: "A Moment of Stillness",
    description: "A free guided meditation to settle your mind and return to yourself.",
    href: "https://open.spotify.com/episode/2qFIycXfMFGsL7FnTrP7g3",
    opensInNewTab: true,
  },
  {
    label: "Meditation with Kash: Online",
    description: "Register to join the group meditation on Zoom.",
    href: "https://venasolutions.zoom.us/meeting/register/tJwvcu6rrjwvGtO37i5vRuJRvaMRV_2tsJY6",
    opensInNewTab: true,
  },
  {
    label: "Meditation with Kash: In Person",
    description: "Reserve your seat at the Toronto meditations on Eventbrite.",
    href: "https://www.eventbrite.com/cc/meditations-toronto-2872489",
    opensInNewTab: true,
  },
  {
    label: "Why We Heal Podcast",
    description: "Conversations on healing, and making life a sacred ceremony.",
    href: "https://open.spotify.com/episode/1QFodkpGvvl09IpQbhhacW",
    opensInNewTab: true,
  },
  {
    label: "Read the Love Notes",
    description: "Kind words from the people who have walked the path.",
    href: "/love-notes",
    opensInNewTab: false,
  },
  {
    label: "Explore My World",
    description: "My philosophy, healings, teachings and offerings.",
    href: "/",
    opensInNewTab: false,
  },
  {
    label: "Follow on Instagram",
    description: "Daily reflections, rituals and beauty.",
    href: "https://instagram.com/iamoliviacarli",
    opensInNewTab: true,
  },
];
