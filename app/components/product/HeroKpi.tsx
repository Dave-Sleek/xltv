// components/product/HeroKpi.tsx

import { motion } from "framer-motion";
import type { Product } from "@/app/lib/products";

export function HeroKpi({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-10 inline-flex items-baseline gap-4 rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-white px-6 py-4 lg:mt-12"
    >
      <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-5xl">
        {product.heroKpi.value}
      </span>
      <div>
        <p className="text-sm font-semibold text-gray-900">
          {product.heroKpi.label}
        </p>
        <p className="text-xs text-gray-500">
          {product.heroKpi.sublabel}
        </p>
      </div>
    </motion.div>
  );
}