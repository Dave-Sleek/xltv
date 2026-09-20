"use client";

import { motion } from "framer-motion";
import { Trophy, Sparkles, Gift, CheckCircle2, DollarSign } from "lucide-react";

export function RewardOsViz() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.2),transparent_65%)] blur-2xl"
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-6">
        {/* ── Top: Action bubbles ── */}
        <div className="flex gap-3">
          {[
            { label: "Watch", color: "from-blue-500 to-indigo-500" },
            { label: "Sign up", color: "from-indigo-500 to-purple-500" },
            { label: "Refer", color: "from-purple-500 to-pink-500" },
          ].map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className={`rounded-full bg-gradient-to-r ${action.color} px-3 py-1.5 text-[11px] font-bold text-white shadow-md`}
            >
              {action.label}
            </motion.div>
          ))}
        </div>

        {/* ── Arrows down ── */}
        <div className="flex gap-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              className="h-5 w-px bg-gradient-to-b from-indigo-400 to-amber-400"
            />
          ))}
        </div>

        {/* ── Prize pool ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          {/* Radiating circles */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              className="absolute inset-0 rounded-full border border-amber-400/60"
            />
          ))}

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 shadow-2xl">
            <Trophy className="h-12 w-12 text-white" strokeWidth={1.75} />
          </div>
        </motion.div>

        {/* ── Reward notification ── */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="relative w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                You won
              </p>
              <p className="text-2xl font-bold tracking-tight text-gray-900">
                $50,000
              </p>
              <p className="text-[11px] text-gray-500">Grand Prize · Ahmed M.</p>
            </div>
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          </div>

          {/* Shimmer */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </motion.div>

        {/* ── Floating sparkles ── */}
        {[
          { x: -100, y: -80, delay: 0.2 },
          { x: 100, y: -60, delay: 0.6 },
          { x: -80, y: 60, delay: 1.0 },
          { x: 90, y: 40, delay: 1.4 },
        ].map((s, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -8, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: s.delay,
            }}
            className="pointer-events-none absolute"
            style={{
              left: `calc(50% + ${s.x}px)`,
              top: `calc(50% + ${s.y}px)`,
            }}
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
          </motion.div>
        ))}
      </div>

      {/* Stats pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-lg"
      >
        <DollarSign className="h-3.5 w-3.5 text-amber-500" />
        <span className="text-xs font-semibold text-gray-900">
          $125,000 prize pool
        </span>
      </motion.div>
    </div>
  );
}