import type { Product } from "@/app/lib/products";

export function SplitGridLayout({
  capabilities,
  productName,
}: {
  capabilities: Product["capabilities"];
  productName: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Platform capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What {productName} does
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-base">
            Every capability is designed to recover revenue you&apos;re already losing.
          </p>
        </div>

        {/* 2-column bordered grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-900 hover:shadow-lg lg:p-8"
            >
              {/* Number badge */}
              <span className="inline-flex h-7 items-center rounded-full bg-gray-100 px-3 text-[11px] font-bold tracking-wider text-gray-500 transition group-hover:bg-gray-900 group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {c.body}
              </p>

              {/* Subtle accent line */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}