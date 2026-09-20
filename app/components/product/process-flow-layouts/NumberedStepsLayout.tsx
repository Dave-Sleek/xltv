import type { Product } from "@/app/lib/products";

export function NumberedStepsLayout({
  steps,
  productName,
}: {
  steps: Product["processSteps"];
  productName: string;
}) {
  return (
    <section
      id="how-it-works"
      className="bg-gray-950 py-20 text-white lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {productName} in four steps
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.number} className="border-t border-white/10 pt-6">
              <p className="text-3xl font-bold text-blue-400">{s.number}</p>
              <h3 className="mt-4 text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}