// components/product/WinnerTicker.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import { WINNERS, FEATURED_WINNER } from "./winners";

export function WinnerTicker() {
  // Duplicate the list so the marquee loops seamlessly
  const doubled = [...WINNERS, ...WINNERS];

  return (
    <section className="relative overflow-hidden border-y border-gray-100 bg-white py-10 lg:py-12">
      {/* ── Featured winner ── */}
      <FeaturedCard />

      {/* ── Label row ── */}
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            Real winners · paid this month
          </p>
        </div>

        <Link
          href="#winners"
          className="hidden items-center gap-1 text-xs font-semibold text-gray-700 transition hover:text-gray-900 sm:inline-flex"
        >
          See all winners
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* ── Marquee track (full-bleed) ── */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent lg:w-32" />

        <div className="winner-ticker-track flex w-max animate-[winner-ticker_60s_linear_infinite] gap-4 pr-4">
          {doubled.map((w, i) => (
            <WinnerCard key={`${w.id}-${i}`} winner={w} />
          ))}
        </div>
      </div>

      {/* Mobile "See all" link */}
      <div className="mx-auto mt-6 flex max-w-7xl justify-center px-6 sm:hidden">
        <Link
          href="#winners"
          className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700"
        >
          See all winners
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </section>
  );
}

/* ── Featured winner card (driven by FEATURED_WINNER) ── */

function FeaturedCard() {
  const w = FEATURED_WINNER;

  return (
    <div className="mx-auto mb-10 max-w-7xl px-6">
      <div className="rounded-2xl bg-gradient-to-r from-amber-100 to-orange-50 p-6 lg:flex lg:items-center lg:justify-between lg:p-8">
        <div className="flex items-center gap-4">
          {/* Avatar or trophy fallback */}
          {w.avatar ? (
            <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-white lg:h-16 lg:w-16">
              <Image
                src={w.avatar}
                alt={w.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg lg:h-16 lg:w-16">
              <Trophy className="h-7 w-7 text-white lg:h-8 lg:w-8" />
            </div>
          )}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
              {w.eyebrow}
            </p>
            <p className="mt-1 text-xl font-bold text-gray-900 lg:text-2xl">
              {w.name} — {w.amount}
            </p>
            <p className="mt-0.5 text-sm italic text-gray-600">
              &ldquo;{w.quote}&rdquo;
            </p>
          </div>
        </div>

        <Link
          href={w.storyHref}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black lg:mt-0"
        >
          {w.ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* ── Marquee winner card ── */

function WinnerCard({ winner }: { winner: (typeof WINNERS)[number] }) {
  const tierStyles =
    {
      "Grand Prize": {
        bg: "bg-gradient-to-br from-amber-50 to-white",
        border: "border-amber-200",
        badge: "bg-amber-500 text-white",
        amountColor: "text-amber-600",
      },
      "Cash Prize": {
        bg: "bg-gradient-to-br from-blue-50 to-white",
        border: "border-blue-200",
        badge: "bg-blue-500 text-white",
        amountColor: "text-blue-600",
      },
      "Gift Card": {
        bg: "bg-gradient-to-br from-purple-50 to-white",
        border: "border-purple-200",
        badge: "bg-purple-500 text-white",
        amountColor: "text-purple-600",
      },
    }[winner.prize] || {
      bg: "bg-gradient-to-br from-gray-50 to-white",
      border: "border-gray-200",
      badge: "bg-gray-900 text-white",
      amountColor: "text-gray-900",
    };

  return (
    <div
      className={`flex w-[300px] flex-shrink-0 items-center gap-4 rounded-2xl border ${tierStyles.border} ${tierStyles.bg} px-4 py-4 shadow-sm transition hover:shadow-lg lg:w-[340px]`}
    >
      {winner.avatar && (
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 ring-2 ring-white lg:h-14 lg:w-14">
          <Image
            src={winner.avatar}
            alt={winner.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`text-xl font-bold tracking-tight ${tierStyles.amountColor} lg:text-2xl`}
          >
            {winner.amount}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${tierStyles.badge}`}
          >
            {winner.prize}
          </span>
        </div>

        <p className="mt-1 text-sm font-semibold text-gray-900">
          {winner.name}
        </p>

        <p className="mt-0.5 truncate text-xs italic text-gray-500">
          &ldquo;{winner.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}