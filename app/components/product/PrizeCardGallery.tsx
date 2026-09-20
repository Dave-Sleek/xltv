// components/product/PrizeCardGallery.tsx

import Image from "next/image";
import { Trophy } from "lucide-react";

const CARDS = [
  { amount: "$5,000",  label: "Cash Prize",  name: "Alex R.",  quote: "RewardOS is legit!" },
  { amount: "$50,000", label: "Grand Prize", name: "Michael T.", quote: "Incredible experience." },
  { amount: "$800",    label: "Gift Card",   name: "Sarah L.",  quote: "Just referred a friend and won!" },
];

export function PrizeCardGallery() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Real winners
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Life-changing prizes, every campaign.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-xl"
            >
              {/* Confetti background */}
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,#f59e0b_0,transparent_25%),radial-gradient(circle_at_80%_60%,#8b5cf6_0,transparent_25%),radial-gradient(circle_at_50%_80%,#ec4899_0,transparent_25%)]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                    Winner
                  </span>
                </div>

                <div className="text-center">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-white/60">
                    Won
                  </p>
                  <p className="mt-1 text-4xl font-bold tracking-tight">
                    {c.amount}
                  </p>
                  <p className="mt-1 text-xs text-blue-400">{c.label}</p>
                </div>

                <div className="rounded-xl bg-white p-3 text-gray-900">
                  <p className="text-xs font-bold">{c.name}</p>
                  <p className="mt-0.5 text-[11px] text-gray-500 italic">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}