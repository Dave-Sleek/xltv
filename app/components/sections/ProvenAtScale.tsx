"use client";

import { useState } from "react";
import Image from "next/image";

type Campaign = {
  id: string;
  brand: string;
  image: string;
  stat: string;
  headline: string;
  body: string;
};

const CAMPAIGNS: Campaign[] = [
  {
    id: "mcdonalds",
    brand: "McDonald's",
    image: "/images/campaigns/mcdonalds.jpg",
    stat: "2.2M",
    headline: "App orders driven",
    body: "Monopoly rewards boosted app installs across 14 markets.",
  },
  {
    id: "candy-crush",
    brand: "Candy Crush",
    image: "/images/campaigns/candy-crush.jpg",
    stat: "15M+",
    headline: "New players attracted",
    body: "Reward-pooled entries converted casual viewers into players.",
  },
  {
    id: "doritos",
    brand: "Doritos",
    image: "/images/campaigns/doritos.jpg",
    stat: "3.5M",
    headline: "Website visits",
    body: "UGC campaign funneled traffic to owned channels.",
  },
  {
    id: "pearl",
    brand: "Pearl Naturelle",
    image: "/images/campaigns/pearl.jpg",
    stat: "3.1×",
    headline: "Watch time",
    body: "DTC beauty grew engagement on long-form video.",
  },
  {
    id: "northwind",
    brand: "Northwind",
    image: "/images/campaigns/northwind.jpg",
    stat: "58%",
    headline: "Lower CAC",
    body: "Fintech scaled without discounting — protecting margin.",
  },
  {
    id: "lays",
    brand: "Lay's",
    image: "/images/campaigns/lays.jpg",
    stat: "8%",
    headline: "Sales increase",
    body: "Flavor sweepstakes lifted basket size and repeat purchases.",
  },
  {
    id: "kfc",
    brand: "KFC",
    image: "/images/campaigns/kfc.jpg",
    stat: "413M",
    headline: "Social impressions",
    body: "Shared pools amplified reach across TikTok and Instagram.",
  },
];

export function ProvenAtScale() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-900">Proven at scale</span>
          <span className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        {/* Split header */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[2.50rem]">
            Reward like a global brand. Spend like a growing one.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-gray-700 lg:pt-3 lg:text-lg">
            See how big brands drive meaningful action using big rewards.
          </p>
        </div>
      </div>

      {/* ─── Horizontal banner strip ─── */}
      <div className="mx-auto mt-12 max-w-[1400px] px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Row of 7 flippable slivers */}
          <div className="grid h-[320px] w-full grid-cols-4 lg:h-[460px] lg:grid-cols-7">
            {CAMPAIGNS.map((c) => (
              <FlipTile
                key={c.id}
                campaign={c}
                flipped={flippedId === c.id}
                onToggle={() =>
                  setFlippedId(flippedId === c.id ? null : c.id)
                }
              />
            ))}
          </div>

          {/* Dark gradient overlay (does NOT cover flipped tiles) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

          {/* Floating stat pills (top row) */}
          <div className="pointer-events-none absolute inset-x-0 top-5 hidden px-6 lg:block">
            <div className="flex justify-between gap-2">
              {[
                "McDonald's drove 2.2M app orders",
                "Candy Crush attracted 15M+ players",
                "Lay's increased sales by 8%",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-gray-900/80 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Overlay copy (bottom-left) — hidden when any card is flipped */}
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 transition-opacity duration-300 ${
              flippedId ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 pb-10 lg:pb-12">
              <h3 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Meaningful rewards drive real action.
              </h3>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/85 lg:text-base">
                Every campaign here is proof. XLTV lets brands combine their
                incentive budgets into one shared reward pool, so a growing brand
                can offer this calibre of prize at a fraction of the cost of
                routine discounting.
              </p>
            </div>
          </div>

          {/* Legal disclaimer (bottom-right) */}
          <p
            className={`pointer-events-none absolute bottom-4 right-6 hidden max-w-md text-right text-[10px] leading-snug text-white/60 transition-opacity duration-300 lg:block ${
              flippedId ? "opacity-0" : "opacity-100"
            }`}
          >
            Brands, trademarks and campaign examples are shown for information
            only. No affiliation or endorsement is implied unless stated.
          </p>
        </div>

        {/* Mobile hint */}
        <p className="mt-4 text-center text-xs text-gray-500 lg:hidden">
          Tap any campaign to see details
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── FlipTile ─────────────────────────── */

function FlipTile({
  campaign,
  flipped,
  onToggle,
}: {
  campaign: Campaign;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative h-full w-full [perspective:1400px] focus:outline-none"
      aria-pressed={flipped}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT — the image sliver */}
        <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
          <Image
            src={campaign.image}
            alt={campaign.brand}
            fill
            sizes="(max-width: 1024px) 25vw, 14vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* BACK — the campaign details */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-4 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
              {campaign.brand}
            </p>
            <p className="mt-3 text-3xl font-bold leading-none tracking-tight lg:text-4xl">
              {campaign.stat}
            </p>
            <p className="mt-1.5 text-xs font-semibold text-white/95 lg:text-sm">
              {campaign.headline}
            </p>
          </div>

          <p className="hidden text-[11px] leading-relaxed text-white/85 lg:block">
            {campaign.body}
          </p>

          <span className="self-start rounded-full border border-white/30 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/90">
            Close
          </span>
        </div>
      </div>
    </button>
  );
}