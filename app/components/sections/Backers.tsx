import Image from "next/image";

/* ── Logo data ───────────────────────────────────────────── */

const LEAD_BACKERS = [
  { name: "Ethereal Ventures", logo: "/logos/ethereal.svg" },
  { name: "Further", logo: "/logos/further.svg" },
];

const SUPPORTING_BACKERS = [
  { name: "Anchorage Digital", logo: "/logos/anchorage.svg" },
  { name: "GSR Capital", logo: "/logos/gsr.svg" },
  { name: "Nascent", logo: "/logos/nascent.svg" },
  { name: "Scenius", logo: "/logos/scenius.svg" },
  { name: "Nuwa Capital", logo: "/logos/nuwa.svg" },
];

/* ── Component ──────────────────────────────────────────── */

export function Backers() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <div className="inline-flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-900">
            Our backing
          </span>
          <span className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
        </div>

        {/* Header: headline left, description right */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            XLTV raised $5.5M to build a new rewards model.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-600 lg:pt-3 lg:text-base">
            The pre-seed round was led by Ethereal Ventures and Further, with
            support from Nascent, GSR, Scenius Capital, Anchorage Digital, and
            Nuwa Capital.
          </p>
        </div>

        {/* ─── BACKED BY section ─── */}
        <Divider label="Backed by" />

        <div className="mt-12 grid grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-2 lg:gap-16">
          {LEAD_BACKERS.map((b) => (
            <div
              key={b.name}
              className="flex h-16 w-full max-w-[280px] items-center justify-center"
            >
              <Image
                src={b.logo}
                alt={b.name}
                width={280}
                height={64}
                className="h-10 w-auto object-contain opacity-70 grayscale lg:h-12"
              />
            </div>
          ))}
        </div>

        {/* ─── TOGETHER WITH section ─── */}
        <Divider label="Together with" className="mt-16" />

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {SUPPORTING_BACKERS.map((b) => (
            <div
              key={b.name}
              className="flex h-12 w-full max-w-[160px] items-center justify-center"
            >
              <Image
                src={b.logo}
                alt={b.name}
                width={160}
                height={48}
                className="h-7 w-auto object-contain opacity-60 grayscale lg:h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Divider: label with horizontal rules on both sides ── */

function Divider({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className="h-px flex-1 bg-gray-200" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
        {label}
      </span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}