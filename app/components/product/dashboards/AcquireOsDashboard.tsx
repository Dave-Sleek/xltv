"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  Building2,
  DollarSign,
  Clock,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Activity,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

/* ── Data ─────────────────────────────────────────────────── */

const VOLUME_DATA = [
  { month: "Jan", volume: 4.2 },
  { month: "Feb", volume: 4.8 },
  { month: "Mar", volume: 5.4 },
  { month: "Apr", volume: 5.1 },
  { month: "May", volume: 6.2 },
  { month: "Jun", volume: 6.8 },
  { month: "Jul", volume: 7.3 },
  { month: "Aug", volume: 7.1 },
  { month: "Sep", volume: 7.9 },
  { month: "Oct", volume: 8.4 },
  { month: "Nov", volume: 8.2 },
  { month: "Dec", volume: 8.9 },
];

const PIPELINE_STAGES = [
  { label: "Submitted", count: 4, color: "bg-blue-500", textColor: "text-blue-600" },
  { label: "In Review", count: 3, color: "bg-amber-500", textColor: "text-amber-600" },
  { label: "Approved", count: 2, color: "bg-indigo-500", textColor: "text-indigo-600" },
  { label: "Live", count: 331, color: "bg-green-500", textColor: "text-green-600" },
];

const TOP_ACQUIRERS = [
  { name: "Acquirer A", volume: "$42.8M", merchants: 128, growth: 12.4 },
  { name: "Acquirer B", volume: "$31.2M", merchants: 94, growth: 8.7 },
  { name: "Acquirer C", volume: "$22.1M", merchants: 68, growth: 15.2 },
  { name: "Acquirer D", volume: "$14.6M", merchants: 41, growth: -3.1 },
];

const RECENT_ONBOARDS = [
  { name: "Pearl Retail", vertical: "Beauty", status: "live" as const, time: "2h ago" },
  { name: "Northwind App", vertical: "Fintech", status: "live" as const, time: "6h ago" },
  { name: "Vertex Labs", vertical: "Crypto", status: "approved" as const, time: "1d ago" },
  { name: "Myco Platform", vertical: "Streaming", status: "review" as const, time: "1d ago" },
];

/* ── Component ─────────────────────────────────────────────── */

