// components/product/ProductHero.tsx

import Link from "next/link";
import type { Product } from "@/app/lib/products";
import { ProductVisualization } from "@/app/products/ProductVisualization";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pt-6 pb-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-10 lg:pb-20">
        {/* Copy */}
        <div className="order-1 text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            {product.headline}
            <br/>
            <span className="text-[#3712d2]">{product.headlinetag}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-gray-600 lg:mx-0 lg:text-base">
            {product.subheadline}
          </p>

          <p className="mx-auto mt-5 max-w-md text-sm font-bold text-[#3712d2] lg:mx-0 lg:text-base">
            {product.tagline}
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-4">
            <Link
              href="/demo"
              className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-10 py-3.5 text-base font-semibold text-white transition hover:bg-black lg:w-auto lg:px-12"
            >
              {product.primaryCta}
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-gray-900 bg-white px-10 py-3.5 text-base font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white lg:w-auto lg:px-12"
            >
              {product.secondaryCta}
            </Link>
          </div>
        </div>

        {/* Client-supplied hero image */}
        <div className="order-2">
          <ProductVisualization
            slug={product.slug}
            src={product.heroImage}
            alt={`${product.name} visualization`}
          />
        </div>
      </div>
    </section>
  );
}