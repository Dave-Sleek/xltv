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

  // Live updates every 2.5s
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
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header — left aligned, editorial */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Real-time Data Analytics
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            Track every recovery
            <br />
            in real time.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
            Monitor your decline recovery performance live. See exactly how much
            revenue you&apos;re saving and optimize your recovery strategy with
            detailed insights.
          </p>
          {/* <div className="mt-6 h-0.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600" /> */}
        </div>

        {/* Dashboard */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-black tracking-tight text-gray-900">
                XLTV.ai
              </span>
              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                Recovery Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Last updated: just now
            </div>
          </div>

          {/* Main dashboard grid */}
          <div className="grid gap-6 p-6 lg:grid-cols-[240px_1fr_320px]">
            {/* ── LEFT RAIL: Summary column ── */}
            <div className="space-y-4">
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

            {/* ── CENTER: Recovery funnel ── */}
            <div className="space-y-4">
              {/* Big funnel card */}
              <div className="rounded-xl border border-gray-100 bg-white p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Recovery Flow
                  </p>
                  <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </span>
                </div>

                {/* Funnel visualization */}
                <div className="mt-6 flex items-center gap-3">
                  <FunnelStage
                    label="Declined"
                    value={declined.toLocaleString()}
                    color="from-red-400 to-red-500"
                    width="100%"
                  />
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  <FunnelStage
                    label="Offered"
                    value={Math.round(declined * 0.75).toLocaleString()}
                    color="from-amber-400 to-orange-500"
                    width="75%"
                  />
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  <FunnelStage
                    label="Recovered"
                    value={recovered.toLocaleString()}
                    color="from-blue-500 to-indigo-500"
                    width="52%"
                  />
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-300" />
                  <FunnelStage
                    label="Revenue"
                    value={`$${(revenue / 1000).toFixed(1)}K`}
                    color="from-green-500 to-emerald-500"
                    width="38%"
                  />
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="text-[11px] font-semibold text-gray-900">
                      Declined
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-semibold text-gray-900">
                      Recovered {recoveryRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Processor performance table */}
              <div className="rounded-xl border border-gray-100 bg-white p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
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
                      className="flex items-center gap-4"
                    >
                      <p className="w-24 text-xs font-medium text-gray-900">
                        {p.name}
                      </p>
                      <div className="flex-1">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
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
                      <p className="w-16 text-right text-xs font-bold text-gray-900">
                        {p.recovered} rec.
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT RAIL: Decline reasons ── */}
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-100 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Decline Reasons
                </p>

                {/* Donut chart */}
                <div className="mt-4 h-40">
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

                {/* Legend */}
                <ul className="mt-4 space-y-2.5">
                  {RECOVERY_REASONS.map((r) => (
                    <li
                      key={r.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: r.color }}
                        />
                        <span className="text-xs text-gray-700">
                          {r.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-gray-900">
                        {r.value}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Small tip card */}
              <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4">
                <div className="flex items-start gap-2">
                  <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Insufficient funds is your top recovery driver.
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-600">
                      Consider retrying these transactions on the 3rd and 7th of
                      the month when balances are typically restored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Illustrative data for demonstration only.
        </p>
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────────────────────── */

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
    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="flex items-center gap-2.5">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconBg}`}
        >
          <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
        </div>
        <p className="flex-1 text-xs font-medium text-gray-500">{label}</p>
        {live && (
          <span className="h-1.5 w-1.5 rounded-full bg-green-500">
            <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-green-400 opacity-75" />
          </span>
        )}
      </div>

      <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
        {value}
      </p>
      <p
        className={`mt-0.5 text-[11px] font-medium ${
          deltaUp ? "text-green-600" : "text-red-500"
        }`}
      >
        {delta}
      </p>
    </div>
  );
}

function FunnelStage({
  label,
  value,
  color,
  width,
}: {
  label: string;
  value: string;
  color: string;
  width: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <div
        className={`flex h-14 w-full items-center justify-center rounded-lg bg-gradient-to-br ${color} px-2 shadow-md`}
      >
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </p>
    </div>
  );
}