const LOGOS = ["Netflix", "Spotify", "Stripe", "Vercel", "Linear", "Notion", "Figma", "Ramp"];

export function LogoMarquee() {
  return (
    <section className="border-b border-gray-100 bg-black py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
        Trusted by teams running campaigns with us
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-xl font-bold text-gray-400 grayscale"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}