// components/product/MetricGrid.tsx

import { TrendingUp, TrendingDown } from "lucide-react";
import * as Icons from "lucide-react";
import type { Product } from "@/app/lib/products";

export function MetricGrid({ metrics }: { metrics: Product["metrics"] }) {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((m, i) => {
            const Icon = (Icons as any)[m.icon] || Icons.Circle;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-900 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  {m.delta && (
                    <span
                      className={`flex items-center gap-1 text-xs font-semibold ${
                        m.deltaUp ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {m.deltaUp ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {m.delta}
                    </span>
                  )}
                </div>

                <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500">
                  {m.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}