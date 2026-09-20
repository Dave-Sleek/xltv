import type { Product } from "@/app/lib/products";

export function NumberedRowsLayout({
  capabilities,
  productName,
}: {
  capabilities: Product["capabilities"];
  productName: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Platform capabilities
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What {productName} does
          </h2>
        </div>

        <div className="mt-12 space-y-2">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="flex flex-col gap-4 border-b border-gray-100 py-8 lg:flex-row lg:items-start lg:gap-12"
            >
              <span className="text-sm font-bold text-gray-400 lg:w-24">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 lg:w-80">
                {c.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-gray-600">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}