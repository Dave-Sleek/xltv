// lib/products.ts

export type Product = {
  slug: string;
  name: string;
  tag: string;
  headline: string;
  subheadline: string;
  tagline: string;
  heroImage: string;
  statPill: string;
  announcement: string;
  primaryCta: string;
  secondaryCta: string;
  
  stats: { value: string; label: string }[];
  capabilities: { title: string; body: string }[];
  processSteps: { number: string; title: string; body: string }[];
  /** Set true when content is placeholder and needs client sign-off */
  placeholder?: boolean;

 /** 1 big hero KPI shown prominently */
  heroKpi: {
    value: string;
    label: string;
    sublabel: string;
  };
  
  /** 4 supporting stats in the stat-tile row */
  stats: { value: string; label: string }[];
  
  /** Optional: 3 supporting metrics with icons */
  metrics: {
    icon: string;      // lucide icon name
    value: string;
    label: string;
    delta?: string;    // optional "+12%" indicator
    deltaUp?: boolean;
  }[];
  
  /** Optional: image paths for the product's unique visual sections */
  visuals?: {
    primary?: string;      // main visual for hero or overview
    secondary?: string;    // supporting visual (e.g., "before/after", "pipeline")
    tertiary?: string;     // optional third visual
  };
};




export const PRODUCTS: Product[] = [
  {
    slug: "revenue-os",
    name: "RevenueOS",
    tag: "Monetization",
    headline: "Maximize Customer LTV With AI-Powered Monetization",
    subheadline:
      "RevenueOS is AI-powered monetization intelligence that integrates seamlessly into your checkout, CRM, and customer vault.",
    tagline: "Zero risk, conversion rates up to 90%",
    heroImage: "/images/hero-revenueos.png",
    statPill: "90% conversions",
    announcement:
      "RevenueOS manages monetization from optimization through delivery",
    primaryCta: "Book a Demo",
    secondaryCta: "See The Difference",
    stats: [
      { value: "90%", label: "Conversion rate" },
      { value: "$5B+", label: "Processed annually" },
      { value: "0.9%", label: "Platform failure rate" },
      { value: "24/7", label: "Support available" },
    ],
    capabilities: [
      {
        title: "Predictive LTV Intelligence",
        body: "AI predicts customer lifetime value at first interaction, segmenting audiences for optimal monetization strategies.",
      },
      {
        title: "Autonomous Optimization",
        body: "Machine learning models continuously test and refine revenue strategies with zero manual intervention.",
      },
      {
        title: "Real-Time Adaptation",
        body: "Strategies adjust instantly based on customer behavior signals, market changes, and performance data.",
      },
      {
        title: "Churn Prevention AI",
        body: "Advanced ML predicts churn before it happens and deploys retention tactics precisely when they're most effective.",
      },
      {
        title: "LTV Performance Tracking",
        body: "Real-time dashboards show LTV metrics, cohort analysis, and AI optimization impact.",
      },
    ],
    processSteps: [
      { number: "01", title: "Detect", body: "RevenueOS intercepts the transaction at the optimal decision point." },
      { number: "02", title: "Evaluate", body: "AI scores the customer's LTV potential in real time." },
      { number: "03", title: "Optimize", body: "The optimal monetization path is selected and deployed automatically." },
      { number: "04", title: "Recover", body: "Post-transaction intelligence recovers lost revenue and reinforces retention." },
    ],

        heroKpi: {
        value: "90%",
        label: "Conversion rate",
        sublabel: "on optimized checkouts",
      },
      metrics: [
        { icon: "TrendingUp",   value: "+42%",  label: "Avg. LTV lift",        delta: "+42%", deltaUp: true },
        { icon: "Users",        value: "12M+",  label: "Customers optimized",  delta: "+8.7%", deltaUp: true },
        { icon: "DollarSign",   value: "$5B+",  label: "Processed annually",   delta: "+12.4%", deltaUp: true },
      ],
      visuals: {
        primary: "/images/revenue-os/dashboard-preview.png",
        secondary: "/images/revenue-os/cohort-chart.png",
      },
  },

  {
    slug: "decline-os",
    name: "DeclineOS",
    tag: "Recovery",
    headline: "Turn False Declines Into Revenue With AI-Payment Intelligence",
    subheadline:
      "DeclineOS intercepts the declines in real time and uses AI-payment retry routing and payment recovery automation to determine the best path forward.",
    tagline: "Up to 30%+ recovery with zero upfront costs",
    heroImage: "/images/hero-declineos.png",
    statPill: "97% approval rate",
    announcement:
      "Real Time Decline Recovery Excellence with Zero up front costs",
    primaryCta: "Book a Demo",
    secondaryCta: "See How It Works",
    stats: [
      { value: "30%+", label: "Recovery rate" },
      { value: "$0", label: "Upfront costs" },
      { value: "12–24h", label: "Approval time" },
      { value: "97%", label: "Approval rate" },
    ],
    capabilities: [
      {
        title: "Real-Time Interception",
        body: "Declines are intercepted and evaluated the moment they occur — not hours later.",
      },
      {
        title: "AI Retry Routing",
        body: "Machine learning determines the optimal retry path for each transaction.",
      },
      {
        title: "Recovery Automation",
        body: "End-to-end automation from detection through recovered revenue.",
      },
      {
        title: "Payment Intelligence",
        body: "Continuous learning improves recovery rates with every transaction.",
      },
      {
        title: "Zero Upfront Risk",
        body: "No setup costs. Pay only on recovered revenue.",
      },
    ],
    processSteps: [
      { number: "01", title: "Decline Detection", body: "Payment declines are captured in real time from your acquirer." },
      { number: "02", title: "AI Evaluation", body: "ML models score the likelihood of recovery and optimal routing." },
      { number: "03", title: "Smart Reprocessing", body: "Transactions are re-routed through the best-fitting processor." },
      { number: "04", title: "Recovered Revenue", body: "Successful recoveries are credited back to your account." },
    ],

        heroKpi: {
        value: "30%+",
        label: "Recovery rate",
        sublabel: "on false declines",
      },
      metrics: [
        { icon: "RotateCcw",    value: "1.2M",  label: "Declines recovered",   delta: "+24.3%", deltaUp: true },
        { icon: "Clock",        value: "0.4s",  label: "Avg. retry time",      delta: "-18%",   deltaUp: false },
        { icon: "DollarSign",   value: "$52K",  label: "Recovered this month", delta: "+15.2%", deltaUp: true },
      ],
      visuals: {
        primary: "/images/decline-os/decline-flow.png",
        secondary: "/images/decline-os/recovery-command.png",
      },
  },

  {
    slug: "acquire-os",
    name: "AcquireOS",
    tag: "Processing",
    headline: "Tier 1 High-Risk Processing Without Traditional Limitations",
    subheadline:
      "AcquireOS orchestrates high-risk merchants and trusted acquirers with infrastructure and relationships needed to scale merchant portfolios with confidence.",
    tagline: "50%+ revenue splits, 12–24 hour approvals, $0 startup costs",
    heroImage: "/images/hero-acquireos.png",
    statPill: "97% approval rate",
    announcement:
      "50%+ revenue splits, 12-24 hour approvals, and deep high-risk expertise",
    primaryCta: "Book a Demo",
    secondaryCta: "See How It Works",
    stats: [
      { value: "50%+", label: "Revenue splits" },
      { value: "12–24h", label: "Approval window" },
      { value: "$0", label: "Startup costs" },
      { value: "97%", label: "Approval rate" },
    ],
    capabilities: [
      {
        title: "High-Risk Merchant Processing",
        body: "Purpose-built for industries traditional processors won't serve.",
      },
      {
        title: "Merchant & Acquirer Orchestration",
        body: "Route merchants to the best-fit acquirer for their vertical and volume.",
      },
      {
        title: "Rapid Onboarding",
        body: "12–24 hour approval windows keep merchant pipelines moving fast.",
      },
      {
        title: "Deep Industry Expertise",
        body: "Relationships and infrastructure built over years in the high-risk space.",
      },
      {
        title: "Zero Startup Costs",
        body: "No setup fees. Pay only on processed volume.",
      },
    ],
    processSteps: [
      { number: "01", title: "Merchant Onboarded", body: "Merchant profile is created and pre-scored." },
      { number: "02", title: "XLTV Infrastructure", body: "AcquireOS routes through our optimized acquirer network." },
      { number: "03", title: "Acquirer Match", body: "Transactions flow to the best-fit acquirer for the merchant." },
      { number: "04", title: "Approved Transaction", body: "Approved and settled with revenue splits paid out." },
    ],

        heroKpi: {
        value: "97%",
        label: "Approval rate",
        sublabel: "across high-risk verticals",
      },
      metrics: [
        { icon: "Zap",          value: "12–24h", label: "Approval window",     delta: "-40%",   deltaUp: false },
        { icon: "Building2",    value: "340+",   label: "Acquirer network",    delta: "+15%",   deltaUp: true },
        { icon: "DollarSign",   value: "50%+",   label: "Revenue splits",      delta: "+5%",    deltaUp: true },
      ],
      visuals: {
        primary: "/images/acquire-os/pipeline.png",
        secondary: "/images/acquire-os/merchant-flow.png",
      },
  },

  {
    slug: "reward-os",
    name: "RewardOS",
    tag: "Acquisition",
    headline:
      "Boost User Acquisitions, Recurring Purchases, and Customer Referrals With Life-Changing Prize Pools",
    subheadline:
      "RewardOS outperforms traditional discounts with shared prize pools that give users a more compelling reason to engage with your campaigns.",
    tagline: "50%+ Conversion Uplift. Only Pay $2 per action.",
    heroImage: "/images/hero-rewardos.png",
    statPill: "$125,000 prize pool",
    announcement:
      "RewardOS gives businesses access to prize pools for 50%+ higher conversions.",
    primaryCta: "Book a Demo",
    secondaryCta: "See The Difference",
    stats: [
      { value: "50%+", label: "Conversion uplift" },
      { value: "$2", label: "Per action" },
      { value: "$125K", label: "Prize pools" },
      { value: "10×", label: "Larger rewards" },
    ],
    capabilities: [
      {
        title: "Shared Prize Pools",
        body: "Pool budgets with other brands to offer rewards that feel 10× bigger.",
      },
      {
        title: "Cross-Brand Rewards",
        body: "Big-brand reward experiences drive stronger engagement than discounts.",
      },
      {
        title: "Protect Your Margin",
        body: "Pay a flat $2 per qualified action — not a percentage of revenue.",
      },
      {
        title: "Fully Managed",
        body: "Legal permits, draw mechanics, and payouts — all handled by RewardOS.",
      },
      {
        title: "Action-Based Conversion",
        body: "Users complete a qualifying action to earn an entry — driving real engagement.",
      },
    ],
    processSteps: [
      { number: "01", title: "Choose a Brand", body: "Users pick a participating brand from the network." },
      { number: "02", title: "Complete an Action", body: "Watch, sign up, or purchase — whatever the campaign defines." },
      { number: "03", title: "Claim the Entry", body: "Their RewardOS entry is automatically credited." },
      { number: "04", title: "Win Big", body: "A shot at life-changing money, or redeem for up to $5." },
    ],

        heroKpi: {
        value: "50%+",
        label: "Conversion uplift",
        sublabel: "vs. traditional discounts",
      },
      metrics: [
        { icon: "Trophy",       value: "$125K",  label: "Avg. prize pool",     delta: "+35%",   deltaUp: true },
        { icon: "Users",        value: "2.4M",   label: "Entries claimed",     delta: "+52%",   deltaUp: true },
        { icon: "DollarSign",   value: "$2",     label: "Per action",          delta: "flat",   deltaUp: true },
      ],
      visuals: {
        primary: "/images/reward-os/prize-cards.png",
        secondary: "/images/reward-os/winner-collage.png",
      },
  },

  /* ── PayOS — Placeholder content, awaiting final copy from client ── */
  {
    slug: "pay-os",
    name: "PayOS",
    tag: "Payments",
    placeholder: true,
    headline: "Global Payments and Financial Infrastructure",
    subheadline:
      "PayOS provides the underlying payment rails and financial infrastructure that powers the XLTV ecosystem — enabling seamless cross-border transactions, multi-currency settlement, and unified financial operations.",
    tagline: "Built for scale, designed for global commerce",
    heroImage: "/images/hero-payos.png",
    statPill: "Global payments",
    announcement:
      "PayOS — Global payments and financial infrastructure for modern platforms",
    primaryCta: "Book a Demo",
    secondaryCta: "See How It Works",
    stats: [
      { value: "150+", label: "Countries" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Settlement" },
      { value: "$0", label: "Setup cost" },
    ],
    capabilities: [
      {
        title: "Global Payment Rails",
        body: "Connect to payment infrastructure across 150+ countries with a single integration.",
      },
      {
        title: "Multi-Currency Settlement",
        body: "Settle in the currencies your customers pay in — without conversion friction.",
      },
      {
        title: "Unified Financial Operations",
        body: "One platform for payments, payouts, and reconciliation across all XLTV products.",
      },
      {
        title: "Cross-Border Enablement",
        body: "Built-in compliance and infrastructure for international commerce.",
      },
      {
        title: "Real-Time Reconciliation",
        body: "Continuous settlement visibility across every transaction and currency.",
      },
    ],
    processSteps: [
      { number: "01", title: "Connect", body: "Integrate PayOS via a single API or SDK." },
      { number: "02", title: "Process", body: "Transactions are routed through optimized global rails." },
      { number: "03", title: "Settle", body: "Funds settle in your preferred currency on your schedule." },
      { number: "04", title: "Reconcile", body: "Real-time dashboards give unified visibility across payments." },
    ],

        heroKpi: {
        value: "150+",
        label: "Countries supported",
        sublabel: "with local settlement",
      },
      metrics: [
        { icon: "Globe2",       value: "99.9%",  label: "Platform uptime",     delta: "+0.2%",  deltaUp: true },
        { icon: "Clock",        value: "24/7",   label: "Settlement windows",  delta: "always", deltaUp: true },
        { icon: "DollarSign",   value: "$0",     label: "Setup cost",          delta: "free",   deltaUp: true },
      ],
      visuals: {
        primary: "/images/pay-os/global-rails.png",
        secondary: "/images/pay-os/settlement-map.png",
      },
  },
  
];

/* ── Helpers ── */

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);