"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trophy, TrendingUp, Tag, Users, Play, Minus, Plus } from "lucide-react";

const ITEMS = [
  {
    id: "rewards",
    icon: Trophy,
    title: "10× larger rewards",
    body: "XLTV enables brands to come together to build large prize pools.",
  },
  {
    id: "conversions",
    icon: TrendingUp,
    title: "50% more conversions",
    body: "Bigger incentives outperform discounts — users engage more when there's a real shot at a life-changing reward.",
  },
  {
    id: "costs",
    icon: Tag,
    title: "80% lower incentive costs",
    body: "Pay a flat fee per qualified action instead of losing margin on every sale.",
  },
  {
    id: "everything",
    icon: Users,
    title: "XLTV handles EVERYTHING.",
    body: "Legal permits, draw mechanics, payouts, and compliance — all managed for you.",
  },
];

export function WhyXltv() {
  const [openId, setOpenId] = useState<string>("rewards");

  return (
    <section id="products" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-block border-b-2 border-gray-900 pb-1">
          <span className="text-sm font-semibold text-gray-900">Why XLTV</span>
        </div>

        {/* Header + CTA row */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.55rem]">
              Get bigger rewards without funding
              <br className="hidden sm:block" /> them alone.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
              Incentivise users with consistent opportunities to earn life-changing
              money using XLTV's shared reward pools.
            </p>
          </div>

          <Link
            href="#start"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
          >
            Start with XLTV
          </Link>
        </div>

        {/* Two-column content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Accordion */}
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {ITEMS.map(({ id, icon: Icon, title, body }) => {
              const isOpen = openId === id;
              return (
                <div key={id} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : id)}
                    className="flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white">
                      <Icon className="h-5 w-5 text-gray-700" strokeWidth={1.75} />
                    </span>
                    <span className="flex-1 text-base font-semibold text-gray-900">
                      {title}
                    </span>
                    {isOpen ? (
                      <Minus className="h-5 w-5 flex-shrink-0 text-gray-900" />
                    ) : (
                      <Plus className="h-5 w-5 flex-shrink-0 text-gray-900" />
                    )}
                  </button>

                  {/* Animated body */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pl-[3.75rem] pr-6 text-sm leading-relaxed text-gray-600">
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dark stat card + video */}
          <div className="overflow-hidden rounded-2xl bg-gray-950 lg:grid lg:grid-cols-2">
            {/* Left: Stats */}
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white lg:text-[1.75rem]">
                The model worked.
                <br />
                Winners got paid.
              </h3>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-4xl font-bold tracking-tight text-blue-500 lg:text-5xl">
                  $100K
                </p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  paid to 1,117 winners, including a $50K top prize
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-4xl font-bold tracking-tight text-blue-500 lg:text-5xl">
                  4×
                </p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  average conversion uplift for participating brands
                </p>
              </div>
            </div>

            {/* Right: Video thumbnail with play button */}
            <div className="relative aspect-[4/5] w-full lg:aspect-auto">
              <Image
                src="/images/founder-video.jpg"
                alt="XLTV founder testimonial"
                fill
                className="object-cover"
              />

              {/* Play button overlay */}
              <button
                type="button"
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl transition hover:scale-105"
              >
                <Play className="h-5 w-5 fill-gray-900 text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}