export function AcquireOsDashboard() {
  const [liveCount, setLiveCount] = useState(331);
  const [totalVolume, setTotalVolume] = useState(110.7);

  // Simulated live updates
  useEffect(() => {
    const t = setInterval(() => {
      setLiveCount((v) => v + Math.floor(Math.random() * 2));
      setTotalVolume((v) => v + Math.random() * 0.1);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
            Merchant portfolio
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-3xl lg:text-[2.75rem]">
            Every merchant,
            <br className="hidden sm:block" /> tracked end to end.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
            One view for merchant onboarding, acquirer routing, and volume — all
            updating in real time as your portfolio grows.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl lg:mt-14">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2.5 lg:px-4 lg:py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 lg:h-3 lg:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 lg:h-3 lg:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 lg:h-3 lg:w-3" />
            </div>
            <div className="ml-3 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[10px] text-gray-500 shadow-sm lg:ml-4 lg:px-3 lg:text-xs">
              app.xltv.ai/acquireos/portfolio
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-green-50 px-2 py-0.5 text-[9px] font-semibold text-green-700 lg:text-[10px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              Live
            </div>
          </div>

          {/* ── Top hero stats ── */}
          <div className="border-b border-gray-100 bg-white p-4 lg:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              <HeroStat
                icon={Store}
                label="Active merchants"
                value={liveCount.toString()}
                delta="+15% MoM"
                deltaUp
              />
              <HeroStat
                icon={DollarSign}
                label="Total volume"
                value={`$${totalVolume.toFixed(1)}M`}
                delta="+18.7% MoM"
                deltaUp
              />
              <HeroStat
                icon={Building2}
                label="Acquirers"
                value="22"
                delta="+3 added"
                deltaUp
              />
              <HeroStat
                icon={Clock}
                label="Avg. approval"
                value="14h"
                delta="-22% faster"
                deltaUp
              />
            </div>
          </div>

          {/* ── Main content: 3-column layout ── */}
          <div className="grid gap-4 bg-white p-4 lg:grid-cols-[240px_1fr_280px] lg:gap-6 lg:p-6">
            {/* ── LEFT RAIL: Pipeline stages ── */}
            <div className="rounded-xl border border-gray-100 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:text-xs">
                  Pipeline stages
                </p>
                <Activity className="h-3 w-3 text-gray-400" />
              </div>

              {/* Vertical funnel visualization */}
              <div className="mt-4 space-y-3">
                {PIPELINE_STAGES.map((stage, i) => {
                  const percent = Math.min(100, (stage.count / 340) * 100);
                  return (
                    <motion.div
                      key={stage.label}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-gray-700">
                          {stage.label}
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {stage.count}
                        </p>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percent}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + i * 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${stage.color}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Total indicator */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                  Total portfolio
                </p>
                <p className="text-lg font-bold text-gray-900">340</p>
              </div>
            </div>

            {/* ── CENTER: Volume chart ── */}
            <div className="rounded-xl border border-gray-100 bg-white p-4 lg:p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:text-xs">
                    Volume processed
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                      ${totalVolume.toFixed(1)}M
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-green-600 lg:text-xs">
                      <TrendingUp className="h-3 w-3" />
                      +18.7%
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {["1M", "3M", "1Y"].map((range) => (
                    <button
                      key={range}
                      className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                        range === "1Y"
                          ? "bg-gray-900 text-white"
                          : "text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area chart */}
              <div className="mt-5 h-40 lg:h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={VOLUME_DATA}>
                    <defs>
                      <linearGradient id="volumeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#f3f4f6"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: "#9ca3af" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: "#9ca3af" }}
                      tickFormatter={(v) => `$${v}M`}
                      width={40}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        fontSize: "11px",
                      }}
                      formatter={(value) => [`$${value}M`, "Volume"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#4f46e5"
                      strokeWidth={2.5}
                      fill="url(#volumeGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Bottom mini stats */}
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
                <MiniStat label="Avg ticket" value="$1,240" />
                <MiniStat label="Txns/day" value="84K" />
                <MiniStat label="Approval" value="97%" />
              </div>
            </div>

            {/* ── RIGHT RAIL: Top acquirers + recent onboards ── */}
            <div className="space-y-4">
              {/* Top acquirers */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:text-xs">
                    Top acquirers
                  </p>
                  <span className="text-[10px] text-gray-400">By volume</span>
                </div>

                <ul className="space-y-3">
                  {TOP_ACQUIRERS.map((a, i) => (
                    <motion.li
                      key={a.name}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-[10px] font-bold text-gray-700">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold text-gray-900">
                            {a.name}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            {a.merchants} merchants
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-gray-900">
                          {a.volume}
                        </p>
                        <p
                          className={`flex items-center justify-end gap-0.5 text-[9px] font-semibold ${
                            a.growth >= 0 ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {a.growth >= 0 ? (
                            <TrendingUp className="h-2.5 w-2.5" />
                          ) : (
                            <TrendingDown className="h-2.5 w-2.5" />
                          )}
                          {Math.abs(a.growth)}%
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Recent onboards */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:text-xs">
                  Recent onboards
                </p>

                <ul className="space-y-3">
                  {RECENT_ONBOARDS.map((m, i) => (
                    <motion.li
                      key={m.name}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          m.status === "live"
                            ? "bg-green-500"
                            : m.status === "approved"
                            ? "bg-indigo-500"
                            : "bg-amber-500"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-semibold text-gray-900">
                          {m.name}
                        </p>
                        <p className="text-[10px] text-gray-500">
                          {m.vertical} · {m.time}
                        </p>
                      </div>
                      {m.status === "live" && (
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                      )}
                    </motion.li>
                  ))}
                </ul>

                <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg bg-gray-50 py-2 text-[11px] font-semibold text-gray-700 transition hover:bg-gray-100">
                  View all
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-[10px] text-gray-500 sm:text-xs">
          Illustrative data for demonstration only.
        </p>
      </div>
    </section>
  );
}

/* ── Hero Stat ── */

function HeroStat({
  icon: Icon,
  label,
  value,
  delta,
  deltaUp,
}: {
  icon: any;
  label: string;
  value: string;
  delta: string;
  deltaUp: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-100 p-3.5 lg:p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-500 lg:gap-2 lg:text-xs">
          <Icon className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
          {label}
        </div>
        <span
          className={`flex items-center gap-0.5 text-[9px] font-semibold lg:gap-1 lg:text-[11px] ${
            deltaUp ? "text-green-600" : "text-red-500"
          }`}
        >
          {deltaUp ? (
            <TrendingUp className="h-2.5 w-2.5 lg:h-3 lg:w-3" />
          ) : (
            <TrendingDown className="h-2.5 w-2.5 lg:h-3 lg:w-3" />
          )}
          {delta}
        </span>
      </div>
      <p className="mt-2 text-lg font-bold tracking-tight text-gray-900 lg:text-xl">
        {value}
      </p>
    </div>
  );
}

/* ── Mini Stat ── */

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-wider text-gray-400 lg:text-[10px]">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-bold text-gray-900 lg:text-base">
        {value}
      </p>
    </div>
  );
}