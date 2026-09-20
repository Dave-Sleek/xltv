// app/components/product/ProductFaq.tsx

import { FaqAccordion } from "@/app/components/ui/FaqAccordion";
import type { Product } from "@/app/lib/products";

export function ProductFaq({ product }: { product: Product }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.name} — Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12">
          <FaqAccordion
            items={[
              {
                question: `What does ${product.name} do?`,
                answer: product.subheadline,
              },
              {
                question: `How does ${product.name} integrate with my existing stack?`,
                answer:
                  "Integration is designed to be non-invasive. We connect with your existing checkout, CRM, and payment infrastructure — no rewrites required.",
              },
              {
                question: `How long does it take to see results?`,
                answer:
                  "Most merchants see measurable impact within the first 30 days. Full optimization typically stabilizes by day 60.",
              },
              {
                question: `What's the pricing model?`,
                answer: product.tagline,
              },
              {
                question: `Is my data secure?`,
                answer:
                  "Yes. All XLTV products are built with enterprise-grade security, encryption at rest and in transit, and full compliance with applicable data protection regulations.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}