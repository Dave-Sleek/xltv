// components/product/pipelineData.ts

export type PipelineStage = "submitted" | "review" | "approved" | "live";

export type MerchantApplication = {
  id: string;
  name: string;
  volume: string;
  vertical: string;
  /** Contextual detail per stage — different meaning for each column */
  detail: string;
  /** Optional: match score or approval time or acquirer */
  meta?: string;
  /** Optional: how long ago this entry was created */
  timeAgo: string;
  /** Optional: risk level */
  risk?: "low" | "medium" | "high";
};

export type StageData = {
  id: PipelineStage;
  label: string;
  count: number;
  accent: "blue" | "amber" | "indigo" | "green";
  merchants: MerchantApplication[];
};

export const PIPELINE_DATA: StageData[] = [
  {
    id: "submitted",
    label: "Submitted",
    count: 4,
    accent: "blue",
    merchants: [
      {
        id: "candy",
        name: "Candy Co.",
        volume: "$4.8M/mo",
        vertical: "Gaming",
        detail: "Application received",
        timeAgo: "2h ago",
      },
      {
        id: "lumen",
        name: "Lumen Digital",
        volume: "$1.9M/mo",
        vertical: "Coaching",
        detail: "Awaiting documents",
        timeAgo: "4h ago",
      },
      {
        id: "atlas",
        name: "Atlas Replica",
        volume: "$620K/mo",
        vertical: "Replica",
        detail: "Application received",
        timeAgo: "6h ago",
      },
    ],
  },
  {
    id: "review",
    label: "Review",
    count: 3,
    accent: "amber",
    merchants: [
      {
        id: "myco",
        name: "Myco Platform",
        volume: "$4.2M/mo",
        vertical: "Streaming",
        detail: "Risk analysis in progress",
        meta: "82% match",
        risk: "low",
        timeAgo: "12h in review",
      },
      {
        id: "orbit",
        name: "Orbit Wellness",
        volume: "$3.4M/mo",
        vertical: "Nutra",
        detail: "Compliance check",
        meta: "91% match",
        risk: "low",
        timeAgo: "8h in review",
      },
      {
        id: "vertigo",
        name: "Vertigo Travel",
        volume: "$2.6M/mo",
        vertical: "Travel",
        detail: "Manual review",
        meta: "68% match",
        risk: "medium",
        timeAgo: "18h in review",
      },
    ],
  },
  {
    id: "approved",
    label: "Approved",
    count: 2,
    accent: "indigo",
    merchants: [
      {
        id: "pearl",
        name: "Pearl Retail",
        volume: "$2.1M/mo",
        vertical: "Beauty",
        detail: "Approved in 14h",
        meta: "Acquirer A",
        timeAgo: "Approved 1h ago",
      },
      {
        id: "vertex",
        name: "Vertex Labs",
        volume: "$5.2M/mo",
        vertical: "Crypto",
        detail: "Approved in 22h",
        meta: "Acquirer B",
        timeAgo: "Approved 3h ago",
      },
    ],
  },
  {
    id: "live",
    label: "Live",
    count: 331,
    accent: "green",
    merchants: [
      {
        id: "northwind",
        name: "Northwind App",
        volume: "$8.2M/mo",
        vertical: "Fintech",
        detail: "Processing since Jan",
        meta: "Acquirer A",
        timeAgo: "Live · 3 months",
      },
      {
        id: "katalyst",
        name: "Katalyst Media",
        volume: "$3.9M/mo",
        vertical: "Subscription",
        detail: "Processing since Feb",
        meta: "Acquirer C",
        timeAgo: "Live · 2 months",
      },
    ],
  },
];

export const PIPELINE_SUMMARY = {
  avgApproval: "14h",
  approvalRate: "97%",
  avgVolume: "$4.2M",
};