// components/product/MerchantPipeline.tsx

"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Zap } from "lucide-react";
import { PIPELINE_DATA, PIPELINE_SUMMARY, type StageData } from "./pipelineData";

const ACCENTS = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   ring: "ring-blue-200",   dot: "bg-blue-500",   grad: "from-blue-500 to-blue-600" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-700",  ring: "ring-amber-200",  dot: "bg-amber-500",  grad: "from-amber-400 to-orange-500" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", ring: "ring-indigo-200", dot: "bg-indigo-500", grad: "from-indigo-500 to-purple-500" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  ring: "ring-green-200",  dot: "bg-green-500",  grad: "from-green-500 to-emerald-500" },
} as const;

export function MerchantPipeline() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Live merchant pipeline
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Merchant approval, in motion.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
            Watch applications move from submitted to live in 12–24 hours — with
            AI-driven acquirer matching at every stage.
          </p>
        </div>

        {/* ── Pipeline ── */}
        <div className="mt-14">
          {/* Desktop: 4 columns side by side */}
          <div className="hidden gap-4 lg:grid lg:grid-cols-4">
            {PIPELINE_DATA.map((stage, i) => (
              <PipelineColumn
                key={stage.id}
                stage={stage}
                index={i}
                isLast={i === PIPELINE_DATA.length - 1}
              />
            ))}
          </div>

          {/* Mobile: 2-column grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {PIPELINE_DATA.map((stage, i) => (
              <PipelineColumn
                key={stage.id}
                stage={stage}
                index={i}
                isLast={i === PIPELINE_DATA.length - 1}
              />
            ))}
          </div>
        </div>

        {/* ── Summary footer ── */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <SummaryStat
            icon={Clock}
            label="Avg. approval time"
            value={PIPELINE_SUMMARY.avgApproval}
            sublabel="Down from 4–6 weeks"
          />
          <SummaryStat
            icon={TrendingUp}
            label="Approval rate"
            value={PIPELINE_SUMMARY.approvalRate}
            sublabel="Across all verticals"
          />
          <SummaryStat
            icon={Zap}
            label="Avg. merchant volume"
            value={PIPELINE_SUMMARY.avgVolume}
            sublabel="Monthly processed"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Pipeline Column ── */

function PipelineColumn({
  stage,
  index,
  isLast,
}: {
  stage: StageData;
  index: number;
  isLast: boolean;
}) {
  const accent = ACCENTS[stage.accent];

  return (
    <div className="relative">
      {/* Arrow between columns — desktop only */}
      {!isLast && (
        <div className="pointer-events-none absolute -right-3 top-16 z-20 hidden items-center lg:flex">
          <motion.div
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
          >
            <svg
              className="h-3 w-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Column */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      >
        {/* Column header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${accent.bg} ring-1 ${accent.ring}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
            </span>
            <p
              className={`text-[11px] font-bold uppercase tracking-widest ${accent.text}`}
            >
              {stage.label}
            </p>
          </div>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-700">
            {stage.count}
          </span>
        </div>

        {/* Column body */}
        <div className="mt-3 flex-1 space-y-2.5">
          {stage.merchants.map((m, i) => (
            <MerchantCard key={m.id} merchant={m} accent={accent} index={i} />
          ))}

          

          {/* "More" indicator when count exceeds displayed */}
          {stage.count > stage.merchants.length && (
            <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 py-2 text-center">
              <p className="text-[10px] font-medium text-gray-500">
                +{stage.count - stage.merchants.length} more
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Merchant Card ── */

function MerchantCard({
  merchant,
  accent,
  index,
}: {
  merchant: (typeof PIPELINE_DATA)[number]["merchants"][number];
  accent: (typeof ACCENTS)[keyof typeof ACCENTS];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
      className="group rounded-lg border border-gray-100 bg-white p-3 transition hover:border-gray-200 hover:shadow-sm"
    >
      {/* Top row: name + volume */}
      <div className="flex items-start justify-between gap-2">
        <p className="truncate text-xs font-bold text-gray-900">
          {merchant.name}
        </p>
        <p className="flex-shrink-0 text-[10px] font-semibold text-gray-500">
          {merchant.volume}
        </p>
      </div>

      {/* Vertical tag */}
      <p className="mt-0.5 text-[10px] text-gray-400">{merchant.vertical}</p>

      {/* Detail line */}
      <p className="mt-2 truncate text-[10px] text-gray-600">
        {merchant.detail}
      </p>

      {/* Meta + time footer */}
      <div className="mt-2 flex items-center justify-between gap-2 border-t border-gray-50 pt-2">
        {merchant.meta ? (
          <span
            className={`truncate rounded-full px-1.5 py-0.5 text-[9px] font-bold ${
              merchant.risk === "low"
                ? "bg-green-50 text-green-700"
                : merchant.risk === "medium"
                ? "bg-amber-50 text-amber-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {merchant.meta}
          </span>
        ) : (
          <span />
        )}
        <p className="flex-shrink-0 text-[9px] text-gray-400">
          {merchant.timeAgo}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Summary Stat ── */

function SummaryStat({
  icon: Icon,
  label,
  value,
  sublabel,
}: {
  icon: any;
  label: string;
  value: string;
  sublabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
          {label}
        </p>
        <p className="mt-0.5 text-2xl font-bold tracking-tight text-gray-900">
          {value}
        </p>
        <p className="text-[11px] text-gray-500">{sublabel}</p>
      </div>
    </motion.div>
  );
}