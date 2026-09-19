"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Megaphone,
  Users,
  Settings,
  Search,
  Bell,
  Zap,
  TrendingUp,
  Trophy,
  RefreshCw,
  Check,
  Calendar,
} from "lucide-react";

/* ── Sample data ─────────────────────────────────────────────── */

const CAMPAIGNS = [
  { name: "Win Big Summer Draw", date: "Jul 1 – Aug 4, 2026" },
  { name: "Holiday Special 2026", date: "Dec 1 – Dec 25, 2026" },
  { name: "New Year Kickoff Promo", date: "Dec 28 – Jan 1, 2027" },
  { name: "Pearl Rewards Giveaway", date: "Jan 5 – Jan 12, 2027" },
  { name: "Loyalty Rewards Drop", date: "Jan 20 – Jan 30, 2027" },
  { name: "Spring Launch Sweepstakes", date: "Mar 1 – Mar 15, 2027" },
  { name: "VIP Members Draw", date: "Apr 2 – Apr 12, 2027" },
];

const SPARKLINE_SETS = [
  [35, 55, 42, 70, 60, 85, 78, 95, 88, 72, 90, 100],
  [50, 40, 65, 55, 80, 70, 90, 82, 95, 88, 100, 92],
  [25, 60, 45, 75, 55, 90, 70, 100, 82, 95, 88, 98],
];

const PRIZE_POOLS = [
  { amount: "$100,416", brand: "Pearl Naturelle" },
  { amount: "$112,830", brand: "Northwind" },
  { amount: "$98,205", brand: "Myco" },
];

/* ── Main component ─────────────────────────────────────────── */

