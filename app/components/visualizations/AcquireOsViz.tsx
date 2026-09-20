"use client";

import { motion } from "framer-motion";
import { Store, Check, ArrowRight, Building2 } from "lucide-react";

const STEPS = [
  {
    icon: Store,
    label: "Merchant",
    sublabel: "Onboarded",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    label: "XLTV",
    sublabel: "Infrastructure",
    color: "from-indigo-600 to-purple-700",
  },
  {
    icon: Building2,
    label: "Acquirer",
    sublabel: "Matched",
    color: "from-purple-700 to-pink-600",
  },
  {
    icon: Check,
    label: "Approved",
    sublabel: "Settled",
    color: "from-green-500 to-emerald-600",
  },
];

export function AcquireOsViz() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_65%)] blur-2xl"
      />

      <div className="flex h-full flex-col items-center justify-center gap-6">
        {/* Horizontal pipeline */}
        <div className="relative flex items-center gap-2 lg:gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-2 lg:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(99,102,241,0.4)",
                        "0 0 0 12px rgba(99,102,241,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg lg:h-16 lg:w-16`}
                  >
                    <Icon className="h-6 w-6 text-white lg:h-7 lg:w-7" />
                  </motion.div>
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-gray-900">
                      {step.label}
                    </p>
                    <p className="text-[9px] text-gray-500">{step.sublabel}</p>
                  </div>
                </motion.div>

                {/* Arrow between steps */}
                {i < STEPS.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="flex-shrink-0"
                  >
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transaction ticker */}
        <div className="mt-4 w-full max-w-md space-y-2">
          {[
            { id: "TXN-4821", merchant: "Pearl Retail", status: "Approved", amount: "$1,240" },
            { id: "TXN-4822", merchant: "Northwind App", status: "Processing", amount: "$890" },
            { id: "TXN-4823", merchant: "Myco Platform", status: "Approved", amount: "$2,150" },
          ].map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gray-400">
                  {tx.id}
                </span>
                <span className="text-[11px] font-medium text-gray-700">
                  {tx.merchant}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-gray-900">
                  {tx.amount}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                    tx.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-purple-500" />
        <span className="text-xs font-semibold text-gray-900">
          97% approval rate
        </span>
      </motion.div>
    </div>
  );
}