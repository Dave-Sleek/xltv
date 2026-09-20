import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/app/lib/products";

export function ProductCta({ product }: { product: Product }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 text-white lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Ready to see {product.name} in action?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/85 lg:text-base">
              Book a demo and we&apos;ll walk through your specific use case.
            </p>
          </div>

          <Link
            href="/demo"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}