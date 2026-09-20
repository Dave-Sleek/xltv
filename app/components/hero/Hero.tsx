import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pt-4 pb-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-6 lg:pb-16">
        {/* ─── COPY ─── */}
        <div className="order-1 animate-fade-up text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.55rem]">
            Maximize Customer
            <br />
            LTV With AI-Powered
            <br />
            <span className="text-[#3712d2]">Monetization</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 lg:mx-0 lg:text-base">
            RevenueOS is AI-powered monetization intelligence that integrates
            seamlessly into your checkout, CRM, and customer vault.
          </p>

          <p className="mx-auto mt-4 max-w-md text-sm font-bold text-[#3712d2] lg:mx-0 lg:text-base">
            Zero risk, conversion rates up to 90%
          </p>

          {/* Buttons — full-width stacked on mobile, side-by-side on desktop */}
          <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-4">
            <Link
              href="#demo"
              className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-10 py-3.5 text-base font-semibold text-white transition hover:bg-black lg:w-auto lg:px-12"
            >
              Book a Demo
            </Link>
            <Link
              href="#difference"
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-gray-900 bg-white px-10 py-3.5 text-base font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white lg:w-auto lg:px-12"
            >
              See The Difference
            </Link>
          </div>
        </div>

        {/* ─── IMAGE ─── */}
        <div className="order-2 relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none">
          <Image
            src="/images/hero-revenueos.png"
            alt="RevenueOS monetization intelligence network"
            width={1200}
            height={1200}
            priority
            className="h-auto w-full select-none"
          />

          {/* 90% conversions pill — centered below the image */}
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span className="text-sm font-semibold text-gray-900">
              90% conversions
            </span>
            <ArrowRight className="h-4 w-4 text-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
}