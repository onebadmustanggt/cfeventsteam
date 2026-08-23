export const site = {
  name: "The CF Events Team",
  shortName: "CF Events",
  established: "EST 2023",
  domain: "cfeventsteam.com",
  tagline: "Bringing the community together, one event at a time.",
  bio: "Augusta metro Events Team bringing together vendor markets, pop-ups, food trucks, local businesses & community connections across the CSRA. Fun with a purpose.",
  email: "cf.vendorevents@gmail.com",
  location: "Grovetown, GA 30813",
  instagram: {
    handle: "@cf.events.team",
    url: "https://www.instagram.com/cf.events.team/",
  },
  tiktok: {
    handle: "@cf.vendorevents",
    url: "https://www.tiktok.com/@cf.vendorevents",
  },
  facebook: {
    name: "The CF Events Team",
    url: "https://www.facebook.com/cf.events.team",
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

export const aboutCopy = {
  heading: "About The CF Events Team",
  paragraphs: [
    "The CF Events Team is a volunteer-led community events team dedicated to creating fun, welcoming, and well-organized experiences for Canterbury Farms and the surrounding community.",
    "From seasonal festivals and vendor markets to food truck nights, poolside pop-ups, community activities, and special events, our team works behind the scenes to bring residents, local businesses, vendors, and community partners together.",
    "We handle everything from event planning and vendor coordination to promotion, setup, communication, and day-of-event operations. We are proud to support small businesses throughout the CSRA while creating opportunities for our community to gather, connect, and make memories.",
    "At the heart of everything we do is community, connection, collaboration, and supporting local.",
  ],
  closing: "The CF Events Team: Bringing the community together, one event at a time.",
};

export const heartValues = [
  "Community",
  "Connection",
  "Collaboration",
  "Supporting local",
];

export const awards = {
  intro:
    "Our neighbors keep voting us in. CommunityVotes Augusta’s 2026 campaign drew thousands of nominations — 2,574 businesses and individuals — and named the Canterbury Farms Events Team a winner across eight categories. We are also a Best of Georgia nominee from the Georgia Business Journal.",
  communityVotes: {
    source: "CommunityVotes Augusta",
    year: "2026",
    note: "Listed as the Canterbury Farms Events Team",
    platinum: [
      "Advertising",
      "Community Groups",
      "Digital Marketing",
      "Marketing and Advertisement",
      "Promotional Products",
      "Social Media Marketing",
    ],
    gold: ["Administrative Services", "Event and Party Planning"],
  },
  bestOfGeorgia: {
    title: "Best of Georgia nominee",
    source: "Georgia Business Journal",
    cta: "Vote at BestofGeorgia.com",
    href: "https://bestofgeorgia.com",
  },
};

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
      href: "mailto:cf.vendorevents@gmail.com?subject=The%20Spring%20Collective",
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
      href: "mailto:cf.vendorevents@gmail.com?subject=The%20Summer%20Collective",
    },
  },
];

export const offerings = [
  {
    title: "Festivals & markets",
    body: "Seasonal festivals and vendor markets that spotlight local businesses and give neighbors a reason to linger.",
  },
  {
    title: "Pop-ups & food trucks",
    body: "Food truck nights, poolside pop-ups, and special events — fun with a purpose, not another crowded lot.",
  },
  {
    title: "From plan to day-of",
    body: "Planning, vendor coordination, promotion, setup, communication, and day-of operations. Volunteer-led, community-run.",
  },
];
