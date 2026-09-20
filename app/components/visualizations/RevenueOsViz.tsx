"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NODES_LEFT = [
  "/images/nodes/n1.jpg",
  "/images/nodes/n2.jpg",
  "/images/nodes/n3.jpg",
  "/images/nodes/n4.jpg",
  "/images/nodes/n5.jpg",
];
const NODES_RIGHT = [
  "/images/nodes/n6.jpg",
  "/images/nodes/n7.jpg",
  "/images/nodes/n8.jpg",
  "/images/nodes/n9.jpg",
  "/images/nodes/n10.jpg",
];

export function RevenueOsViz() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_65%)] blur-2xl"
      />

      {/* Left + right node columns */}
      <div className="absolute inset-0 grid grid-cols-2 gap-16 lg:gap-24">
        {[NODES_LEFT, NODES_RIGHT].map((col, ci) => (
          <div key={ci} className="grid grid-rows-5 gap-3">
            {col.map((src, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + (ci * 5 + ri) * 0.06,
                  duration: 0.4,
                }}
                className="relative overflow-hidden rounded-xl border-2 border-blue-500/40 shadow-lg shadow-blue-500/10"
              >
                <Image
                  src={src}
                  alt=""
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                />
                {/* Pulsing connection dot */}
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: ri * 0.2,
                  }}
                  className={`absolute ${
                    ci === 0 ? "-right-1" : "-left-1"
                  } top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-blue-400`}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Center: Network + RevenueOS badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="h-72 w-72">
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Animated connector lines */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 160;
            const y = 200 + Math.sin(angle) * 160;
            return (
              <motion.line
                key={i}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="url(#revenueGrad)"
                strokeWidth="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.02 }}
              />
            );
          })}

          {/* Rotating dashed ring */}
          <motion.circle
            cx="200"
            cy="200"
            r="90"
            fill="none"
            stroke="url(#revenueGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />

          {/* Inner core */}
          <circle cx="200" cy="200" r="70" fill="#0a0a0a" />
        </svg>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute rounded-full border border-white/10 bg-black px-6 py-3 shadow-2xl"
        >
          <span className="text-lg font-semibold text-white">RevenueOS</span>
        </motion.div>
      </div>
    </div>
  );
}