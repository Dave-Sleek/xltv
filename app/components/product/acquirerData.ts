// components/product/acquirerData.ts

export type AcquirerMatch = {
  id: string;
  name: string;
  /** Overall match score 0–100 */
  score: number;
  /** Individual scoring factors 0–100 */
  factors: {
    risk: number;
    volume: number;
    vertical: number;
    geography: number;
  };
  /** What makes this acquirer the right fit */
  highlight: string;
  /** Cost indicator */
  cost: string;
  /** Approval time estimate */
  approvalTime: string;
};

export type MerchantProfile = {
  name: string;
  volume: string;
  vertical: string;
  riskLevel: "Low" | "Medium" | "High";
  geography: string;
};

export const SAMPLE_MERCHANTS: MerchantProfile[] = [
  {
    name: "Myco Platform",
    volume: "$4.2M/mo",
    vertical: "Streaming",
    riskLevel: "Low",
    geography: "US + EU",
  },
  {
    name: "Northwind App",
    volume: "$8.2M/mo",
    vertical: "Fintech",
    riskLevel: "Low",
    geography: "US",
  },
  {
    name: "Vertex Labs",
    volume: "$5.2M/mo",
    vertical: "Crypto",
    riskLevel: "High",
    geography: "Global",
  },
];

/** Acquirer matches per merchant */
export const ACQUIRER_MATCHES: Record<string, AcquirerMatch[]> = {
  "Myco Platform": [
    {
      id: "acq-a",
      name: "Acquirer A",
      score: 94,
      factors: { risk: 92, volume: 96, vertical: 91, geography: 96 },
      highlight: "Best for subscription streaming at scale",
      cost: "2.4% + $0.15",
      approvalTime: "12h",
    },
    {
      id: "acq-b",
      name: "Acquirer B",
      score: 88,
      factors: { risk: 90, volume: 86, vertical: 89, geography: 88 },
      highlight: "Strong EU coverage, lower volume cap",
      cost: "2.6% + $0.18",
      approvalTime: "14h",
    },
    {
      id: "acq-c",
      name: "Acquirer C",
      score: 76,
      factors: { risk: 84, volume: 72, vertical: 78, geography: 70 },
      highlight: "Good fallback, narrower vertical focus",
      cost: "2.9% + $0.20",
      approvalTime: "22h",
    },
  ],
  "Northwind App": [
    {
      id: "acq-a",
      name: "Acquirer A",
      score: 91,
      factors: { risk: 94, volume: 92, vertical: 90, geography: 88 },
      highlight: "Highest volume ceiling, best for fintech",
      cost: "2.1% + $0.12",
      approvalTime: "10h",
    },
    {
      id: "acq-d",
      name: "Acquirer D",
      score: 84,
      factors: { risk: 86, volume: 82, vertical: 88, geography: 80 },
      highlight: "Specializes in regulated fintech",
      cost: "2.5% + $0.14",
      approvalTime: "14h",
    },
    {
      id: "acq-b",
      name: "Acquirer B",
      score: 72,
      factors: { risk: 78, volume: 70, vertical: 74, geography: 68 },
      highlight: "Available backup",
      cost: "2.8% + $0.16",
      approvalTime: "18h",
    },
  ],
  "Vertex Labs": [
    {
      id: "acq-e",
      name: "Acquirer E",
      score: 89,
      factors: { risk: 88, volume: 86, vertical: 94, geography: 88 },
      highlight: "Only acquirer accepting crypto at $5M+",
      cost: "3.2% + $0.25",
      approvalTime: "18h",
    },
    {
      id: "acq-f",
      name: "Acquirer F",
      score: 81,
      factors: { risk: 84, volume: 78, vertical: 86, geography: 76 },
      highlight: "High-risk specialist, global reach",
      cost: "3.5% + $0.28",
      approvalTime: "24h",
    },
    {
      id: "acq-a",
      name: "Acquirer A",
      score: 62,
      factors: { risk: 58, volume: 80, vertical: 48, geography: 62 },
      highlight: "Risk appetite is limited for crypto",
      cost: "2.9% + $0.20",
      approvalTime: "Not recommended",
    },
  ],
};

export const FACTOR_LABELS = {
  risk: { label: "Risk profile", color: "text-blue-600", bg: "bg-blue-500" },
  volume: { label: "Volume capacity", color: "text-purple-600", bg: "bg-purple-500" },
  vertical: { label: "Vertical fit", color: "text-indigo-600", bg: "bg-indigo-500" },
  geography: { label: "Geography", color: "text-green-600", bg: "bg-green-500" },
} as const;