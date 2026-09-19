"use client";

import { useState } from "react";
import { Info } from "lucide-react";

export function RoiCalculator() {
  const [asp, setAsp] = useState(50);
  const [discount, setDiscount] = useState(20);
  const [audience, setAudience] = useState(10000);
  const [convRate, setConvRate] = useState(5);

  /* ── Math ── */
  const discountUsers = audience * (convRate / 100);
  const discountRevenue = discountUsers * asp * (1 - discount / 100);
  const discountCost = discountUsers * (asp * (discount / 100));
  const discountProfit = discountRevenue - discountCost;
  const discountRoi = discountCost > 0 ? (discountProfit / discountCost) * 100 : 0;

  const xltvUsers = audience * ((convRate * 1.5) / 100);
  const xltvRevenue = xltvUsers * asp;
  const xltvCost = xltvUsers * 2;
  const xltvProfit = xltvRevenue - xltvCost;
  const xltvRoi = xltvCost > 0 ? (xltvProfit / xltvCost) * 100 : 0;

  const rows = [
    {
      label: "ROI",
      info: "With Discounts: Assumes a 20% net profit margin and no additional ad spend. With XLTV: Higher conversions at a fraction of the cost means your ROI goes through the roof.",
      a: `${Math.round(discountRoi)}%`,
      b: `${Math.round(xltvRoi)}%`,
    },
    {
      label: "Users Acquired",
      info: "With Discounts: at 5% conversion. With XLTV: at 7.5% conversion (+50% uplift).",
      a: Math.round(discountUsers).toLocaleString(),
      b: Math.round(xltvUsers).toLocaleString(),
    },
    {
      label: "Revenue",
      a: `$${discountRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
      b: `$${xltvRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
    },
    {
      label: "Incentive Cost",
      info: "With Discounts: $10 per user. With XLTV: $2 per user, flat rate.",
      a: `$${discountCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
      b: `$${xltvCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-900">
            Compare the cost
          </span>
          <span className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        {/* Header + Book Demo */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
              Why are you still discounting?
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600 lg:text-base">
              See how higher conversions at lower cost with XLTV can boost your
              ROI versus discounts.
            </p>
          </div>

          <button className="inline-flex flex-shrink-0 items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
            Book Demo
          </button>
        </div>

        {/* Two-column body */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* LEFT: Inputs */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Plug in your numbers
            </h3>

            <div className="mt-6 space-y-7">
              <Field
                label="Product Price"
                hint="Average selling price"
                value={asp}
                onChange={setAsp}
                min={0}
                max={500}
                step={1}
                prefix="$"
              />
              <Field
                label="Your Discount"
                hint="Discount you offer to acquire"
                value={discount}
                onChange={setDiscount}
                min={0}
                max={100}
                step={1}
                suffix="%"
              />
              <Field
                label="Target Users"
                hint="Audience you're targeting"
                value={audience}
                onChange={setAudience}
                min={0}
                max={100000}
                step={100}
              />
              <Field
                label="Avg. Conversion Rate"
                hint="% of target that converts"
                value={convRate}
                onChange={setConvRate}
                min={0}
                max={100}
                step={0.5}
                suffix="%"
              />
            </div>
          </div>

          {/* RIGHT: Results card */}
          <div className="relative overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/60 via-white to-white p-8 lg:p-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-[1.75rem]">
                See what XLTV can do for you!
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Give your CFO something to smile about.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-indigo-100">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-transparent">
                      —
                    </th>
                    <th className="bg-white px-4 py-3 text-center font-semibold text-gray-900">
                      With Discounts
                    </th>
                    <th className="bg-indigo-100/70 px-4 py-3 text-center font-semibold text-indigo-600">
                      With XLTV
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label} className="border-t border-indigo-100">
                      <td className="px-4 py-4 font-medium text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          {r.label}
                          {r.info && (
                            <Info className="h-3 w-3 text-gray-400" />
                          )}
                        </span>
                      </td>
                      <td className="bg-white px-4 py-4 text-center font-semibold text-gray-900">
                        {r.a}
                      </td>
                      <td className="bg-indigo-100/70 px-4 py-4 text-center font-semibold text-indigo-600">
                        {r.b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Slider field with ruler ticks ── */

function Field({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div>
      {/* Label + hint */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-gray-900">{label}</span>
        <span className="text-[11px] text-gray-500">{hint}</span>
      </div>

      {/* Value input */}
      <div className="mt-2 flex items-center rounded-lg border border-gray-300 bg-white focus-within:border-blue-600">
        {prefix && (
          <span className="pl-4 text-base font-medium text-gray-500">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="w-full border-0 bg-transparent px-4 py-3 text-base font-bold text-gray-900 focus:outline-none"
        />
        {suffix && (
          <span className="pr-4 text-base font-medium text-gray-500">
            {suffix}
          </span>
        )}
      </div>

      {/* Slider + ruler ticks */}
      <div className="relative mt-3">
        {/* Native range input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 w-full cursor-pointer appearance-none bg-transparent
            [&::-webkit-slider-runnable-track]:h-1
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:bg-transparent
            [&::-moz-range-track]:h-1
            [&::-moz-range-track]:rounded-full
            [&::-moz-range-track]:bg-transparent
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:rounded-[3px]
            [&::-webkit-slider-thumb]:bg-blue-600
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:-mt-2
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:w-3
            [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:rounded-[3px]
            [&::-moz-range-thumb]:bg-blue-600
          "
        />

        {/* Track background — sits behind the native input */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Ruler ticks underneath the track */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-full mt-1.5 h-2"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #d1d5db 0, #d1d5db 1px, transparent 1px, transparent calc(100% / 20))",
            backgroundSize: "100% 100%",
          }}
        />

        {/* Major ticks — taller marks every 5th */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-full mt-1.5 h-3"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #9ca3af 0, #9ca3af 1px, transparent 1px, transparent calc(100% / 5))",
            backgroundSize: "100% 100%",
            maskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent calc(100% / 5))",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent calc(100% / 5))",
          }}
        />
      </div>
    </div>
  );
}