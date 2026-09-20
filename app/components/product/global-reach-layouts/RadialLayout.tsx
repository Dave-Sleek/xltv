"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { GlobalReachData } from "../globalReachData";

export function RadialLayout({ data }: { data: GlobalReachData }) {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 text-white lg:py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Center header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {data.headline}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-400 lg:text-base">
            {data.body}
          </p>
        </div>

        {/* Radial visualization */}
        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
          {/* Pulsing center */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/40 lg:h-40 lg:w-40"
          >
            <div className="text-center">
              <p className="text-2xl font-bold tracking-tight lg:text-3xl">
                DeclineOS
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                Recovery Network
              </p>
            </div>
          </motion.div>

          {/* Pulsing rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400/50 lg:h-40 lg:w-40"
            />
          ))}

          {/* Connector lines + orbiting stats */}
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="radialLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {data.stats.map((_, i) => {
              const angle = (i / data.stats.length) * Math.PI * 2 - Math.PI / 2;
              const x = 200 + Math.cos(angle) * 150;
              const y = 200 + Math.sin(angle) * 150;
              return (
                <motion.line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke="url(#radialLine)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                />
              );
            })}
          </svg>

          {/* Orbiting stat cards */}
          {data.stats.map((stat, i) => {
            const angle = (i / data.stats.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 37.5;
            const y = 50 + Math.sin(angle) * 37.5;
            const Icon = stat.icon ? (Icons as any)[stat.icon] : null;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="absolute w-24 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-gray-900/90 p-3 text-center backdrop-blur-sm lg:w-28"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {Icon && (
                  <Icon className="mx-auto h-3.5 w-3.5 text-blue-400" />
                )}
                <p className="mt-1.5 text-lg font-bold tracking-tight text-white lg:text-xl">
                  {stat.value}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {data.highlight && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center text-sm font-semibold text-blue-300"
          >
            {data.highlight}
          </motion.p>
        )}
      </div>
    </section>
  );
}