"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────── */

type Slide = {
  id: string;
  category: string;
  brand: string;
  brandSub: string;
  brandLogo: string;
  badge: string;
  metric: string;
  metricLabel: string;
  headline: string;
  body: string;
  quote: string;
  attribution: string;
  chartTitle: string;
  bars: { label: string; value: number; display: string; color: string }[];
};

/* ── Data: 2 slides per category = 6 total ──────────────────── */

const SLIDES: Slide[] = [
  /* ── ACQUISITION (2 slides) ── */
  {
    id: "acq-1",
    category: "Acquisition",
    brand: "Myco",
    brandSub: "Video streaming platform",
    brandLogo: "/logos/myco.svg",
    badge: "2.3x watch time",
    metric: "2.7x",
    metricLabel: "uplift in sign-ups",
    headline: "XLTV helped Myco launch a new market",
    body: "Myco used XLTV to scale user acquisition in a brand-new market. They wanted users to sign up and watch content. By using our reward pool, they hit 200K registrations and 37 minute watch time vs a 75K and 16 minute baseline.",
    quote: "XLTV was the catalyst that turned our launch from promising to phenomenal.",
    attribution: "Director, Myco",
    chartTitle: "User Registration Growth",
    bars: [
      { label: "Before", value: 37, display: "75K", color: "#d1d5db" },
      { label: "With XLTV", value: 100, display: "200K", color: "#10b981" },
    ],
  },
  {
    id: "acq-2",
    category: "Acquisition",
    brand: "Northwind",
    brandSub: "Fintech app",
    brandLogo: "/logos/northwind.svg",
    badge: "58% lower CAC",
    metric: "3.2x",
    metricLabel: "app installs",
    headline: "Northwind cut CAC by more than half",
    body: "By pooling their incentive budget with other fintech brands, Northwind ran a shared reward campaign that drove 3.2x more installs while dropping cost-per-acquisition by 58%.",
    quote: "We finally have an acquisition channel that doesn't eat our margin.",
    attribution: "VP Growth, Northwind",
    chartTitle: "App Installs",
    bars: [
      { label: "Before", value: 31, display: "42K", color: "#d1d5db" },
      { label: "With XLTV", value: 100, display: "134K", color: "#10b981" },
    ],
  },

  /* ── ENGAGEMENT (2 slides) ── */
  {
    id: "eng-1",
    category: "Engagement",
    brand: "Pearl Naturelle",
    brandSub: "DTC beauty brand",
    brandLogo: "/logos/pearl.svg",
    badge: "3.1x watch time",
    metric: "47min",
    metricLabel: "avg session length",
    headline: "Pearl Naturelle tripled average session time",
    body: "Pearl Naturelle used XLTV to reward viewers for completing video content. Average session length went from 15 to 47 minutes, and content completion rates doubled.",
    quote: "Our content finally gets watched the way it was designed to be.",
    attribution: "Head of Content, Pearl",
    chartTitle: "Avg. Session Length",
    bars: [
      { label: "Before", value: 32, display: "15min", color: "#d1d5db" },
      { label: "With XLTV", value: 100, display: "47min", color: "#10b981" },
    ],
  },
  {
    id: "eng-2",
    category: "Engagement",
    brand: "Candy Crush",
    brandSub: "Mobile game",
    brandLogo: "/logos/candy.svg",
    badge: "15M+ players",
    metric: "2.8x",
    metricLabel: "daily active users",
    headline: "Candy Crush doubled its daily active base",
    body: "Reward-pooled entry campaigns turned casual viewers into daily players. DAU grew 2.8x within 6 weeks while churn dropped by 22%.",
    quote: "The entries gave players a reason to come back every single day.",
    attribution: "Live Ops Lead",
    chartTitle: "Daily Active Users",
    bars: [
      { label: "Before", value: 36, display: "5.4M", color: "#d1d5db" },
      { label: "With XLTV", value: 100, display: "15M", color: "#10b981" },
    ],
  },

  /* ── RETENTION (2 slides) ── */
  {
    id: "ret-1",
    category: "Retention",
    brand: "Lay's",
    brandSub: "Snacks & CPG",
    brandLogo: "/logos/lays.svg",
    badge: "8% sales lift",
    metric: "2.4x",
    metricLabel: "repeat purchase rate",
    headline: "Lay's made buyers come back for more",
    body: "A flavor sweepstakes layered into Lay's packaging lifted repeat purchase rate 2.4x. Customers came back to unlock additional entries with each purchase.",
    quote: "One campaign turned a one-time buyer into a repeat customer.",
    attribution: "Brand Director, Lay's",
    chartTitle: "Repeat Purchase Rate",
    bars: [
      { label: "Before", value: 42, display: "12%", color: "#d1d5db" },
      { label: "With XLTV", value: 100, display: "29%", color: "#10b981" },
    ],
  },
  {
    id: "ret-2",
    category: "Retention",
    brand: "Myco",
    brandSub: "Video streaming platform",
    brandLogo: "/logos/myco.svg",
    badge: "41% churn drop",
    metric: "2.1x",
    metricLabel: "90-day retention",
    headline: "Myco cut 90-day churn by 41%",
    body: "With periodic reward draws, Myco kept subscribers engaged long past the trial window. 90-day retention climbed from 34% to 71% — nearly double.",
    quote: "The draw gave people a reason to stay subscribed.",
    attribution: "CEO, Myco",
    chartTitle: "90-Day Retention",
    bars: [
      { label: "Before", value: 48, display: "34%", color: "#d1d5db" },
      { label: "With XLTV", value: 100, display: "71%", color: "#10b981" },
    ],
  },
];

