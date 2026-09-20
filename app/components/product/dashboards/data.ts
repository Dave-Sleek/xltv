// components/product/dashboards/data.ts

export type DashboardTab = {
  id: string;
  label: string;
  chartTitle: string;
  chartType: "line" | "bar";
  total: number;
  change: number;
  data: { name: string; value: number }[];
};

export type DashboardKpi = {
  icon: string;       // lucide icon name
  label: string;
  value: string;
  subLabel: string;
  trend: string;
  trendUp: boolean;
};

export type DashboardSideCard = {
  title: string;
  value: string;
  subLabel: string;
  progress?: number;  // 0–100
  accent: "indigo" | "blue" | "amber" | "green" | "purple";
};

export type DashboardActivity = {
  dot: "green" | "blue" | "purple" | "amber" | "red";
  text: string;
};

export type ProductDashboardData = {
  url: string;
  badge: string;
  kpis: DashboardKpi[];
  tabs: DashboardTab[];
  miniStats: { label: string; value: string }[];
  sideCard: DashboardSideCard;
  activity: DashboardActivity[];
};

/* ── Helper for generating 12 months ── */
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const mk = (vals: number[]) => vals.map((v, i) => ({ name: months[i], value: v }));

/* ──────────────────────────────────────────────────────────────── */

