"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  XCircle,
  Activity,
  Info,
} from "lucide-react";

/* ── Mock data ─────────────────────────────────────────────── */

const TABS = ["Revenue", "Leads", "Sales", "Failed"] as const;
type Tab = (typeof TABS)[number];

const DATA: Record<
  Tab,
  { data: { name: string; value: number }[]; total: number; change: number }
> = {
  Revenue: {
    data: [
      { name: "Jan", value: 3200 },
      { name: "Feb", value: 4100 },
      { name: "Mar", value: 3800 },
      { name: "Apr", value: 5200 },
      { name: "May", value: 4900 },
      { name: "Jun", value: 6300 },
      { name: "Jul", value: 5800 },
      { name: "Aug", value: 7200 },
      { name: "Sep", value: 6900 },
      { name: "Oct", value: 8100 },
      { name: "Nov", value: 7800 },
      { name: "Dec", value: 9200 },
    ],
    total: 46105,
    change: 12.4,
  },
  Leads: {
    data: [
      { name: "Jan", value: 2200 },
      { name: "Feb", value: 2800 },
      { name: "Mar", value: 3100 },
      { name: "Apr", value: 3400 },
      { name: "May", value: 3200 },
      { name: "Jun", value: 4100 },
      { name: "Jul", value: 3900 },
      { name: "Aug", value: 4600 },
      { name: "Sep", value: 4300 },
      { name: "Oct", value: 5100 },
      { name: "Nov", value: 4800 },
      { name: "Dec", value: 5400 },
    ],
    total: 34847,
    change: 8.7,
  },
  Sales: {
    data: [
      { name: "Jan", value: 1800 },
      { name: "Feb", value: 2100 },
      { name: "Mar", value: 1900 },
      { name: "Apr", value: 2400 },
      { name: "May", value: 2600 },
      { name: "Jun", value: 2900 },
      { name: "Jul", value: 3100 },
      { name: "Aug", value: 3300 },
      { name: "Sep", value: 3600 },
      { name: "Oct", value: 3800 },
      { name: "Nov", value: 4100 },
      { name: "Dec", value: 4392 },
    ],
    total: 28392,
    change: 15.2,
  },
  Failed: {
    data: [
      { name: "Jan", value: 180 },
      { name: "Feb", value: 210 },
      { name: "Mar", value: 190 },
      { name: "Apr", value: 230 },
      { name: "May", value: 200 },
      { name: "Jun", value: 260 },
      { name: "Jul", value: 240 },
      { name: "Aug", value: 280 },
      { name: "Sep", value: 250 },
      { name: "Oct", value: 300 },
      { name: "Nov", value: 320 },
      { name: "Dec", value: 347 },
    ],
    total: 1247,
    change: -24.3,
  },
};