const CATEGORIES = ["Acquisition", "Engagement", "Retention"] as const;

/* ── Main component ─────────────────────────────────────────── */

export function CaseStudy() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Acquisition");
  const [slideIndex, setSlideIndex] = useState(0);

  // Slides for the current category
  const categorySlides = useMemo(
    () => SLIDES.filter((s) => s.category === category),
    [category]
  );

  // Reset slide index when category changes
  useEffect(() => {
    setSlideIndex(0);
  }, [category]);

  const slide = categorySlides[slideIndex];
  const totalSlides = categorySlides.length;

  const next = () =>
    setSlideIndex((i) => (i + 1) % totalSlides);
  const prev = () =>
    setSlideIndex((i) => (i - 1 + totalSlides) % totalSlides);

  return (
    <section id="case" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-900">
            Proof from real campaigns.
          </span>
          <span className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        {/* Header + tabs row */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[3rem]">
              How Myco almost tripled sign-ups
              <br className="hidden sm:block" /> in a brand-new market.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-600 lg:text-base">
              XLTV helped Myco grow registrations from 75K to 200K and more
              than double watch time.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-shrink-0 gap-1 rounded-full bg-gray-100 p-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Slide card ─── */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid overflow-hidden rounded-3xl border border-gray-200 lg:grid-cols-[0.9fr_1.3fr]"
            >
              {/* LEFT: Gradient brand panel */}
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-emerald-100 p-8 lg:p-10">
                {/* Brand logo + sub */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-2xl font-black tracking-tight text-gray-900">
                      {slide.brand}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      {slide.brandSub}
                    </p>
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-900 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    {slide.badge}
                  </span>
                </div>

                {/* Inner white chart card */}
                <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg shadow-blue-900/5">
                  <p className="text-sm font-semibold text-gray-900">
                    {slide.chartTitle}
                  </p>

                  {/* Animated bars */}
                  <BarChart bars={slide.bars} />
                </div>
              </div>

              {/* RIGHT: Dark content panel */}
              <div className="relative overflow-hidden bg-[#0f1620] p-8 text-white lg:p-12">
                {/* Category badge top-right */}
                <div className="flex justify-end">
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {slide.category}
                  </span>
                </div>

                {/* Big metric */}
                <div className="mt-6 flex flex-wrap items-baseline gap-3">
                  <span className="text-6xl font-bold tracking-tight lg:text-7xl">
                    {slide.metric}
                  </span>
                  <span className="text-xl text-emerald-400 lg:text-2xl">
                    {slide.metricLabel}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="mt-6 text-2xl font-bold leading-tight lg:text-3xl">
                  {slide.headline}
                </h3>

                {/* Body */}
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
                  {slide.body}
                </p>

                {/* Quote */}
                <blockquote className="mt-6 border-l-2 border-white/20 pl-4">
                  <span className="text-2xl leading-none text-white/40">"</span>
                  <p className="text-sm italic text-gray-200">{slide.quote}</p>
                  <footer className="mt-2 text-xs text-gray-400">
                    {slide.attribution}
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Slideshow controls ─── */}
        <div className="mt-6 flex items-center justify-between">
          {/* Prev / Next arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {categorySlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  slideIndex === i
                    ? "w-6 bg-gray-900"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Animated bar chart ─── */

function BarChart({
  bars,
}: {
  bars: { label: string; value: number; display: string; color: string }[];
}) {
  const MAX_HEIGHT = 224; // matches h-56 (14rem = 224px)

  return (
    <div className="mt-6 flex h-56 items-end justify-around gap-12">
      {bars.map((bar, i) => {
        const targetHeight = (bar.value / 100) * MAX_HEIGHT;
        return (
          <div key={bar.label} className="flex flex-1 flex-col items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.15 }}
              className="mb-2 text-sm font-bold text-gray-900"
            >
              {bar.display}
            </motion.span>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: targetHeight }}
              transition={{
                duration: 0.9,
                delay: 0.15 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ backgroundColor: bar.color }}
              className="w-16 rounded-t-md lg:w-20"
            />

            <span className="mt-3 text-[11px] text-gray-500">{bar.label}</span>
          </div>
        );
      })}
    </div>
  );
}