export const DASHBOARD_DATA: Record<string, ProductDashboardData> = {
  /* ── RevenueOS ── */
  "revenue-os": {
    url: "app.xltv.ai/revenueos/overview",
    badge: "Beta",
    kpis: [
      { icon: "DollarSign", label: "Forecasted LTV", value: "$1,247,892", subLabel: "Lifetime revenue",    trend: "+12.4%", trendUp: true },
      { icon: "Users",       label: "Customers",     value: "34,847",     subLabel: "In optimization",     trend: "+8.7%",  trendUp: true },
      { icon: "ShoppingCart",label: "Conversions",   value: "28,392",     subLabel: "This month",          trend: "+15.2%", trendUp: true },
      { icon: "XCircle",     label: "Churn Risk",    value: "1,247",      subLabel: "Flagged by AI",       trend: "-24.3%", trendUp: false },
    ],
    tabs: [
      { id: "revenue", label: "Revenue", chartType: "line", chartTitle: "LTV over time", total: 46105, change: 12.4, data: mk([3200,4100,3800,5200,4900,6300,5800,7200,6900,8100,7800,9200]) },
      { id: "cohorts", label: "Cohorts", chartType: "bar",  chartTitle: "Cohort distribution", total: 34847, change: 8.7, data: mk([2200,2800,3100,3400,3200,4100,3900,4600,4300,5100,4800,5400]) },
      { id: "uplift", label: "Uplift",   chartType: "line", chartTitle: "Conversion uplift", total: 28392, change: 15.2, data: mk([1800,2100,1900,2400,2600,2900,3100,3300,3600,3800,4100,4392]) },
      { id: "churn",  label: "Churn",    chartType: "line", chartTitle: "Churn trend", total: 1247, change: -24.3, data: mk([180,210,190,230,200,260,240,280,250,300,320,347]) },
    ],
    miniStats: [
      { label: "Cohorts",   value: "12" },
      { label: "Models",    value: "8" },
      { label: "Segments",  value: "34" },
      { label: "Optimized", value: "7,300" },
    ],
    sideCard: {
      title: "LTV Optimization",
      value: "$52,847",
      subLabel: "Optimized this month",
      progress: 68,
      accent: "indigo",
    },
    activity: [
      { dot: "green",  text: "Cohort uplift · +$1,240" },
      { dot: "blue",   text: "New segment · Pearl Naturelle" },
      { dot: "purple", text: "Model retrained · 12K records" },
      { dot: "amber",  text: "Churn prevented · 47 users" },
    ],
  },

  /* ── DeclineOS ── */
  "decline-os": {
    url: "app.xltv.ai/declineos/recovery",
    badge: "Live",
    kpis: [
      { icon: "RotateCcw",   label: "Recovered",    value: "$52,847", subLabel: "This month",       trend: "+24.3%", trendUp: true },
      { icon: "XCircle",     label: "Declines",     value: "1,247",   subLabel: "Total intercepted", trend: "-18.4%", trendUp: false },
      { icon: "CheckCircle2",label: "Recovered",    value: "374",     subLabel: "Successful retries",trend: "+15.2%", trendUp: true },
      { icon: "Clock",       label: "Avg. Retry",   value: "0.4s",    subLabel: "Speed to recover",  trend: "-18%",   trendUp: false },
    ],
    tabs: [
      { id: "recovered",  label: "Recovered",  chartType: "line", chartTitle: "Recovered revenue",   total: 52847, change: 24.3, data: mk([1800,2100,2400,2900,3100,3500,4100,4600,5100,5400,5800,6800]) },
      { id: "declines",   label: "Declines",   chartType: "bar",  chartTitle: "Decline volume",      total: 1247,  change: -18.4, data: mk([180,160,140,150,130,120,110,100,120,115,110,105]) },
      { id: "retry",      label: "Retries",    chartType: "bar",  chartTitle: "Retry success rate",  total: 374,   change: 15.2, data: mk([22,28,25,32,35,38,42,45,48,52,56,60]) },
      { id: "routing",    label: "Routing",    chartType: "line", chartTitle: "Route efficiency",    total: 96,    change: 3.2, data: mk([85,87,88,89,90,91,92,93,94,95,96,97]) },
    ],
    miniStats: [
      { label: "Processors", value: "14" },
      { label: "Routes",     value: "8" },
      { label: "Recovered",  value: "374" },
      { label: "Saved",      value: "$52K" },
    ],
    sideCard: {
      title: "Recovery Command",
      value: "$52,847",
      subLabel: "Recovered this month",
      progress: 68,
      accent: "green",
    },
    activity: [
      { dot: "green",  text: "Payment recovered · $1,240" },
      { dot: "blue",   text: "New route deployed · Stripe→Adyen" },
      { dot: "amber",  text: "Decline intercepted · $480" },
      { dot: "green",  text: "Retry succeeded · $890" },
    ],
  },

  /* ── AcquireOS ── */
  "acquire-os": {
    url: "app.xltv.ai/acquireos/merchants",
    badge: "Live",
    kpis: [
      { icon: "Store",      label: "Active Merchants", value: "340+",    subLabel: "In portfolio",  trend: "+15%",   trendUp: true },
      { icon: "CheckCircle2",label: "Approval Rate",  value: "97%",     subLabel: "Across verticals", trend: "+0.5%", trendUp: true },
      { icon: "Clock",      label: "Approval Time",   value: "14h",     subLabel: "Avg. onboarding",trend: "-22%",   trendUp: false },
      { icon: "DollarSign", label: "Volume",          value: "$8.4M",   subLabel: "This month",    trend: "+18.7%", trendUp: true },
    ],
    tabs: [
      { id: "volume",     label: "Volume",     chartType: "line", chartTitle: "Processed volume",  total: 8400000, change: 18.7, data: mk([4200,4600,5100,5500,5900,6300,6800,7200,7600,8000,8400,8900]) },
      { id: "merchants",  label: "Merchants",  chartType: "bar",  chartTitle: "New merchants",     total: 340,  change: 15, data: mk([18,22,25,28,30,32,28,35,38,32,34,40]) },
      { id: "approvals",  label: "Approvals",  chartType: "line", chartTitle: "Approval rate",     total: 97,   change: 0.5, data: mk([93,94,94,95,95,96,96,97,97,97,97,97]) },
      { id: "splits",     label: "Splits",     chartType: "bar",  chartTitle: "Revenue splits",    total: 50,   change: 5, data: mk([42,44,45,46,47,48,48,49,50,50,51,52]) },
    ],
    miniStats: [
      { label: "Acquirers", value: "22" },
      { label: "Verticals", value: "14" },
      { label: "Countries", value: "8" },
      { label: "Approved",  value: "327" },
    ],
    sideCard: {
      title: "Approval Pipeline",
      value: "18",
      subLabel: "Merchants in review",
      progress: 45,
      accent: "purple",
    },
    activity: [
      { dot: "green",  text: "Merchant approved · Pearl Retail" },
      { dot: "amber",  text: "Merchant in review · Myco Platform" },
      { dot: "green",  text: "Acquirer matched · Northwind App" },
      { dot: "blue",   text: "New application · Candy Co." },
    ],
  },

  /* ── RewardOS ── */
  "reward-os": {
    url: "app.xltv.ai/rewardos/campaigns",
    badge: "Live",
    kpis: [
      { icon: "Trophy",      label: "Prize Pool",      value: "$125,000", subLabel: "Current campaign",  trend: "+35%",  trendUp: true },
      { icon: "Users",       label: "Entries",         value: "2.4M",     subLabel: "Total claimed",     trend: "+52%",  trendUp: true },
      { icon: "Sparkles",    label: "Conversions",     value: "48,920",   subLabel: "This month",        trend: "+18.7%",trendUp: true },
      { icon: "DollarSign",  label: "Cost / Action",   value: "$2.00",    subLabel: "Flat rate",         trend: "flat",  trendUp: true },
    ],
    tabs: [
      { id: "pool",       label: "Prize Pool",   chartType: "line", chartTitle: "Pool growth",        total: 125000, change: 35, data: mk([42000,48000,52000,58000,64000,72000,78000,85000,92000,100000,112000,125000]) },
      { id: "entries",    label: "Entries",      chartType: "bar",  chartTitle: "Entries claimed",   total: 2400000, change: 52, data: mk([120,180,220,280,320,380,420,480,520,580,620,700]) },
      { id: "winners",    label: "Winners",      chartType: "bar",  chartTitle: "Winners this month",total: 1249, change: 12, data: mk([80,92,88,102,110,118,124,132,128,140,145,155]) },
      { id: "conversion", label: "Conversion",   chartType: "line", chartTitle: "Conversion uplift", total: 48920, change: 18.7, data: mk([28000,30000,31000,33000,35000,37000,39000,41000,43000,45000,47000,48920]) },
    ],
    miniStats: [
      { label: "Campaigns", value: "5" },
      { label: "Brands",    value: "12" },
      { label: "Winners",   value: "1,249" },
      { label: "Rewards",   value: "7,300" },
    ],
    sideCard: {
      title: "Next Grand Draw",
      value: "$100,416",
      subLabel: "Closes Oct 15, 2026",
      progress: 82,
      accent: "amber",
    },
    activity: [
      { dot: "purple", text: "Prize claimed · $50,000" },
      { dot: "green",  text: "New entry · Pearl Naturelle" },
      { dot: "green",  text: "Referral bonus · $800" },
      { dot: "amber",  text: "Prize pool increased · +$5K" },
    ],
  },

  /* ── PayOS ── */
  "pay-os": {
    url: "app.xltv.ai/payos/settlement",
    badge: "Live",
    kpis: [
      { icon: "Globe2",     label: "Countries",   value: "150+",   subLabel: "Supported markets",   trend: "+8",     trendUp: true },
      { icon: "ArrowLeftRight", label: "Volume",   value: "$12.4M", subLabel: "Processed this month",trend: "+22.4%", trendUp: true },
      { icon: "DollarSign", label: "Settled",      value: "$11.8M", subLabel: "In 24 hours",         trend: "+19.2%", trendUp: true },
      { icon: "Clock",      label: "Avg. Settlement", value: "0.8s", subLabel: "Cross-border speed",  trend: "-12%",   trendUp: false },
    ],
    tabs: [
      { id: "volume",     label: "Volume",     chartType: "line", chartTitle: "Global volume",     total: 12400000, change: 22.4, data: mk([6400,6800,7200,7600,8000,8600,9200,9800,10400,11000,11800,12400]) },
      { id: "routes",     label: "Routes",     chartType: "bar",  chartTitle: "Active corridors",  total: 42,       change: 12, data: mk([24,26,28,30,32,34,36,38,40,40,42,42]) },
      { id: "currencies", label: "Currencies", chartType: "bar",  chartTitle: "Settlement currencies", total: 38,   change: 15, data: mk([18,20,22,24,26,28,30,32,34,36,38,38]) },
      { id: "latency",    label: "Latency",    chartType: "line", chartTitle: "Avg. settlement time",  total: 0.8,  change: -12, data: mk([12,11,10,10,9,9,8,8,8,8,8,7]) },
    ],
    miniStats: [
      { label: "Corridors",  value: "42" },
      { label: "Currencies", value: "38" },
      { label: "Uptime",     value: "99.9%" },
      { label: "Banks",      value: "180+" },
    ],
    sideCard: {
      title: "Settlement Health",
      value: "99.9%",
      subLabel: "Uptime across all corridors",
      progress: 99,
      accent: "blue",
    },
    activity: [
      { dot: "blue",   text: "USD → EUR settled · $240K" },
      { dot: "purple", text: "NGN → USD settled · $1.2M" },
      { dot: "green",  text: "New corridor · JP → AU" },
      { dot: "blue",   text: "GBP → SGD settled · $890K" },
    ],
  },
};