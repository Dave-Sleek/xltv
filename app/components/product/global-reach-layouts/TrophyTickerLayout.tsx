"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { GlobalReachData } from "../globalReachData";

export function TrophyTickerLayout({ data }: { data: GlobalReachData }) {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 text-white lg:py-24">
      {/* Confetti ambient */}
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_20%_30%,#f59e0b_0,transparent_20%),radial-gradient(circle_at_70%_60%,#8b5cf6_0,transparent_20%),radial-gradient(circle_at_40%_80%,#ec4899_0,transparent_20%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30"
          >
            <Icons.Trophy className="h-7 w-7 text-white" />
          </motion.div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-400">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {data.headline}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-400 lg:text-base">
            {data.body}
          </p>
        </div>

        {/* Stat cards in a celebratory row */}
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {data.stats.map((s, i) => {
            const Icon = s.icon ? (Icons as any)[s.icon] : Icons.Sparkles;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-gray-900 to-gray-900 p-5"
              >
                {/* Shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 2 + i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Live
                  </span>
                </div>

                <p className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {s.label}
                </p>
                {s.sublabel && (
                  <p className="mt-0.5 text-xs text-gray-500">
                    {s.sublabel}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {data.highlight && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 px-6 py-4"
          >
            <Icons.Sparkles className="h-4 w-4 text-amber-400" />
            <p className="text-sm font-semibold text-amber-300">
              {data.highlight}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}