// components/product/FlipCardGallery.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCw, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CAMPAIGNS, type Campaign } from "./campaigns";

/* ── Bento layout map ────────────────────────────────────── */
/* Each entry = how the card at that index occupies the grid  */
/* Layout: 6 columns × 4 rows on desktop                      */

type BentoSlot = {
  colSpan: number;   // 1..3 (of 6)
  rowSpan: number;   // 1..2 (of 4)
  featured?: boolean;
};

const BENTO_LAYOUT: BentoSlot[] = [
  { colSpan: 3, rowSpan: 2, featured: true }, // 1 — hero card (top-left)
  { colSpan: 3, rowSpan: 1 },                 // 2 — wide card (top-right)
  { colSpan: 1, rowSpan: 1 },                 // 3 — small
  { colSpan: 2, rowSpan: 1 },                 // 4 — medium
  { colSpan: 1, rowSpan: 2 },                 // 5 — tall card
  { colSpan: 2, rowSpan: 2 },                 // 6 — big card
  { colSpan: 3, rowSpan: 2 },                 // 7 — hero card (bottom)
  { colSpan: 1, rowSpan: 1 },                 // 8 — small
];

export function FlipCardGallery() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-900">
            Proven at scale
          </span>
          <span className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        {/* Split header */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            Reward like a global brand.
            <br className="hidden sm:block" /> Spend like a growing one.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 lg:text-base">
            A curated look at the campaigns driving meaningful action across
            the RewardOS network.
          </p>
        </div>

        {/* ── Bento panel ── */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-50 p-4 shadow-[0_2px_40px_rgba(0,0,0,0.04)] lg:p-6">
          {/* Subtle grid pattern behind */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* Panel header strip */}
          <div className="relative mb-4 flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                8 featured campaigns
              </span>
            </div>
            <span className="text-[10px] font-medium text-gray-400">
              Tap any card to flip
            </span>
          </div>

          {/* The bento grid itself */}
          {/* Mobile: 2 cols · Tablet: 4 cols · Desktop: 6 cols */}
          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 lg:gap-4 lg:auto-rows-[110px]">
            {CAMPAIGNS.slice(0, 8).map((c, i) => {
              const slot = BENTO_LAYOUT[i] || { colSpan: 1, rowSpan: 1 };
              return (
                <FlipCard
                  key={c.id}
                  campaign={c}
                  index={i}
                  slot={slot}
                  flipped={flipped.has(c.id)}
                  onToggle={() => toggle(c.id)}
                />
              );
            })}
          </div>
        </div>

        {/* Legal disclaimer */}
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-gray-400">
          Brands, trademarks and campaign examples are shown for information
          only. No affiliation or endorsement is implied unless stated.
        </p>
      </div>
    </section>
  );
}

/* ── Bento Flip Card ── */

function FlipCard({
  campaign,
  index,
  slot,
  flipped,
  onToggle,
}: {
  campaign: Campaign;
  index: number;
  slot: { colSpan: number; rowSpan: number; featured?: boolean };
  flipped: boolean;
  onToggle: () => void;
}) {
  // Responsive column spans: on mobile every card spans 1 col (of 2);
  // on tablet, clamp to 4-col grid; on desktop use the full 6-col map.
  const spanClasses = [
    // Mobile (grid-cols-2): default to 1 col, but featured spans 2
    slot.featured ? "col-span-2" : "col-span-1",
    // Tablet (grid-cols-4): featured spans 2, wide spans 2, else 1
    slot.colSpan >= 3 ? "sm:col-span-2" : slot.colSpan === 2 ? "sm:col-span-2" : "sm:col-span-1",
    // Desktop (grid-cols-6): exact colSpan
    slot.colSpan === 3 ? "lg:col-span-3" : slot.colSpan === 2 ? "lg:col-span-2" : "lg:col-span-1",
    // Row spans only apply on desktop (fixed row height)
    slot.rowSpan === 2 ? "lg:row-span-2" : "lg:row-span-1",
  ].join(" ");

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.35), duration: 0.45 }}
      onClick={onToggle}
      aria-pressed={flipped}
      className={`group relative min-h-[160px] w-full [perspective:1400px] focus:outline-none lg:min-h-0 ${spanClasses}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ── FRONT ── */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-sm [backface-visibility:hidden]">
          <Image
            src={campaign.image}
            alt={campaign.brand}
            fill
            sizes={
              slot.featured
                ? "(max-width: 1024px) 100vw, 33vw"
                : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />

          {/* Gradient overlay — stronger for featured */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              slot.featured
                ? "from-black/85 via-black/30 to-transparent"
                : "from-black/75 via-black/15 to-transparent"
            }`}
          />

          {/* Flip hint */}
          <div className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-all group-hover:scale-110">
            <RotateCw className="h-3 w-3 text-gray-900" />
          </div>

          {/* Category tag */}
          <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-gray-900 backdrop-blur-sm">
            {campaign.category}
          </span>

          {/* Featured badge for hero cards */}
          {slot.featured && (
            <span className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-full bg-amber-500 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-md">
              <Sparkles className="h-2.5 w-2.5" />
              Featured
            </span>
          )}

          {/* Bottom text — bigger for featured */}
          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="text-[8px] font-medium uppercase tracking-widest text-white/70">
              Campaign
            </p>
            <p
              className={`mt-0.5 font-bold text-white ${
                slot.featured ? "text-base lg:text-lg" : "text-xs"
              }`}
            >
              {campaign.brand}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 p-3 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] lg:p-4">
          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%),radial-gradient(circle_at_80%_70%,#fff_0,transparent_40%)]" />

          <div className="relative">
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/60">
              {campaign.brand}
            </p>
            <p
              className={`mt-2 font-bold leading-none tracking-tight ${
                slot.featured ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
              }`}
            >
              {campaign.stat}
            </p>
            <p
              className={`mt-1.5 font-semibold leading-tight text-white/95 ${
                slot.featured ? "text-sm" : "text-[11px]"
              }`}
            >
              {campaign.headline}
            </p>
          </div>

          {/* Body — only for larger cards */}
          {(slot.featured || slot.rowSpan === 2) && (
            <p className="relative line-clamp-3 text-[10px] leading-snug text-white/80">
              {campaign.body}
            </p>
          )}

          <div className="relative flex items-center justify-between border-t border-white/20 pt-2">
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/60">
              Tap to flip
            </span>
            <RotateCw className="h-2.5 w-2.5 text-white/60" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}