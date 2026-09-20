"use client";

import { motion } from "framer-motion";
import { Globe2, Zap } from "lucide-react";
import type { GlobalReachData } from "../globalReachData";

/* Pre-computed dot positions for a stylized world map */
const DOTS = Array.from({ length: 120 }, (_, i) => {
  const row = Math.floor(i / 20);
  const col = i % 20;
  return {
    id: i,
    x: col * 5 + 2.5,
    y: row * 16.67 + 8,
    active: Math.random() > 0.4,
    delay: Math.random() * 2,
  };
});

export function GlobeLayout({ data }: { data: GlobalReachData }) {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 text-white lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
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

        {/* Dot map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-14 aspect-[5/2] w-full max-w-4xl"
        >
          {/* Dot grid */}
          <div className="absolute inset-0">
            {DOTS.map((dot) => (
              <div
                key={dot.id}
                className="absolute"
                style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
              >
                <span
                  className={`block h-1 w-1 rounded-full ${
                    dot.active ? "bg-blue-500" : "bg-gray-700"
                  }`}
                />
                {dot.active && (
                  <motion.span
                    animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: dot.delay,
                    }}
                    className="absolute inset-0 rounded-full bg-blue-400"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Center badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/40">
              <Globe2 className="h-9 w-9 text-white" />
              <motion.span
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-blue-400"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats as horizontal legend row */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 lg:grid-cols-4">
          {data.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                <Zap className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold tracking-tight text-white lg:text-2xl">
                  {s.value}
                </p>
                <p className="text-xs font-medium text-gray-400">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {data.highlight && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center text-sm font-semibold text-blue-300"
          >
            {data.highlight}
          </motion.p>
        )}
      </div>
    </section>
  );
}