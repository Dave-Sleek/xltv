"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/app/lib/products";

export function HorizontalPipelineLayout({
  steps,
  productName,
}: {
  steps: Product["processSteps"];
  productName: string;
}) {
  return (
    <section id="how-it-works" className="bg-gray-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {productName} in four steps
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 lg:text-base">
            Every transaction moves through the same pipeline — fast, optimized, and automated.
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative mt-20">
          {/* Animated progress bar */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-white/10 lg:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            />

            {/* Traveling pulse dot */}
            <motion.span
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-lg shadow-blue-500"
            />
          </div>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Node dot on the bar (desktop) */}
                <div className="hidden justify-center lg:flex">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-500/40 bg-gray-950">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                      className="absolute inset-0 rounded-full border-2 border-blue-400"
                    />
                    <span className="relative text-lg font-bold text-blue-400">
                      {s.number}
                    </span>
                  </span>
                </div>

                {/* Mobile number */}
                <div className="mb-3 flex lg:hidden">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-sm font-bold text-blue-400">
                    {s.number}
                  </span>
                </div>

                {/* Card */}
                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="text-base font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}