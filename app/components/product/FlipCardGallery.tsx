// components/product/FlipCardGallery.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { RotateCw } from "lucide-react";
import { motion } from "framer-motion";
import { CAMPAIGNS, type Campaign } from "./campaigns";

export function FlipCardGallery() {
  // Track which cards are flipped (supports multiple open at once)
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
            Tap any campaign to see how brands drive meaningful action using
            shared prize pools.
          </p>
        </div>

        {/* Flip-card grid: 4 across on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAMPAIGNS.slice(0, 8).map((c, i) => (
            <FlipCard
              key={c.id}
              campaign={c}
              index={i}
              flipped={flipped.has(c.id)}
              onToggle={() => toggle(c.id)}
            />
          ))}
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

/* ── Flip Card ── */

function FlipCard({
  campaign,
  index,
  flipped,
  onToggle,
}: {
  campaign: Campaign;
  index: number;
  flipped: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      onClick={onToggle}
      aria-pressed={flipped}
      className="group relative aspect-[3/4] w-full [perspective:1400px] focus:outline-none"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ── FRONT ── */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          <Image
            src={campaign.image}
            alt={campaign.brand}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Flip hint in the corner */}
          <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 lg:opacity-70">
            <RotateCw className="h-3 w-3 text-gray-900" />
          </div>

          {/* Category tag */}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-gray-900 backdrop-blur-sm">
            {campaign.category}
          </span>

          {/* Brand + hint at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
              Campaign
            </p>
            <p className="mt-0.5 text-base font-bold text-white">
              {campaign.brand}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Subtle noise pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_30%),radial-gradient(circle_at_80%_70%,#fff_0,transparent_30%)]" />

          <div className="relative">
            {/* Brand line */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
              {campaign.brand}
            </p>

            {/* Big stat */}
            <p className="mt-4 text-4xl font-bold leading-none tracking-tight lg:text-5xl">
              {campaign.stat}
            </p>

            {/* Headline */}
            <p className="mt-2 text-sm font-semibold text-white/95">
              {campaign.headline}
            </p>
          </div>

          {/* Body */}
          <p className="relative text-[11px] leading-relaxed text-white/80">
            {campaign.body}
          </p>

          {/* Footer */}
          <div className="relative flex items-center justify-between border-t border-white/20 pt-3">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">
              Tap to flip back
            </span>
            <RotateCw className="h-3 w-3 text-white/60" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}