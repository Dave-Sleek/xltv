"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const WINNERS = [
  {
    name: "Khan N",
    amount: "$4,000",
    quote: "Took my family on the trip of a lifetime",
    img: "/winners/khan.jpg",
  },
  {
    name: "Ahmed M",
    amount: "$50,000",
    quote: "Paid off my debt and sons tuition",
    img: "/winners/ahmed.jpg",
  },
  {
    name: "Sunny L",
    amount: "$800",
    quote: "Launched my own podcast",
    img: "/winners/sunny.jpg",
  },
];

export function SuccessStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setIsCompact(v > 0.5);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0b0b0d] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Turn User Actions into Life Changing Stories
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400 lg:text-base">
              Meet some of our winners. Myco changed a users life with XLTV
              just by watching content!
            </p>
          </div>

          <button className="inline-flex flex-shrink-0 items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
            Meet the winner
          </button>
        </div>

        {/* Cards area */}
        <div className="relative mt-12 min-h-[440px] lg:mt-14">
          {!isCompact ? (
            /* ── STAGE 1: 3-card grid (smaller, aligned) ── */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto grid max-w-8xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {WINNERS.map((w, i) => (
                <WinnerCard key={w.name} winner={w} index={i} />
              ))}
            </motion.div>
          ) : (
            /* ── STAGE 2: Focused card ── */
            <motion.div
              key="focus"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid gap-12 lg:grid-cols-2 lg:items-center"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  Turn User Actions into
                  <br />
                  Life Changing Stories
                </h3>

                <button className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
                  Meet the winner
                </button>

                <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-400 lg:text-base">
                  Meet some of our winners. Myco changed a users life with XLTV
                  just by watching content!
                </p>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <FocusedCard winner={WINNERS[1]} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Grid card (Stage 1) — smaller ─── */

function WinnerCard({
  winner,
  index,
}: {
  winner: (typeof WINNERS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative aspect-[5/6] overflow-hidden rounded-2xl bg-gray-900"
    >
      <Image
        src={winner.img}
        alt={winner.name}
        fill
        sizes="(max-width: 1024px) 50vw, 300px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Brand logo */}
      <span className="absolute left-4 top-4 text-sm font-black italic tracking-tight text-white">
        myco
      </span>

      {/* Amount */}
      <div className="absolute bottom-20 right-4 text-right">
        <p className="text-[9px] font-medium uppercase tracking-widest text-white/60">
          Won
        </p>
        <p className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
          {winner.amount}
        </p>
      </div>

      {/* Info bar */}
      <div className="absolute inset-x-3 bottom-3 flex items-center gap-2.5 rounded-lg bg-white p-2 shadow-lg">
        <div className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={winner.img}
            alt={winner.name}
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-bold text-gray-900">
            {winner.name}
          </p>
          <p className="truncate text-[10px] text-gray-500">
            "{winner.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Focused card (Stage 2) ─── */

function FocusedCard({ winner }: { winner: (typeof WINNERS)[number] }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-white/40 via-white/10 to-transparent blur-[2px]" />

      <div className="relative aspect-[5/6] overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">
        <Image
          src={winner.img}
          alt={winner.name}
          fill
          sizes="320px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        <span className="absolute left-5 top-5 text-base font-black italic tracking-tight text-white">
          myco
        </span>

        <div className="absolute bottom-20 right-5 text-right">
          <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">
            Won
          </p>
          <p className="text-4xl font-bold tracking-tight text-white">
            {winner.amount}
          </p>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl bg-white p-3 shadow-xl">
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
              "{winner.quote}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}