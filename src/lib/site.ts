export const site = {
  name: "The CF Events Team",
  shortName: "CF Events",
  established: "EST 2023",
  domain: "cfeventsteam.com",
  tagline: "Bringing the community together, one event at a time.",
  bio: "The CF Events Team, bringing together vendor markets, pop-ups, food trucks, local businesses & community connections across the CSRA. Fun with a purpose.",
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
  { href: "#services", label: "Services" },
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
};

export const awards = {
  intro:
    "Our neighbors keep voting us in! CommunityVotes Augusta’s 2026 campaign received thousands of nominations, recognizing 2,574 local businesses and individuals, with CF Events Team earning awards across eight categories. We were also nominated for Best of Georgia by the Georgia Business Journal in 2025 and are proud to be nominated again for 2026.",
  communityVotes: {
    source: "CommunityVotes Augusta",
    year: "2026",
    note: "CF Events Team",
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
    intro: "If you love what we do in Grovetown and across the CSRA, add your vote.",
    howToTitle: "How to Vote",
    steps: [
      "Click Vote at BestofGeorgia.com below.",
      "Scroll to Event Planners under Weddings & Events.",
      "Click View All Nominees.",
      "Find The CF Events Team in the first column and cast your vote!",
    ],
    thanks: "Thank you for supporting local!",
    cta: "Vote at BestofGeorgia.com",
    href: "https://gbj.com/best-of/vote/weddings-events",
  },
};

export const events = [
  {
    slug: "honey-and-harvest",
    title: "Honey and Harvest Fall Festival",
    subtitle: "A curated market and Fall Festival",
    dateLabel: "Saturday, October 10, 2026",
    timeLabel: "11:00 AM – 4:00 PM",
    place: "5220 Canterbury Farms Parkway, Grovetown GA",
    status: "Vendor applications closed",
    blurb:
      "Celebrate the season with a festive fall market filled with local vendors, handcrafted goods, delicious treats, and plenty of autumn charm. Spend the day shopping unique finds, enjoying seasonal flavors, and making memories with family and friends. It’s the perfect way to welcome fall and support local businesses in a fun, community-focused atmosphere.",
    details: [
      "Outdoor shopping in a relaxed fall setting",
      "One-of-a-kind gifts, décor, and specialty items",
      "A great weekend outing for all ages",
      "Opportunities to discover new local makers and creators",
    ],
    cta: {
      label: "Get in touch",
      href: "#contact",
    },
  },
  {
    slug: "bloom-and-buzz",
    title: "Bloom and Buzz Spring Market",
    subtitle: "A curated market and Spring Festival",
    dateLabel: "Saturday, April 3, 2027",
    timeLabel: "11:00 AM – 5:00 PM",
    place: "212 Partnership Drive, Grovetown GA",
    status: "Vendor applications open",
    blurb:
      "Welcome spring with a lively indoor and outdoor market featuring a great mix of shopping, entertainment, and seasonal fun. With 6,300 square feet of indoor space and a variety of food vendors serving up delicious options, there will be plenty to enjoy throughout the day. Enjoy live music while discovering unique products, local businesses, and everything that makes springtime worth celebrating.",
    details: [
      "6,300 square feet of indoor vendor space",
      "Indoor and outdoor shopping experience",
      "Live music throughout the event",
      "Variety of food vendors and delicious eats",
    ],
    cta: {
      label: "Apply to vend",
      href: "mailto:cf.vendorevents@gmail.com?subject=Bloom%20and%20Buzz%20Spring%20Market",
    },
  },
];

export const services = [
  {
    title: "Event Planning & Coordination",
    body: "Planning and coordinating community events, markets, festivals, pop-ups, and special events from concept through event day.",
  },
  {
    title: "Vendor Market Coordination",
    body: "Managing vendor applications, communication, placement, requirements, check-in, and day-of-event coordination.",
  },
  {
    title: "Festival & Community Event Planning",
    body: "Creating organized, family-friendly festivals and community events designed to bring people, businesses, and organizations together.",
  },
  {
    title: "Vendor Recruitment & Management",
    body: "Connecting events with local makers, small businesses, food vendors, service providers, and other community vendors.",
  },
  {
    title: "Event Logistics & Layout Planning",
    body: "Helping organize vendor layouts, event flow, setup areas, activity spaces, parking considerations, and other event-day logistics.",
  },
  {
    title: "Event Promotion & Marketing Support",
    body: "Helping promote events, vendors, sponsors, and community partners through social media content, announcements, spotlights, and event campaigns.",
  },
  {
    title: "Small Business & Vendor Promotion",
    body: "Providing opportunities for local businesses and vendors to gain exposure, connect with customers, and participate in community events throughout the CSRA.",
  },
  {
    title: "Food Truck & Mobile Vendor Coordination",
    body: "Coordinating food trucks and mobile vendors for community events, private locations, seasonal schedules, and special event lineups.",
  },
  {
    title: "Community Partnerships & Collaborations",
    body: "Working with local businesses, venues, organizations, and community partners to create collaborative events and experiences.",
  },
  {
    title: "Event Day Management",
    body: "Providing on-site coordination including vendor check-in, setup oversight, communication, troubleshooting, event flow, and vendor support throughout the event.",
  },
];
