"use client";

import { motion } from "framer-motion";
import type { Product } from "@/app/lib/products";

export function VerticalTimelineLayout({
  steps,
  productName,
}: {
  steps: Product["processSteps"];
  productName: string;
}) {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {productName} in four steps
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
            From decline to recovered revenue — automatically.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600 lg:left-1/2 lg:-translate-x-1/2"
          />

          {/* Steps */}
          <div className="space-y-10 lg:space-y-16">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative flex items-start gap-6 pl-20 lg:pl-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } lg:items-center lg:gap-16`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "lg:text-right" : ""}`}>
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:max-w-md lg:inline-block">
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Step {s.number}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {s.body}
                      </p>
                    </div>
                  </div>

                  {/* Empty half (for desktop alternating) */}
                  <div className="hidden flex-1 lg:block" />

                  {/* Number node on the line */}
                  <span className="absolute left-8 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white ring-4 ring-white lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                    {i + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}