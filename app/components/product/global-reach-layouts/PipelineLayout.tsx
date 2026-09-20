"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { GlobalReachData } from "../globalReachData";

export function PipelineLayout({ data }: { data: GlobalReachData }) {
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

        {/* Horizontal pipeline */}
        <div className="relative mt-16">
          {/* Progress bar */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-white/10 lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            />
          </div>

          {/* Steps grid */}
          <div className="relative grid gap-6 lg:grid-cols-4">
            {data.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Node on the bar */}
                <div className="hidden justify-center lg:flex">
                  <span className="relative flex h-3 w-3">
                    <motion.span
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                      className="absolute inline-flex h-full w-full rounded-full bg-blue-400"
                    />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500 ring-4 ring-gray-950" />
                  </span>
                </div>

                {/* Stat card */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {s.label}
                  </p>
                  {s.sublabel && (
                    <p className="mt-0.5 text-xs text-gray-500">
                      {s.sublabel}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {data.highlight && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-3 text-sm font-semibold text-blue-300"
          >
            <ArrowRight className="h-4 w-4" />
            {data.highlight}
          </motion.div>
        )}
      </div>
    </section>
  );
}