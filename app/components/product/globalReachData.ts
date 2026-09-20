// components/product/globalReachData.ts

export type GlobalReachStat = {
  value: string;
  label: string;
  sublabel?: string;
  icon?: string;      // lucide icon name — used by some layouts
};

export type GlobalReachData = {
  eyebrow: string;
  headline: string;
  body: string;
  stats: GlobalReachStat[];
  highlight?: string;
};

export const GLOBAL_REACH_DATA: Record<string, GlobalReachData> = {
  "revenue-os": {
    eyebrow: "Global reach",
    headline: "Optimizing revenue across every major market.",
    body: "RevenueOS powers monetization for merchants in 90+ countries — with region-specific models that adapt to local buyer behavior, currency, and payment preferences.",
    stats: [
      { value: "90+", label: "Countries", sublabel: "Active markets" },
      { value: "$5B+", label: "Processed", sublabel: "Annually" },
      { value: "99.9%", label: "Uptime", sublabel: "Platform reliability" },
      { value: "24/7", label: "Support", sublabel: "Global coverage" },
    ],
    highlight: "12M+ customers optimized monthly",
  },

  "decline-os": {
    eyebrow: "Global recovery network",
    headline: "Recovering lost revenue across 40+ processor routes.",
    body: "DeclineOS operates through a global network of processors, acquirers, and banking rails — matching each declined transaction with the highest-probability recovery path.",
    stats: [
      { value: "40+", label: "Processors", icon: "Server" },
      { value: "22", label: "Acquirers", icon: "Building2" },
      { value: "1.2M", label: "Recovered", icon: "RotateCcw" },
      { value: "30%+", label: "Recovery rate", icon: "TrendingUp" },
    ],
    highlight: "$52M+ recovered for merchants this year",
  },

  "acquire-os": {
    eyebrow: "Global acquiring network",
    headline: "Approved in 12–24 hours. Everywhere.",
    body: "AcquireOS connects high-risk merchants to trusted acquirers across 8 countries — with rapid approvals and purpose-built infrastructure for every major high-risk vertical.",
    stats: [
      { value: "340+", label: "Merchants" },
      { value: "22", label: "Acquirers" },
      { value: "8", label: "Countries" },
      { value: "97%", label: "Approval rate" },
    ],
    highlight: "50%+ revenue splits on every transaction",
  },

  "reward-os": {
    eyebrow: "Global rewards network",
    headline: "Life-changing prizes across 12 partner brands.",
    body: "RewardOS pools incentive budgets from partner brands into a single shared network — giving growing businesses the power to offer global-brand-caliber rewards at a fraction of the cost.",
    stats: [
      { value: "12+", label: "Brands", icon: "Building2" },
      { value: "2.4M", label: "Entries", icon: "Ticket" },
      { value: "1,249", label: "Winners", icon: "Trophy" },
      { value: "$125K", label: "Prize pools", icon: "DollarSign" },
    ],
    highlight: "$2.4M+ paid out to winners",
  },

  "pay-os": {
    eyebrow: "Global payment rails",
    headline: "Settling in 150+ countries. 24 hours a day.",
    body: "PayOS provides the payment infrastructure that powers the XLTV ecosystem — active corridors, multiple currencies, and real-time settlement across every major global market.",
    stats: [
      { value: "150+", label: "Countries", sublabel: "Supported" },
      { value: "42", label: "Corridors", sublabel: "Active routes" },
      { value: "38", label: "Currencies", sublabel: "Settlement" },
      { value: "99.9%", label: "Uptime", sublabel: "Platform reliability" },
    ],
    highlight: "0.8s average cross-border settlement",
  },
};