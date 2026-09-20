"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

export function FaqAccordion({
  items,
  defaultOpen = 0,
  allowMultiple = false,
}: {
  items: FaqItem[];
  /** Index of the item open by default. Set to null to start all closed. */
  defaultOpen?: number | null;
  /** Allow multiple items open simultaneously */
  allowMultiple?: boolean;
}) {
  const [openItems, setOpenItems] = useState<number[]>(
    defaultOpen !== null ? [defaultOpen] : []
  );

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(index);
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
      }
      return isOpen ? [] : [index];
    });
  };

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:bg-gray-50/50"
            >
              <span className="text-base font-semibold leading-snug text-gray-900 lg:text-lg">
                {item.question}
              </span>

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
                    opacity: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 text-sm leading-relaxed text-gray-600 lg:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}