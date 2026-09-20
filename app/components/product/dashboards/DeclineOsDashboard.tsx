"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  RotateCcw,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Info,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/* ── Data ─────────────────────────────────────────────────── */

const RECOVERY_REASONS = [
  { name: "Insufficient Funds", value: 45, color: "#ef4444" },
  { name: "Do Not Honor",       value: 28, color: "#f59e0b" },
  { name: "Risk Suspicion",     value: 17, color: "#8b5cf6" },
  { name: "Other",              value: 10, color: "#3b82f6" },
];

const PROCESSORS = [
  { name: "Acquirer A", recovered: 89, color: "bg-blue-500" },
  { name: "Acquirer B", recovered: 72, color: "bg-indigo-500" },
  { name: "Acquirer C", recovered: 57, color: "bg-purple-500" },
];

/* ── Component ─────────────────────────────────────────────── */

export function DeclineOsDashboard() {
  const [declined, setDeclined] = useState(847);
  const [recovered, setRecovered] = useState(218);
  const [revenue, setRevenue] = useState(12847);

  useEffect(() => {
    const t = setInterval(() => {
      setDeclined((v) => v + Math.floor(Math.random() * 3));
      setRecovered((v) => v + Math.floor(Math.random() * 2));
      setRevenue((v) => v + Math.floor(Math.random() * 400) + 50);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const recoveryRate = ((recovered / declined) * 100).toFixed(1);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Real-time Data Analytics
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-3xl lg:text-[2.75rem]">
            Track every recovery
            <br className="hidden sm:block" /> in real time.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
            Monitor your decline recovery performance live. See exactly how much
            revenue you&apos;re saving and optimize your recovery strategy with
            detailed insights.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl lg:mt-14">
          {/* Header bar */}
          <div className="flex flex-col gap-2 border-b border-gray-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-base font-black tracking-tight text-gray-900 sm:text-lg">
                XLTV.ai
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 sm:px-2.5 sm:py-1 sm:text-[11px]">
                Recovery Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Last updated: just now
            </div>
          </div>

          {/* ── Main dashboard grid ── */}
          {/* Mobile: single column stack */}
          {/* Desktop (lg+): 3-column layout */}
          <div className="grid gap-4 p-4 sm:gap-5 sm:p-5 lg:grid-cols-[220px_1fr_280px] lg:gap-6 lg:p-6">
            {/* ── LEFT RAIL: Summary column ── */}
            {/* On mobile: horizontal scroll strip of 4 cards */}
            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-0 sm:pb-0 lg:flex lg:flex-col lg:space-y-3">
              <SummaryRow
                icon={AlertTriangle}
                iconBg="bg-red-50"
                iconColor="text-red-500"
                label="Declined today"
                value={declined.toLocaleString()}
                delta="+2.4% vs yesterday"
                deltaUp={false}
                live
              />
              <SummaryRow
                icon={RotateCcw}
                iconBg="bg-blue-50"
                iconColor="text-blue-600"
                label="Recovered"
                value={recovered.toLocaleString()}
                delta="+28.7% vs yesterday"
                deltaUp
              />
              <SummaryRow
                icon={DollarSign}
                iconBg="bg-green-50"
                iconColor="text-green-600"
                label="Revenue saved"
                value={`$${revenue.toLocaleString()}`}
                delta="+8.6% vs yesterday"
                deltaUp
              />
              <SummaryRow
                icon={TrendingUp}
                iconBg="bg-purple-50"
                iconColor="text-purple-600"
                label="Recovery rate"
                value={`${recoveryRate}%`}
                delta="+3.2% vs last week"
                deltaUp
              />
            </div>

            {/* ── CENTER: Recovery funnel + processors ── */}
            <div className="space-y-3 sm:space-y-4">
              {/* Funnel card */}
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 lg:p-6">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">
                    Recovery Flow
                  </p>
                  <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-semibold text-green-700 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </span>
                </div>

                {/* Funnel visualization */}
                {/* Mobile: 2×2 grid, no arrows */}
                {/* Desktop: horizontal row with arrows */}
                <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 lg:flex lg:items-center lg:gap-3">
                  <FunnelStage
                    label="Declined"
                    value={declined.toLocaleString()}
                    color="from-red-400 to-red-500"
                  />
                  <div className="hidden lg:flex lg:items-center">
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  </div>
                  <FunnelStage
                    label="Offered"
                    value={Math.round(declined * 0.75).toLocaleString()}
                    color="from-amber-400 to-orange-500"
                  />
                  <div className="hidden lg:flex lg:items-center">
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  </div>
                  <FunnelStage
                    label="Recovered"
                    value={recovered.toLocaleString()}
                    color="from-blue-500 to-indigo-500"
                  />
                  <div className="hidden lg:flex lg:items-center">
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  </div>
                  <FunnelStage
                    label="Revenue"
                    value={`$${(revenue / 1000).toFixed(1)}K`}
                    color="from-green-500 to-emerald-500"
                  />
                </div>

                {/* Legend */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-[10px] font-semibold text-gray-900 sm:text-[11px]">
                      Declined
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-semibold text-gray-900 sm:text-[11px]">
                      Recovered {recoveryRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Processors card */}
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">
                    Recovery by Processor
                  </p>
                  <span className="text-[10px] text-gray-400">Today</span>
                </div>

                <div className="space-y-3">
                  {PROCESSORS.map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <p className="w-20 text-[11px] font-medium text-gray-900 sm:w-24 sm:text-xs">
                        {p.name}
                      </p>
                      <div className="flex-1">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 sm:h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(p.recovered / 100) * 100}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.2 + i * 0.15,
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            className={`h-full rounded-full ${p.color}`}
                          />
                        </div>
                      </div>
                      <p className="w-14 text-right text-[11px] font-bold text-gray-900 sm:w-16 sm:text-xs">
                        {p.recovered} rec.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT RAIL: Decline reasons + tip ── */}
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 sm:text-xs">
                  Decline Reasons
                </p>

                {/* Layout: mobile = horizontal bar; desktop = donut */}
                <div className="mt-4 flex items-center gap-4 lg:block">
                  {/* Donut — hidden on mobile, shown on desktop */}
                  <div className="hidden h-40 lg:block">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={RECOVERY_REASONS}
                          dataKey="value"
                          nameKey="name"
                          innerRadius={45}
                          outerRadius={65}
                          paddingAngle={3}
                          stroke="none"
                        >
                          {RECOVERY_REASONS.map((entry, i) => (
                            <Cell key={i} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            fontSize: "12px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Compact colored bar — shown on mobile only */}
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-amber-500 to-blue-500 lg:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-bold text-gray-900">
                      45%
                    </div>
                  </div>

                  {/* Legend */}
                  <ul className="flex-1 space-y-2 sm:space-y-2.5 lg:mt-4 lg:flex-none">
                    {RECOVERY_REASONS.map((r) => (
                      <li
                        key={r.name}
                        className="flex items-center justify-between gap-2"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className="h-2 w-2 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: r.color }}
                          />
                          <span className="truncate text-[11px] text-gray-700 sm:text-xs">
                            {r.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-gray-900 sm:text-xs">
                          {r.value}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tip card */}
              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-3.5 sm:p-4">
                <div className="flex items-start gap-2">
                  <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900 sm:text-xs">
                      Insufficient funds is your top recovery driver.
                    </p>
                    <p className="mt-1 text-[10px] leading-relaxed text-gray-600 sm:text-[11px]">
                      Consider retrying these transactions on the 3rd and 7th of
                      the month when balances are typically restored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] text-gray-500 sm:text-xs">
          Illustrative data for demonstration only.
        </p>
      </div>
    </section>
  );
}

/* ── Summary Row ── */

function SummaryRow({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
  delta,
  deltaUp,
  live,
}: {
  icon: any;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  delta: string;
  deltaUp: boolean;
  live?: boolean;
}) {
  return (
    <div className="w-[200px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-3.5 sm:w-auto sm:p-4">
      <div className="flex items-center gap-2.5">
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-lg ${iconBg} sm:h-7 sm:w-7`}
        >
          <Icon className={`h-3 w-3 ${iconColor} sm:h-3.5 sm:w-3.5`} />
        </div>
        <p className="flex-1 truncate text-[11px] font-medium text-gray-500 sm:text-xs">
          {label}
        </p>
        {live && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
          </span>
        )}
      </div>

      <p className="mt-2.5 text-xl font-bold tracking-tight text-gray-900 sm:mt-3 sm:text-2xl">
        {value}
      </p>
      <p
        className={`mt-0.5 text-[10px] font-medium sm:text-[11px] ${
          deltaUp ? "text-green-600" : "text-red-500"
        }`}
      >
        {delta}
      </p>
    </div>
  );
}

/* ── Funnel Stage ── */

function FunnelStage({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div
        className={`flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-br ${color} px-2 shadow-md sm:h-14`}
      >
        <p className="text-xs font-bold text-white sm:text-sm">{value}</p>
      </div>
      <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-wider text-gray-500 sm:mt-2 sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}