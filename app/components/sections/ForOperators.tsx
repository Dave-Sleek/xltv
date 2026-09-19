import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STEPS = [
  { n: "01", title: "Choose a participating brand" },
  { n: "02", title: "Complete the qualifying action" },
  { n: "03", title: "Claim your XLTV entry" },
  {
    n: "04",
    title:
      "You have a shot to be one of 1,000+ winners or redeem for up to $5.",
  },
];

const PHOTOS = [
  "/images/mosaic/m1.jpg",
  "/images/mosaic/m2.jpg",
  "/images/mosaic/m3.jpg",
  "/images/mosaic/m4.jpg",
  "/images/mosaic/m5.jpg",
  "/images/mosaic/m6.jpg",
  "/images/mosaic/m7.jpg",
  "/images/mosaic/m8.jpg",
  "/images/mosaic/m9.jpg",
  "/images/mosaic/m10.jpg",
  "/images/mosaic/m11.jpg",
  "/images/mosaic/m12.jpg",
  "/images/mosaic/m13.jpg",
  "/images/mosaic/m14.jpg",
  "/images/mosaic/m15.jpg",
  "/images/mosaic/m16.jpg",
  "/images/mosaic/m17.jpg",
  "/images/mosaic/m18.jpg",
  "/images/mosaic/m19.jpg",
  "/images/mosaic/m20.jpg",
  "/images/mosaic/m21.jpg",
  "/images/mosaic/m22.jpg",
  "/images/mosaic/m23.jpg",
  "/images/mosaic/m24.jpg",
  "/images/mosaic/m25.jpg",
];

export function ForOperators() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ─── HEADER: headline + description + desktop button ─── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[2.75rem]">
              For customers: earn your entry.
              <br className="hidden sm:block" /> Take your shot.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 lg:text-base">
              Complete a qualifying action with a participating brand to get
              your XLTV entry. Keep it for your chance to be one of 1,000+
              winners.
            </p>
          </div>

          {/* Learn more — desktop only, top-right */}
          <Link
            href="#learn"
            className="hidden flex-shrink-0 items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black lg:inline-flex"
          >
            Learn more
          </Link>
        </div>

        {/*
          Two-column body.
          Mobile: images → steps
          Desktop: steps ⟷ images
        */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* STEPS */}
          <div className="order-2 space-y-3 lg:order-1">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="flex items-center gap-5 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-white px-6 py-5 lg:py-6"
              >
                <span className="bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-5xl">
                  {s.n}
                </span>
                <p className="text-sm font-semibold leading-snug text-gray-900 lg:text-[15px]">
                  {s.title}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGES — 5×5 grid with LONG horizontal tiles */}
          <div className="order-1 grid grid-cols-5 gap-2 lg:order-2">
            {PHOTOS.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] overflow-hidden rounded-md bg-gray-100"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 20vw, 12vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Learn more — mobile only, below steps */}
        <div className="mt-8 lg:hidden">
          <Link
            href="#learn"
            className="flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Learn more
          </Link>
        </div>

        {/* ─── BLUE CTA BANNER ─── */}
        <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-7 sm:flex-row sm:items-center sm:justify-between lg:mt-16 lg:p-8">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white lg:text-2xl">
              Want in on the XLTV draw?
            </h3>
            <p className="mt-1.5 max-w-xl text-sm text-white/85">
              Browse participating brands in your country and find a campaign to
              earn your entry.
            </p>
          </div>

          <Link
            href="#brands"
            className="inline-flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 sm:w-auto"
          >
            See participating brands
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}