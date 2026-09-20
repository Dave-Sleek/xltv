"use client";

import { motion } from "framer-motion";
import type { GlobalReachData } from "../globalReachData";

export function StatsGridLayout({ data }: { data: GlobalReachData }) {
  return (
    <section className="bg-gray-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              {data.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {data.headline}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 lg:text-base">
            {data.body}
          </p>
        </div>

        {/* 4-column stat grid */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 lg:grid-cols-4 lg:gap-8">
          {data.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="bg-gradient-to-br from-blue-400 to-indigo-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{s.label}</p>
              {s.sublabel && (
                <p className="mt-0.5 text-xs text-gray-500">{s.sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>

        {data.highlight && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/5 px-6 py-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            <p className="text-sm font-semibold text-blue-300">
              {data.highlight}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}