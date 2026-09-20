import type { Product } from "@/app/lib/products";

export function AlternatingLayout({
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
            Every capability exists to make user actions more rewarding — for you and for them.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="mt-16 space-y-4">
          {capabilities.map((c, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={c.title}
                className={`flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 lg:flex-row lg:items-center lg:gap-12 lg:p-8 ${
                  isLeft ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number ribbon */}
                <div className="flex flex-shrink-0 items-center gap-4 lg:w-72">
                  <span className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-5xl font-black tracking-tight text-transparent lg:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold leading-tight text-gray-900 lg:text-xl">
                    {c.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex-1 lg:border-l lg:border-gray-100 lg:pl-12">
                  <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                    {c.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}