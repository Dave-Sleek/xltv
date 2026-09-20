// components/product/TrustMarquee.tsx

import Image from "next/image";
import { TRUST_MARQUEE_DATA } from "./trustLogos";

export function TrustMarquee({ slug }: { slug: string }) {
  const data = TRUST_MARQUEE_DATA[slug];
  if (!data) return null;

  // Duplicate the logos so the marquee can loop seamlessly
  const doubledLogos = [...data.logos, ...data.logos];

  const bg = data.variant === "dark" ? "bg-gray-950" : "bg-white";
  const labelColor = data.variant === "dark" ? "text-gray-500" : "text-gray-400";
  const logoOpacity = data.variant === "dark" ? "opacity-50" : "opacity-60";

  return (
    <section className={`${bg} border-y border-gray-100 py-8 lg:py-10`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Label */}
        <p
          className={`mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] ${labelColor}`}
        >
          {data.label}
        </p>
      </div>

      {/* Full-bleed marquee (breaks out of max-width container) */}
      <div className="relative overflow-hidden">
        {/* Left + right fade masks so logos appear/disappear smoothly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent lg:w-32" />

        {/* The scrolling track */}
        <div className="flex w-max animate-[trust-marquee_40s_linear_infinite] items-center gap-12 lg:gap-20">
          {doubledLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-10 flex-shrink-0 items-center justify-center lg:h-12"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={48}
                className={`h-6 w-auto object-contain grayscale transition duration-300 hover:grayscale-0 lg:h-8 ${logoOpacity}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}