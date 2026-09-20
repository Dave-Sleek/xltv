// components/product/campaigns.ts

export type Campaign = {
  id: string;
  brand: string;
  image: string;
  stat: string;
  headline: string;
  body: string;
  category: "Acquisition" | "Engagement" | "Retention";
};

export const CAMPAIGNS: Campaign[] = [
  {
    id: "mcdonalds",
    brand: "McDonald's",
    image: "/images/campaigns/mcdonalds.jpg",
    stat: "2.2M",
    headline: "App orders driven",
    body: "Monopoly-style rewards boosted app installs and repeat orders across 14 markets.",
    category: "Acquisition",
  },
  {
    id: "candy-crush",
    brand: "Candy Crush",
    image: "/images/campaigns/candy-crush.jpg",
    stat: "15M+",
    headline: "New players attracted",
    body: "Reward-pooled entries converted casual viewers into active players.",
    category: "Acquisition",
  },
  {
    id: "lays",
    brand: "Lay's",
    image: "/images/campaigns/lays.jpg",
    stat: "8%",
    headline: "Sales increase",
    body: "Flavor-focused sweepstakes lifted basket size and drove repeat purchases.",
    category: "Retention",
  },
  {
    id: "doritos",
    brand: "Doritos",
    image: "/images/campaigns/doritos.jpg",
    stat: "3.5M",
    headline: "Website visits",
    body: "Crash-the-super-bowl style UGC campaign funneled traffic to owned channels.",
    category: "Engagement",
  },
  {
    id: "kfc",
    brand: "KFC",
    image: "/images/campaigns/kfc.jpg",
    stat: "413M",
    headline: "Social impressions",
    body: "Shared reward pools amplified organic reach across TikTok and Instagram.",
    category: "Engagement",
  },
  {
    id: "pearl",
    brand: "Pearl Naturelle",
    image: "/images/campaigns/pearl.jpg",
    stat: "3.1×",
    headline: "Watch time",
    body: "DTC beauty brand used RewardOS to grow engagement on long-form video.",
    category: "Engagement",
  },
  {
    id: "northwind",
    brand: "Northwind",
    image: "/images/campaigns/northwind.jpg",
    stat: "58%",
    headline: "Lower CAC",
    body: "Fintech scaled acquisition without discounting — protecting margin.",
    category: "Acquisition",
  },
  {
    id: "myco",
    brand: "Myco",
    image: "/images/campaigns/myco.jpg",
    stat: "2.7×",
    headline: "Sign-up uplift",
    body: "Video streaming platform tripled registrations in a new market.",
    category: "Acquisition",
  },
];