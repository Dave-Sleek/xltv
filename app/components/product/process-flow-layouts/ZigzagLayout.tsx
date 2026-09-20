"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Product } from "@/app/lib/products";

export function ZigzagLayout({
  steps,
  productName,
}: {
  steps: Product["processSteps"];
  productName: string;
}) {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gray-950 py-20 text-white lg:py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Centered header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {productName} in four steps
          </h2>
        </div>

        {/* Zigzag */}
        <div className="relative mt-16 space-y-8 lg:space-y-12">
          {/* Central spine */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`grid gap-6 lg:grid-cols-2 lg:gap-16 ${
                  isLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Card */}
                <div className={isLeft ? "lg:text-right" : ""}>
                  <div className="inline-block w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:text-left">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                        {s.number}
                      </span>
                      <h3 className="text-base font-semibold text-white">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {s.body}
                    </p>
                  </div>
                </div>

                {/* Empty half */}
                <div className="hidden lg:block" />
              </motion.div>
            );
          })}

          {/* Arrow down at the end */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <ArrowDown className="h-4 w-4 text-blue-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}