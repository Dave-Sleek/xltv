import * as Icons from "lucide-react";
import type { Product } from "@/app/lib/products";

/* Assign an icon per index — cycles if fewer icons are defined */
const ICONS = [
  "Store",
  "Building2",
  "Zap",
  "ShieldCheck",
  "TrendingUp",
] as const;

export function IconCardsLayout({
  capabilities,
  productName,
}: {
  capabilities: Product["capabilities"];
  productName: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Platform capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What {productName} does
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 lg:text-base">
            Purpose-built infrastructure for high-risk merchants who need to scale without limits.
          </p>
        </div>

        {/* 3-column icon grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = (Icons as any)[ICONS[i % ICONS.length]] || Icons.Circle;
            return (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-900 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-gray-900">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {c.body}
                </p>

                <span className="mt-5 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}