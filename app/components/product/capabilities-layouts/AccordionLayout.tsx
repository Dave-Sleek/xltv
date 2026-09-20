"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/app/lib/products";

export function AccordionLayout({
  capabilities,
  productName,
}: {
  capabilities: Product["capabilities"];
  productName: string;
}) {
  const [openId, setOpenId] = useState<number>(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start lg:gap-20">
          {/* Left: header */}
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              What {productName} does
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-600 lg:text-base">
              Everything you need to power global payments — explained one layer at a time.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {capabilities.map((c, i) => {
              const isOpen = openId === i;
              return (
                <div key={c.title}>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:bg-gray-50/50"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-semibold leading-snug text-gray-900 lg:text-lg">
                        {c.title}
                      </span>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors group-hover:border-gray-900 group-hover:text-gray-900"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-10 pr-12 text-sm leading-relaxed text-gray-600 lg:text-base">
                          {c.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}