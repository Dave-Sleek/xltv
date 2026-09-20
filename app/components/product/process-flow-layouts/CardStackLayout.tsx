"use client";

import { motion } from "framer-motion";
import type { Product } from "@/app/lib/products";

export function CardStackLayout({
  steps,
  productName,
}: {
  steps: Product["processSteps"];
  productName: string;
}) {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {productName} in four steps
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
            Every action gets rewarded. Every reward compounds engagement.
          </p>
        </div>

        {/* Card stack */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: (i - 1.5) * 2 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 0, y: -6, transition: { duration: 0.2 } }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-2xl">
                {/* Colored top bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                    [
                      "from-blue-500 to-indigo-500",
                      "from-indigo-500 to-purple-500",
                      "from-purple-500 to-pink-500",
                      "from-pink-500 to-amber-500",
                    ][i]
                  }`}
                />

                {/* Number badge */}
                <div
                  className={`mt-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${
                    [
                      "from-blue-500 to-indigo-500",
                      "from-indigo-500 to-purple-500",
                      "from-purple-500 to-pink-500",
                      "from-pink-500 to-amber-500",
                    ][i]
                  } shadow-lg`}
                >
                  <span className="text-lg font-bold text-white">
                    {s.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}