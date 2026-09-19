import Link from "next/link";
import { AnimatedDashboard } from "./AnimatedDashboard";

const STEPS = [
  { number: "01", title: "Pool your budget with other brands." },
  { number: "02", title: "Unlock big-brand rewards." },
  {
    number: "03",
    title: "Power your campaigns with pooled rewards, not margin-killing discounts.",
  },
  { number: "04", title: "You handle the marketing. We handle the rest." },
];

export function HowItWorks() {
  return (
    <section id="ecosystem" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-900">
            How XLTV Works
          </span>
          <span className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        {/* Header + CTA row */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]">
              One Network.
              <br />A Bigger Reward Pool.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
              Give customers access to bigger rewards without funding the whole
              prize pool yourself.
            </p>
          </div>

          <Link
            href="#learn"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
          >
            Learn more
          </Link>
        </div>

        {/* Two-column content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT: Animated dashboard */}
          <div className="relative">
            <AnimatedDashboard />
          </div>

          {/* RIGHT: Numbered step cards */}
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-blue-50 to-white px-6 py-6 transition hover:from-indigo-100 hover:via-blue-100"
              >
                <span className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
                  {step.number}
                </span>
                <p className="text-base font-semibold leading-snug text-gray-900 lg:text-lg">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}