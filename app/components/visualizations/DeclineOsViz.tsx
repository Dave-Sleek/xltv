"use client";

import { motion } from "framer-motion";
import { CreditCard, Check, X, Brain, ArrowRight } from "lucide-react";

export function DeclineOsViz() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_65%)] blur-2xl"
      />

      {/* Vertical flow: declined card → AI engine → recovered card */}
      <div className="relative flex h-full flex-col items-center justify-center gap-6">
        {/* ── Step 1: Declined card ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-64 rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-4 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <CreditCard className="h-5 w-5 text-red-500" />
            <span className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700">
              <X className="h-2.5 w-2.5" />
              Declined
            </span>
          </div>
          <p className="mt-3 text-xs font-mono text-gray-500">
            •••• 4242
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900">$480.00</p>
          <p className="text-[10px] text-gray-500">Insufficient funds · Issuer</p>
        </motion.div>

        {/* ── Connector 1 ── */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="h-6 w-px bg-gradient-to-b from-red-300 to-indigo-400" />
          <ArrowRight className="h-3 w-3 rotate-90 text-indigo-500" />
        </motion.div>

        {/* ── Step 2: AI Engine ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-200/60 to-blue-200/40 blur-xl"
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 shadow-2xl">
            <Brain className="h-8 w-8 text-white" />
            {/* Rotating ring */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-white/40"
            />
          </div>
          <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-widest text-indigo-600">
            AI Routing
          </p>
        </motion.div>

        {/* ── Connector 2 ── */}
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="h-6 w-px bg-gradient-to-b from-indigo-400 to-green-400" />
          <ArrowRight className="h-3 w-3 rotate-90 text-green-500" />
        </motion.div>

        {/* ── Step 3: Recovered card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative w-64 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-4 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <CreditCard className="h-5 w-5 text-green-600" />
            <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700">
              <Check className="h-2.5 w-2.5" />
              Recovered
            </span>
          </div>
          <p className="mt-3 text-xs font-mono text-gray-500">
            •••• 4242
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900">$480.00</p>
          <p className="text-[10px] text-gray-500">
            Approved on retry · +$480 revenue
          </p>
        </motion.div>
      </div>

      {/* Stats pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="text-xs font-semibold text-gray-900">
          +30% recovery rate
        </span>
      </motion.div>
    </div>
  );
}