/* ── Component ────────────────────────────────────────────── */

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<Tab>("Revenue");
  const [liveLeadCount, setLiveLeadCount] = useState(34847);
  const [liveRevenue, setLiveRevenue] = useState(1247892);

  const current = DATA[activeTab];

  // Simulate live updates every 2 seconds
  useEffect(() => {
    const t = setInterval(() => {
      setLiveLeadCount((v) => v + Math.floor(Math.random() * 5) + 1);
      setLiveRevenue((v) => v + Math.floor(Math.random() * 900) + 100);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Live Dashboard
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-time performance, at a glance.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
            Track revenue, leads, sales, and recovery metrics in a single view —
            updated continuously as your business runs.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-gray-500 shadow-sm">
              dashboard.xltv.ai/overview
            </div>
            <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
              Beta
            </span>
          </div>

          {/* Top stat tiles */}
          <div className="grid grid-cols-2 gap-4 border-b border-gray-100 bg-white p-6 lg:grid-cols-4">
            <StatTile
              icon={DollarSign}
              label="AI Forecasted"
              value={formatCurrency(liveRevenue)}
              subLabel="Lifetime revenue"
              trend="+12.4%"
              trendUp
            />
            <StatTile
              icon={Users}
              label="Leads"
              value={liveLeadCount.toLocaleString()}
              subLabel="Authorization transactions"
              trend="+8.7%"
              trendUp
            />
            <StatTile
              icon={ShoppingCart}
              label="Sales"
              value="28,392"
              subLabel="Success trend"
              trend="+15.2%"
              trendUp
            />
            <StatTile
              icon={XCircle}
              label="Failed"
              value="1,247"
              subLabel="Decline trend"
              trend="-24.3%"
              trendUp={false}
            />
          </div>

          {/* Chart area */}
          <div className="grid gap-6 bg-white p-6 lg:grid-cols-[2fr_1fr]">
            {/* Main chart */}
            <div className="rounded-xl border border-gray-100 bg-white p-5">
              {/* Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-1 rounded-full bg-gray-100 p-1">
                  {TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                        activeTab === tab
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                  <Activity className="h-3 w-3" />
                  Live
                </div>
              </div>

              {/* Chart title */}
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  {activeTab === "Revenue" && "Your earnings over time"}
                  {activeTab === "Leads" && "Authorization transactions"}
                  {activeTab === "Sales" && "Success trend over time"}
                  {activeTab === "Failed" && "Decline trend over time"}
                </p>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {current.total.toLocaleString()}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      current.change >= 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {current.change >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(current.change)}%
                  </span>
                  <Info className="h-3 w-3 text-gray-400" />
                </div>
              </div>

              {/* Chart */}
              <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  {activeTab === "Revenue" || activeTab === "Failed" ? (
                    <LineChart data={current.data}>
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f3f4f6"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        width={36}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="url(#lineGrad)"
                        strokeWidth={2.5}
                        dot={{ r: 3, fill: "#4f46e5" }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  ) : (
                    <BarChart data={current.data}>
                      <defs>
                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f3f4f6"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        width={36}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                        cursor={{ fill: "#f3f4f6" }}
                      />
                      <Bar
                        dataKey="value"
                        fill="url(#barGrad)"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right column: mini stats + activity */}
            <div className="space-y-4">
              {/* Mini stat cards */}
              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="Badges Offered" value="85" />
                <MiniStat label="Brands" value="342" />
                <MiniStat label="Winners" value="1,249" />
                <MiniStat label="Rewards" value="7,300" />
              </div>

              {/* Recovery Command Center */}
              <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-indigo-50 to-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                    Recovery
                  </p>
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </div>
                <p className="mt-3 text-2xl font-bold text-gray-900">$52,847</p>
                <p className="text-xs text-gray-500">Recovered this month</p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-indigo-100">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-600" />
                </div>
                <p className="mt-2 text-[10px] text-gray-500">
                  68% of recovery target
                </p>
              </div>

              {/* Recent activity */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Recent Activity
                </p>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { dot: "bg-green-500", text: "Payment recovered · $1,240" },
                    { dot: "bg-blue-500", text: "New lead · Pearl Naturelle" },
                    { dot: "bg-purple-500", text: "Prize pool claim · $50K" },
                    { dot: "bg-amber-500", text: "Decline intercepted · $480" },
                  ].map((a, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                      <span className="text-xs text-gray-700">{a.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Illustrative data for demonstration only.
        </p>
      </div>
    </section>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function StatTile({
  icon: Icon,
  label,
  value,
  subLabel,
  trend,
  trendUp,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  subLabel: string;
  trend: string;
  trendUp: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <Icon className="h-3.5 w-3.5" />
          {label}
        </div>
        <span
          className={`flex items-center gap-1 text-[11px] font-semibold ${
            trendUp ? "text-green-600" : "text-red-500"
          }`}
        >
          {trendUp ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          {trend}
        </span>
      </div>
      <p className="mt-2 text-xl font-bold tracking-tight text-gray-900">
        {value}
      </p>
      <p className="text-[11px] text-gray-500">{subLabel}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-3">
      <p className="text-[10px] uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-base font-bold text-gray-900">{value}</p>
    </div>
  );
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}