"use client";

import { motion } from "framer-motion";
import { Globe2, Zap } from "lucide-react";

/* Grid of dots simulating a world map */
const DOTS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  active: Math.random() > 0.35,
  delay: Math.random() * 2,
}));

export function PayOsViz() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_65%)] blur-2xl"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-6">
        {/* ── Globe core ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-white/25"
            />
            <Globe2 className="h-14 w-14 text-white" strokeWidth={1.5} />

            {/* Pulse rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                }}
                className="absolute inset-0 rounded-full border-2 border-blue-400"
              />
            ))}
          </div>
        </motion.div>

        {/* ── Global rails (dot grid) ── */}
        <div className="grid grid-cols-15 gap-1.5 lg:gap-2" style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}>
          {DOTS.map((dot) => (
            <motion.div
              key={dot.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: dot.id * 0.008 }}
              className="relative h-1.5 w-1.5"
            >
              <span
                className={`block h-full w-full rounded-full ${
                  dot.active ? "bg-blue-500" : "bg-gray-200"
                }`}
              />
              {dot.active && (
                <motion.span
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: dot.delay,
                  }}
                  className="absolute inset-0 rounded-full bg-blue-400"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Transaction ticker ── */}
        <div className="mt-2 grid w-full max-w-md grid-cols-3 gap-2">
          {[
            { region: "US → EU", time: "0.4s" },
            { region: "UK → SG", time: "0.6s" },
            { region: "NG → US", time: "0.8s" },
          ].map((tx, i) => (
            <motion.div
              key={tx.region}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="rounded-lg border border-gray-100 bg-white p-2 text-center shadow-sm"
            >
              <div className="flex items-center justify-center gap-1">
                <Zap className="h-3 w-3 text-blue-500" />
                <p className="text-[10px] font-bold text-gray-900">
                  {tx.region}
                </p>
              </div>
              <p className="mt-0.5 text-[9px] text-gray-500">
                Settled in {tx.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-blue-500" />
        <span className="text-xs font-semibold text-gray-900">
          150+ countries
        </span>
      </motion.div>
    </div>
  );
}