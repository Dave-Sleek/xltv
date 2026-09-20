import type { Product } from "@/app/lib/products";

export function StatTiles({ stats }: { stats: Product["stats"] }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}