// components/product/ImageFeatureSection.tsx

import Image from "next/image";
import { motion } from "framer-motion";

export function ImageFeatureSection({
  image,
  eyebrow,
  headline,
  body,
  bullets,
  imageSide = "right",
  dark = false,
}: {
  image: string;
  eyebrow: string;
  headline: string;
  body: string;
  bullets?: string[];
  imageSide?: "left" | "right";
  dark?: boolean;
}) {
  const reverse = imageSide === "left";

  return (
    <section className={`py-20 lg:py-24 ${dark ? "bg-gray-950 text-white" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20`}>
          {/* Copy */}
          <div className={reverse ? "lg:order-2" : ""}>
            <p className={`text-sm font-semibold uppercase tracking-widest ${dark ? "text-blue-400" : "text-blue-600"}`}>
              {eyebrow}
            </p>
            <h2 className={`mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${dark ? "text-white" : "text-gray-900"}`}>
              {headline}
            </h2>
            <p className={`mt-5 text-sm leading-relaxed lg:text-base ${dark ? "text-gray-300" : "text-gray-600"}`}>
              {body}
            </p>

            {bullets && (
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                    <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden rounded-3xl ${reverse ? "lg:order-1" : ""}`}
          >
            <Image
              src={image}
              alt={headline}
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}