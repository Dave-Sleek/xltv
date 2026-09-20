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
  Activity,
  Info,
} from "lucide-react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { DASHBOARD_DATA } from "./dashboards/data";

const ACCENT = {
  indigo: { bg: "bg-indigo-50",   text: "text-indigo-600",   grad: "from-indigo-500 to-blue-600",   bar: "bg-indigo-100" },
  blue:   { bg: "bg-blue-50",     text: "text-blue-600",     grad: "from-blue-500 to-indigo-600",   bar: "bg-blue-100" },
  amber:  { bg: "bg-amber-50",    text: "text-amber-600",    grad: "from-amber-400 to-orange-500",  bar: "bg-amber-100" },
  green:  { bg: "bg-green-50",    text: "text-green-600",    grad: "from-green-500 to-emerald-600", bar: "bg-green-100" },
  purple: { bg: "bg-purple-50",   text: "text-purple-600",   grad: "from-purple-500 to-indigo-600", bar: "bg-purple-100" },
} as const;

export function ProductDashboard({ slug }: { slug: string }) {
  const data = DASHBOARD_DATA[slug];
  if (!data) return null;

  const [activeTab, setActiveTab] = useState(data.tabs[0].id);
  const [liveValue, setLiveValue] = useState(data.kpis[0].value);

  // Live update the first KPI value (simulated)
  useEffect(() => {
    const t = setInterval(() => {
      // Simulate small increments on the first KPI
      const match = data.kpis[0].value.match(/\$?([\d,]+)/);
      if (match) {
        const num = parseInt(match[1].replace(/,/g, ""), 10);
        const prefix = data.kpis[0].value.startsWith("$") ? "$" : "";
        setLiveValue(`${prefix}${(num + Math.floor(Math.random() * 500) + 100).toLocaleString()}`);
      }
    }, 2400);
    return () => clearInterval(t);
  }, [data]);

  const currentTab = data.tabs.find((t) => t.id === activeTab) || data.tabs[0];
  const accent = ACCENT[data.sideCard.accent];

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
            Track every metric that matters in a single view — updated continuously as your business runs.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="ml-4 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-gray-500 shadow-sm">
              {data.url}
            </div>
            <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
              {data.badge}
            </span>
          </div>

          {/* KPI tiles */}
          <div className="grid grid-cols-2 gap-4 border-b border-gray-100 bg-white p-6 lg:grid-cols-4">
            {data.kpis.map((kpi, i) => {
              const Icon = (Icons as any)[kpi.icon] || Icons.Circle;
              const value = i === 0 ? liveValue : kpi.value;
              return (
                <div key={kpi.label} className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <Icon className="h-3.5 w-3.5" />
                      {kpi.label}
                    </div>
                    <span
                      className={`flex items-center gap-1 text-[11px] font-semibold ${
                        kpi.trendUp ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {kpi.trendUp ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {kpi.trend}
                    </span>
                  </div>
                  <p className="mt-2 text-xl font-bold tracking-tight text-gray-900">
                    {value}
                  </p>
                  <p className="text-[11px] text-gray-500">{kpi.subLabel}</p>
                </div>
              );
            })}
          </div>

          {/* Chart + side column */}
          <div className="grid gap-6 bg-white p-6 lg:grid-cols-[2fr_1fr]">
            {/* Chart */}
            <div className="rounded-xl border border-gray-100 bg-white p-5">
              {/* Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1 rounded-full bg-gray-100 p-1">
                  {data.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                        activeTab === tab.id
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {tab.label}
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
                  {currentTab.chartTitle}
                </p>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {currentTab.total.toLocaleString()}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-semibold ${
                      currentTab.change >= 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {currentTab.change >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {Math.abs(currentTab.change)}%
                  </span>
                  <Info className="h-3 w-3 text-gray-400" />
                </div>
              </div>

              {/* Chart */}
              <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  {currentTab.chartType === "line" ? (
                    <LineChart data={currentTab.data}>
                      <defs>
                        <linearGradient id={`line-${slug}`} x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#9ca3af" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#9ca3af" }} width={40} />
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
                        stroke={`url(#line-${slug})`}
                        strokeWidth={2.5}
                        dot={{ r: 3, fill: "#4f46e5" }}
                        activeDot={{ r: 5 }}
                      />
                    </LineChart>
                  ) : (
                    <BarChart data={currentTab.data}>
                      <defs>
                        <linearGradient id={`bar-${slug}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#9ca3af" }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#9ca3af" }} width={40} />
                      <Tooltip
                        contentStyle={{
                          background: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                        cursor={{ fill: "#f3f4f6" }}
                      />
                      <Bar dataKey="value" fill={`url(#bar-${slug})`} radius={[4, 4, 0, 0]} />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            {/* Side column */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {data.miniStats.map((m) => (
                  <div key={m.label} className="rounded-lg border border-gray-100 bg-white p-3">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">{m.label}</p>
                    <p className="mt-1 text-base font-bold text-gray-900">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Side card */}
              <div className={`rounded-xl border border-gray-100 bg-gradient-to-br ${accent.bg} to-white p-4`}>
                <div className="flex items-center justify-between">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${accent.text}`}>
                    {data.sideCard.title}
                  </p>
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </div>
                <p className="mt-3 text-2xl font-bold text-gray-900">{data.sideCard.value}</p>
                <p className="text-xs text-gray-500">{data.sideCard.subLabel}</p>
                {data.sideCard.progress !== undefined && (
                  <>
                    <div className={`mt-3 h-1 w-full overflow-hidden rounded-full ${accent.bar}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${data.sideCard.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${accent.grad}`}
                      />
                    </div>
                    <p className="mt-2 text-[10px] text-gray-500">
                      {data.sideCard.progress}% complete
                    </p>
                  </>
                )}
              </div>

              {/* Activity */}
              <div className="rounded-xl border border-gray-100 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Recent Activity
                </p>
                <ul className="mt-3 space-y-2.5">
                  {data.activity.map((a, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          {
                            green: "bg-green-500",
                            blue: "bg-blue-500",
                            purple: "bg-purple-500",
                            amber: "bg-amber-500",
                            red: "bg-red-500",
                          }[a.dot]
                        }`}
                      />
                      <span className="text-xs text-gray-700">{a.text}</span>
                    </li>
                  ))}
                </ul>
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