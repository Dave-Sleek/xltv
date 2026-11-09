// components/product/RewardOsHero.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  UserPlus,
  ShoppingBag,
  Users,
} from "lucide-react";
import type { Product } from "@/app/lib/products";

/* ── Winner data ──────────────────────────────────────────── */

const WINNER_CARDS = [
  {
    id: "khan",
    img: "/winners/khan.jpg",
    name: "Khan N",
    quote: "Took my family on the trip of a lifetime",
    amount: "$4,000",
    statusLabel: "Placed Order",
    statusIcon: ShoppingBag,
  },
  {
    id: "ahmed",
    img: "/winners/ahmed.jpg",
    name: "Ahmed M",
    quote: "Paid off my debt and sons tuition",
    amount: "$50,000",
    statusLabel: "Signed Up",
    statusIcon: UserPlus,
  },
  {
    id: "sunny",
    img: "/winners/sunny.jpg",
    name: "Sunny L",
    quote: "Launched my own podcast",
    amount: "$800",
    statusLabel: "Referred a Friend",
    statusIcon: Users,
  },
];

/* ── Hero ─────────────────────────────────────────────────── */

export function RewardOsHero({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-purple-100">
      {/* Soft glow blob */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-purple-200/50 blur-[120px]" />

      {/* Reduced top padding even further (pt-4 / lg:pt-6) and tightened gaps */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-4 pb-14 lg:grid-cols-[1.05fr_1.1fr] lg:gap-8 lg:pt-6 lg:pb-16">
        
        {/* ── LEFT: Copy ── */}
        <div className="animate-fade-up">
          {/* Smaller headline across all breakpoints */}
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-[2.2rem] lg:text-[2.5rem]">
            {product.heroHeadlinePart1}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
              {product.heroHeadlinePart2}
            </span>{" "}
            {product.heroHeadlinePart3}
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600 lg:text-base">
            {product.heroSubheadline}
          </p>

          {/* Tagline */}
          <p className="mt-5 max-w-lg text-sm font-bold lg:text-base">
            <span className="text-blue-600">{product.heroTagline1}</span>{" "}
            <span className="text-purple-500">{product.heroTagline2}</span>
          </p>

          {/* Two big buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-black"
            >
              {product.heroPrimaryCta}
            </Link>
            <Link
              href="#savings"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-900 bg-white px-7 py-3.5 text-base font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white"
            >
              {product.heroSecondaryCta}
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Overlapping tilted cards ── */}
        <div className="relative mx-auto flex h-[480px] w-full max-w-[620px] items-center justify-center animate-fade-up lg:h-[540px]">
          {/* Card 1 — LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1/2 z-10 w-[220px] -translate-y-1/2 lg:w-[260px]"
          >
            <WinnerCard winner={WINNER_CARDS[0]} />
          </motion.div>

          {/* Card 2 — CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 z-30 w-[260px] -translate-x-1/2 -translate-y-1/2 lg:w-[300px]"
          >
            <WinnerCard winner={WINNER_CARDS[1]} highlight />
          </motion.div>

          {/* Card 3 — RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 12 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-1/2 z-10 w-[220px] -translate-y-1/2 lg:w-[260px]"
          >
            <WinnerCard winner={WINNER_CARDS[2]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Winner Card ──────────────────────────────────────────── */

function WinnerCard({
  winner,
  highlight = false,
}: {
  winner: (typeof WINNER_CARDS)[number];
  highlight?: boolean;
}) {
  const StatusIcon = winner.statusIcon;

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl ${
        highlight ? "ring-4 ring-white" : ""
      }`}
    >
      <Image
        src={winner.img}
        alt={winner.name}
        fill
        sizes="(max-width: 1024px) 60vw, 300px"
        className="object-cover"
        priority={highlight}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm">
        <StatusIcon className="h-3 w-3 text-blue-600" />
        {winner.statusLabel}
      </span>

      <div className="absolute inset-x-0 bottom-20 text-center">
        <p className="text-[10px] font-medium uppercase tracking-widest text-white/70">
          Rewarded
        </p>
        <p className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          {winner.amount}
        </p>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-lg">
        <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={winner.img}
            alt={winner.name}
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-gray-900">
            {winner.name}
          </p>
          <p className="truncate text-[11px] text-gray-500">
            &ldquo;{winner.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}