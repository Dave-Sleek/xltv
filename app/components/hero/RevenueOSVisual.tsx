import Image from "next/image";

const FACES = Array.from({ length: 15 }, (_, i) => `/faces/face-${i + 1}.jpg`);

export function RevenueOSVisual() {
  // Left + right columns of 3x5 faces
  const columns = [FACES.slice(0, 15), FACES.slice(0, 15)];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_65%)] blur-2xl" />

      {/* Face grid — left + right */}
      <div className="absolute inset-0 grid grid-cols-2 gap-16">
        {columns.map((col, ci) => (
          <div key={ci} className="grid grid-rows-5 gap-3">
            {col.map((src, ri) => (
              <div
                key={ri}
                className="relative overflow-hidden rounded-xl border-2 border-blue-500/40 shadow-lg shadow-blue-500/10"
              >
                <Image
                  src={src}
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Center: SVG network + RevenueOS badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="h-72 w-72">
          {/* Curved connector lines */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 160;
            const y = 200 + Math.sin(angle) * 160;
            return (
              <line
                key={i}
                x1="200" y1="200" x2={x} y2={y}
                stroke="url(#lineGrad)"
                strokeWidth="0.6"
                opacity="0.5"
              />
            );
          })}
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Rotating gradient ring */}
          <circle
            cx="200" cy="200" r="90"
            fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"
            className="animate-[spin_20s_linear_infinite]"
            strokeDasharray="4 8"
          />
          <circle cx="200" cy="200" r="70" fill="#0a0a0a" />
        </svg>

        {/* RevenueOS text badge */}
        <div className="absolute rounded-full border border-white/10 bg-black px-6 py-3 shadow-2xl">
          <span className="text-lg font-semibold text-white">RevenueOS</span>
        </div>
      </div>

      {/* Floating "90% conversions" pill */}
      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-lg">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-indigo" />
        <span className="text-sm font-semibold text-gray-900">90% conversions</span>
        <span className="text-gray-400">→</span>
      </div>
    </div>
  );
}