export function AnimatedDashboard() {
  const [poolIndex, setPoolIndex] = useState(0);
  const [sparkIndex, setSparkIndex] = useState(0);
  const [ticker, setTicker] = useState(0);
  const [liveUsers, setLiveUsers] = useState(1240);

  // Cycle prize pool every 4s
  useEffect(() => {
    const t = setInterval(() => {
      setPoolIndex((i) => (i + 1) % PRIZE_POOLS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Cycle sparkline data every 3s
  useEffect(() => {
    const t = setInterval(() => {
      setSparkIndex((i) => (i + 1) % SPARKLINE_SETS.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Rotate campaign list (ticker) every 2.5s
  useEffect(() => {
    const t = setInterval(() => {
      setTicker((i) => (i + 1) % CAMPAIGNS.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  // Simulated live "Total Entries" counter
  useEffect(() => {
    const t = setInterval(() => {
      setLiveUsers((u) => u + Math.floor(Math.random() * 3) + 1);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  // Visible campaign window (rotates through CAMPAIGNS)
  const visibleCampaigns = Array.from({ length: 5 }, (_, i) => {
    return CAMPAIGNS[(ticker + i) % CAMPAIGNS.length];
  });

  const currentSpark = SPARKLINE_SETS[sparkIndex];

  return (
    <div className="relative mx-auto w-full max-w-[620px] [perspective:1200px]">
      {/* Ambient gradient glow — gently pulsing */}
      <motion.div
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-purple-200/60 via-blue-200/50 to-transparent blur-2xl"
      />

      {/* Floating dashboard with idle bobbing */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-2xl shadow-blue-900/10"
      >
        {/* Top nav */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-purple-600 text-[10px] font-black text-white">
              X
            </div>
            <span className="text-xs font-bold text-gray-900">XLTV</span>
          </div>

          <div className="flex flex-1 items-center gap-2 px-6">
            <Search className="h-3 w-3 text-gray-400" />
            <motion.div
              className="h-4 rounded bg-gray-100"
              animate={{ width: ["2rem", "10rem", "2rem"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[9px] font-medium text-gray-500">
              ⌘K
            </kbd>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-gray-400" />
            {/* Pulsing notification dot */}
            <div className="relative">
              <Bell className="h-3.5 w-3.5 text-gray-400" />
              <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-pink-500"
              />
            </div>
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #7c3aed, #ec4899, #7c3aed)",
                backgroundSize: "200% 100%",
              }}
              className="rounded-md px-2 py-1 text-[10px] font-semibold text-white"
            >
              Upgrade
            </motion.div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-40 border-r border-gray-100 bg-gray-50/50 p-3 sm:block">
            <div className="space-y-1.5">
              {[
                { icon: LayoutDashboard, label: "Dashboard", active: true },
                { icon: Megaphone, label: "My Campaigns" },
                { icon: Users, label: "Audience" },
                { icon: Settings, label: "Settings" },
              ].map(({ icon: Icon, label, active }, i) => (
                <motion.div
                  key={label}
                  animate={
                    active
                      ? {
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }
                      : {}
                  }
                  transition={
                    active
                      ? { duration: 4, repeat: Infinity, ease: "linear" }
                      : {}
                  }
                  style={
                    active
                      ? {
                          backgroundImage:
                            "linear-gradient(90deg, #ede9fe, #dbeafe, #ede9fe)",
                          backgroundSize: "200% 100%",
                        }
                      : {}
                  }
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] font-medium ${
                    active ? "text-purple-700" : "text-gray-500"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  {label}
                </motion.div>
              ))}
            </div>

            {/* Mini user card */}
            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                <div className="flex-1">
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-1.5 w-14 rounded bg-gray-200"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="mt-1 h-1.5 w-10 rounded bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Dashboard title */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h4 className="text-sm font-bold text-gray-900">Dashboard</h4>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  Manage and monitor your AI-generated rewards from one place.
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-[9px] font-medium text-gray-500">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="h-2.5 w-2.5" />
                </motion.div>
                Refresh Data
              </div>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-4 gap-2">
              <StatTile
                label="Active Campaigns"
                value="1"
                sparkline
                pulse
              />
              <StatTile label="Drafts" value="3" icon={Trophy} />
              <StatTile
                label="Entries Processed"
                value="1"
                pulse
              />
              <StatTile
                label="Total Entries"
                value={liveUsers.toLocaleString()}
                icon={Users}
              />
            </div>

            {/* Recent campaigns + performance panel */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {/* Recent campaigns table with rotation */}
              <div className="col-span-2 overflow-hidden rounded-lg border border-gray-100 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-700">
                    Recent Campaigns
                  </span>
                  <div className="flex gap-1">
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[8px] text-gray-600">
                      Sort by
                    </span>
                    <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[8px] font-medium text-blue-700">
                      5 Active
                    </span>
                  </div>
                </div>

                <div className="relative space-y-1.5">
                  <AnimatePresence mode="popLayout">
                    {visibleCampaigns.map((row, i) => (
                      <motion.div
                        key={`${row.name}-${ticker}-${i}`}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-center gap-2 text-[9px]"
                      >
                        <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-purple-500 text-[7px] font-bold text-white">
                          {i + 1}
                        </div>
                        <span className="flex-1 truncate font-medium text-gray-800">
                          {row.name}
                        </span>
                        <span className="hidden text-gray-400 md:block">
                          {row.date}
                        </span>
                        <span className="rounded bg-green-50 px-1.5 py-0.5 text-[8px] font-semibold text-green-700">
                          Ready
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Performance overview with morphing chart */}
              <div className="rounded-lg border border-gray-100 p-3">
                <p className="mb-2 text-[10px] font-semibold text-gray-700">
                  Performance Overview
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <MiniStat label="Badges Offered" value="85" />
                  <MiniStat label="Brands" value="342" />
                  <MiniStat label="Winners" value="1,249" />
                  <MiniStat label="Rewards" value="7,300" />
                </div>

                {/* Continuously morphing sparkline */}
                <div className="mt-3 flex h-12 items-end gap-0.5">
                  {currentSpark.map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: `${h}%`,
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        height: { duration: 0.8, ease: "easeOut" },
                        opacity: {
                          duration: 2.4,
                          repeat: Infinity,
                          delay: i * 0.1,
                        },
                      }}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-purple-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating prize pool card — cycles through values */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 right-6 w-[180px] overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 p-4 text-white shadow-2xl"
        >
          {/* Shimmer sweep across card */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          <div className="relative flex items-center gap-1.5 text-[9px] font-medium text-white/80">
            <Trophy className="h-3 w-3" />
            Next Grand Draw
          </div>

          {/* Rolling counter for amount */}
          <div className="relative mt-1.5 h-7 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={PRIZE_POOLS[poolIndex].amount}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-tight"
              >
                {PRIZE_POOLS[poolIndex].amount}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative mt-2 flex items-center gap-1 text-[9px] text-white/80">
            <Calendar className="h-2.5 w-2.5" />
            Oct 15, 2026
          </div>

          <div className="relative mt-1 text-[9px] text-white/60">
            From {PRIZE_POOLS[poolIndex].brand}
          </div>
        </motion.div>

        {/* Floating "entry is ready" toast — subtly pulsing check */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-8 left-8 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-xl"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-[10px] font-bold text-white">
            P
          </div>
          <div>
            <p className="text-[11px] font-semibold text-gray-900">
              Your entry is ready
            </p>
            <p className="text-[9px] text-gray-500">From Pearl Naturelle</p>
          </div>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              backgroundColor: ["#dcfce7", "#bbf7d0", "#dcfce7"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-5 w-5 items-center justify-center rounded-full"
          >
            <Check className="h-3 w-3 text-green-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Sub-components ─── */

function StatTile({
  label,
  value,
  icon: Icon,
  sparkline,
  pulse,
}: {
  label: string;
  value: string;
  icon?: any;
  sparkline?: boolean;
  pulse?: boolean;
}) {
  return (
    <div className="relative rounded-lg border border-gray-100 p-2">
      {pulse && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-green-500"
        />
      )}
      <div className="flex items-center gap-1 text-[8px] text-gray-500">
        {Icon && <Icon className="h-2.5 w-2.5" />}
        {label}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900">{value}</span>
        {sparkline && (
          <TrendingUp className="h-3 w-3 text-green-500" />
        )}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-gray-100 p-1.5">
      <p className="text-[7px] uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="mt-0.5 text-[11px] font-bold text-gray-900">{value}</p>
    </div>
  );
}