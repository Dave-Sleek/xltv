// components/product/GlobalReachMap.tsx

import Image from "next/image";
import { motion } from "framer-motion";

const ROUTES = [
  { id: "US-EU", from: { x: 22, y: 38 }, to: { x: 52, y: 30 } },
  { id: "EU-SG", from: { x: 52, y: 30 }, to: { x: 78, y: 62 } },
  { id: "NG-US", from: { x: 50, y: 55 }, to: { x: 22, y: 38 } },
  { id: "JP-AU", from: { x: 84, y: 42 }, to: { x: 88, y: 78 } },
];

export function GlobalReachMap() {
  return (
    <section className="bg-gray-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Global reach
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            150+ countries. One platform.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 aspect-[2/1] w-full max-w-4xl">
          <Image
            src="/images/pay-os/world-map.png"
            alt="Global payment network"
            fill
            className="object-contain opacity-40"
          />

          {/* Pulsing routes */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            <defs>
              <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            {ROUTES.map((r, i) => (
              <motion.path
                key={r.id}
                d={`M ${r.from.x} ${r.from.y} Q ${
                  (r.from.x + r.to.x) / 2
                } ${Math.min(r.from.y, r.to.y) - 8} ${r.to.x} ${r.to.y}`}
                fill="none"
                stroke="url(#routeGrad)"
                strokeWidth="0.3"
                strokeDasharray="0.8 0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
              />
            ))}

            {ROUTES.flatMap((r, i) => [
              <motion.circle
                key={`${r.id}-from`}
                cx={r.from.x}
                cy={r.from.y}
                r="0.6"
                fill="#3b82f6"
                animate={{ r: [0.6, 1, 0.6], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                
              />,
              <motion.circle
                key={`${r.id}-to`}
                cx={r.to.x}
                cy={r.to.y}
                r="0.6"
                fill="#8b5cf6"
                animate={{ r: [0.6, 1, 0.6], opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3 + 1,
                }}
              />,
            ])}
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-400">150+</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Countries
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">99.9%</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Uptime
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">24/7</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}