// components/product/winners.ts

export type Winner = {
  id: string;
  name: string;
  amount: string;
  prize: string;      // "Cash Prize" | "Grand Prize" | "Gift Card"
  quote: string;
  avatar?: string;
  brand?: string;
};

/** Winner spotlighted at the top of the RewardOS winner ticker */
export type FeaturedWinner = Winner & {
  eyebrow: string;       // e.g. "Winner of the week"
  storyHref: string;     // link to the full story
  ctaLabel: string;      // button label
};

export const WINNERS: Winner[] = [
  {
    id: "khan-n",
    name: "Khan N",
    amount: "$4,000",
    prize: "Cash Prize",
    quote: "Took my family on the trip of a lifetime",
    avatar: "/winners/khan.jpg",
    brand: "Myco",
  },
  {
    id: "sunny-l",
    name: "Sunny L",
    amount: "$800",
    prize: "Gift Card",
    quote: "Launched my own podcast",
    avatar: "/winners/sunny.jpg",
    brand: "Pearl Naturelle",
  },
  {
    id: "ahmed-m",
    name: "Ahmed M",
    amount: "$50,000",
    prize: "Grand Prize",
    quote: "Paid off my debt and sons tuition",
    avatar: "/winners/ahmed.jpg",
    brand: "Myco",
  },
  {
    id: "priya-s",
    name: "Priya S",
    amount: "$12,500",
    prize: "Cash Prize",
    quote: "Funded my startup's first hire",
    avatar: "/winners/priya.jpg",
    brand: "KFC",
  },
  {
    id: "marco-r",
    name: "Marco R",
    amount: "$2,300",
    prize: "Cash Prize",
    quote: "Paid for my daughter's tuition",
    avatar: "/winners/marco.jpg",
    brand: "Lay's",
  },
  {
    id: "jane-t",
    name: "Jane T",
    amount: "$25,000",
    prize: "Grand Prize",
    quote: "Bought my first home",
    avatar: "/winners/jane.jpg",
    brand: "Candy Co.",
  },
  {
    id: "leo-k",
    name: "Leo K",
    amount: "$5,600",
    prize: "Cash Prize",
    quote: "Took a sabbatical to write my book",
    avatar: "/winners/leo.jpg",
    brand: "Northwind",
  },
  {
    id: "nadia-h",
    name: "Nadia H",
    amount: "$900",
    prize: "Gift Card",
    quote: "Upgraded my studio equipment",
    avatar: "/winners/nadia.jpg",
    brand: "Myco",
  },
];

/**
 * The winner spotlighted at the top of the RewardOS ticker.
 * Update this object to change who's featured — no code changes needed.
 */
export const FEATURED_WINNER: FeaturedWinner = {
  ...WINNERS.find((w) => w.id === "ahmed-m")!,
  eyebrow: "Winner of the week",
  storyHref: "#winners",
  ctaLabel: "Read his story",
};