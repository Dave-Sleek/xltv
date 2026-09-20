// components/product/AcquirerMatch.tsx

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import {
  SAMPLE_MERCHANTS,
  ACQUIRER_MATCHES,
  FACTOR_LABELS,
  type AcquirerMatch as AcquirerMatchType,
  type MerchantProfile,
} from "./acquirerData";

export function AcquirerMatch() {
  const [selectedMerchant, setSelectedMerchant] = useState<MerchantProfile>(
    SAMPLE_MERCHANTS[0]
  );

  const matches = useMemo(
    () => ACQUIRER_MATCHES[selectedMerchant.name] || [],
    [selectedMerchant]
  );

  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-700">
            <Sparkles className="h-3 w-3" />
            AI-driven routing
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Every merchant, matched to the right acquirer.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
            AcquireOS scores every merchant across risk, volume, vertical, and
            geography — then routes to the acquirer with the highest probability
            of approval.
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* ── LEFT: Merchant selector ── */}
          <div className="space-y-3">
            <p className="px-1 text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Select a merchant
            </p>

            {SAMPLE_MERCHANTS.map((merchant) => {
              const isActive = merchant.name === selectedMerchant.name;
              return (
                <button
                  key={merchant.name}
                  type="button"
                  onClick={() => setSelectedMerchant(merchant)}
                  className={`w-full rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-gray-900 bg-white shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold text-gray-900">
                      {merchant.name}
                    </p>
                    <span
                      className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold ${
                        merchant.riskLevel === "Low"
                          ? "bg-green-50 text-green-700"
                          : merchant.riskLevel === "Medium"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {merchant.riskLevel} risk
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-500">
                    <span>{merchant.volume}</span>
                    <span className="text-gray-300">·</span>
                    <span>{merchant.vertical}</span>
                  </div>
                  <p className="mt-1 text-[10px] text-gray-400">
                    {merchant.geography}
                  </p>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: Match results ── */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMerchant.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {/* Merchant header */}
                <div className="mb-4 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-black text-white">
                      {selectedMerchant.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedMerchant.name}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        {selectedMerchant.volume} · {selectedMerchant.vertical} ·{" "}
                        {selectedMerchant.geography}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-500">
                    <Sparkles className="h-3 w-3 text-blue-500" />
                    Scored {matches.length} acquirers in 140ms
                  </div>
                </div>

                {/* Match cards */}
                <div className="space-y-3">
                  {matches.map((match, i) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      rank={i}
                      isTop={i === 0}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Footer stat strip ── */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <FooterStat
            icon={TrendingUp}
            value="97%"
            label="Approval rate"
            sublabel="On top-matched acquirer"
          />
          <FooterStat
            icon={Sparkles}
            value="140ms"
            label="Scoring time"
            sublabel="Across 22 acquirers"
          />
          <FooterStat
            icon={CheckCircle2}
            value="22"
            label="Acquirer network"
            sublabel="With dynamic failover"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Match Card ── */

function MatchCard({
  match,
  rank,
  isTop,
}: {
  match: AcquirerMatchType;
  rank: number;
  isTop: boolean;
}) {
  const scoreColor =
    match.score >= 90
      ? { text: "text-green-600", bg: "bg-green-500", ring: "ring-green-100" }
      : match.score >= 75
      ? { text: "text-blue-600", bg: "bg-blue-500", ring: "ring-blue-100" }
      : match.score >= 60
      ? { text: "text-amber-600", bg: "bg-amber-500", ring: "ring-amber-100" }
      : { text: "text-red-500", bg: "bg-red-500", ring: "ring-red-100" };

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: rank * 0.08, duration: 0.4 }}
      className={`relative overflow-hidden rounded-2xl border bg-white p-5 transition hover:shadow-md ${
        isTop ? "border-gray-900 shadow-md" : "border-gray-200"
      }`}
    >
      {/* Top match badge */}
      {isTop && (
        <div className="absolute right-0 top-0">
          <div className="flex items-center gap-1 rounded-bl-xl bg-gray-900 px-3 py-1.5">
            <Sparkles className="h-3 w-3 text-amber-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
              Top match
            </span>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
        {/* Left: name + highlight */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-700">
              {String(rank + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900">{match.name}</p>
              <p className="mt-0.5 line-clamp-1 text-[11px] text-gray-500">
                {match.highlight}
              </p>
            </div>
          </div>

          {/* Factor breakdown */}
          <div className="mt-4 space-y-2">
            {(Object.keys(match.factors) as Array<
              keyof typeof match.factors
            >).map((factorKey) => {
              const factor = match.factors[factorKey];
              const meta = FACTOR_LABELS[factorKey];
              return (
                <div key={factorKey} className="flex items-center gap-3">
                  <p className="w-24 flex-shrink-0 text-[10px] font-medium text-gray-500 sm:w-32 sm:text-[11px]">
                    {meta.label}
                  </p>
                  <div className="flex-1">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${factor}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + rank * 0.08,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full ${meta.bg}`}
                      />
                    </div>
                  </div>
                  <p className="w-8 flex-shrink-0 text-right text-[11px] font-semibold text-gray-700">
                    {factor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: score + meta */}
        <div className="flex items-center gap-5 sm:flex-col sm:items-end sm:gap-3">
          {/* Big score */}
          <div className="flex flex-col items-end">
            <p className={`text-3xl font-bold tracking-tight ${scoreColor.text}`}>
              {match.score}
            </p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
              match score
            </p>
          </div>

          {/* Meta grid */}
          <div className="flex gap-3 text-right sm:flex-col sm:gap-1.5">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-widest text-gray-400">
                Cost
              </p>
              <p className="text-[11px] font-semibold text-gray-900">
                {match.cost}
              </p>
            </div>
            <div>
              <p className="text-[9px] font-medium uppercase tracking-widest text-gray-400">
                Approval
              </p>
              <p className="text-[11px] font-semibold text-gray-900">
                {match.approvalTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Footer Stat ── */

function FooterStat({
  icon: Icon,
  value,
  label,
  sublabel,
}: {
  icon: any;
  value: string;
  label: string;
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
        <p className="text-2xl font-bold tracking-tight text-gray-900">
          {value}
        </p>
        <p className="text-[11px] font-semibold text-gray-700">{label}</p>
        <p className="text-[10px] text-gray-500">{sublabel}</p>
      </div>
    </motion.div>
  );
}