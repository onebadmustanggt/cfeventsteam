export const site = {
  name: "The CF Events Team",
  shortName: "CF Events",
  domain: "cfeventsteam.com",
  tagline: "Small markets. Real community. The CSRA.",
  email: "CF.events.team@gmail.com",
  vendorEmail: "CF.VendorEvents@gmail.com",
  instagram: {
    handle: "@cf.events.team",
    url: "https://www.instagram.com/cf.events.team/",
  },
  venue: {
    name: "720 Collective Studio | Spa",
    street: "720 Broad Street",
    city: "Augusta, GA 30901",
  },
};

export const navLinks = [
  { href: "#events", label: "Events" },
  { href: "#about", label: "About" },
  { href: "#vendors", label: "Vendors" },
  { href: "#contact", label: "Contact" },
] as const;

export const events = [
  {
    slug: "spring-collective",
    title: "The Spring Collective",
    subtitle: "A curated wellness & self-care market",
    dateLabel: "Saturday, May 9, 2026",
    timeLabel: "1:00 PM – 4:00 PM",
    place: "720 Broad Street, Augusta, GA",
    status: "Vendor applications open",
    blurb:
      "A small indoor market focused on wellness, self-care, beauty, and meaningful small businesses. Not a typical crowded market — 4 to 6 vendors, chosen so the room stays personal.",
    details: [
      "Holistic health, coaching, skincare, and nutrition",
      "Jewelry, accessories, and healthy treats",
      "Indoor 6 ft table · $25 vendor fee",
      "A quiet pre-Mother’s Day afternoon",
    ],
    cta: {
      label: "Apply to vend",
      href: "mailto:CF.events.team@gmail.com?subject=The%20Spring%20Collective",
    },
  },
  {
    slug: "secret-garden",
    title: "The Secret Garden Gathering",
    subtitle: "An immersive mystery night",
    dateLabel: "Friday, June 26, 2026",
    timeLabel: "7:00 PM – 9:00 PM",
    place: "720 Collective, Downtown Augusta",
    status: "40 tickets · $10",
    blurb:
      "Secrets, clues, and whimsical garden magic. Every guest has a secret. Every clue brings you closer. Will you solve it before the garden gate closes?",
    details: [
      "Dress code: whimsical garden attire",
      "Children over 10 welcome",
      "Costume prizes, including Secret Garden Royalty",
      "Intimate, ticketed evening — not a market",
    ],
    cta: {
      label: "Reserve a ticket",
      href: "https://www.vagaro.com/cl/f-KBkgveendd8iN6zexC5-7KQveFzj6xUpNiTONa7mg=",
    },
  },
  {
    slug: "summer-collective",
    title: "The Summer Collective",
    subtitle: "A curated market & community gathering",
    dateLabel: "Saturday, July 11, 2026",
    timeLabel: "2:00 PM – 5:00 PM",
    place: "720 Collective Studio | Spa, 720 Broad Street",
    status: "Shop local · Downtown Augusta",
    blurb:
      "An intentional afternoon of makers, small businesses, and local creatives. Shop, sip, browse, and spend a few unhurried hours supporting the CSRA.",
    details: [
      "Beauty, wellness, handmade goods, and sweet treats",
      "Returning favorites plus first-time vendors",
      "Cozy indoor setting — not a large outdoor market",
      "Covered by The Augusta Press community calendar",
    ],
    cta: {
      label: "Ask about a table",
      href: "mailto:CF.VendorEvents@gmail.com?subject=The%20Summer%20Collective",
    },
  },
];

export const offerings = [
  {
    title: "Curated indoor markets",
    body: "We keep lineups small on purpose. Wellness, beauty, handmade goods, and treats — chosen so guests can actually talk with the people who made them.",
  },
  {
    title: "Ticketed story nights",
    body: "Evenings like The Secret Garden Gathering: dress codes, clues, and a room that feels like a story instead of a flyer.",
  },
  {
    title: "Community partnerships",
    body: "We host with 720 Collective on Broad Street and partner on CSRA gatherings — including vendor support for the South Pacific Festival.",
  },
];
