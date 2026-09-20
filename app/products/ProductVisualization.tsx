"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProductVisualization({
  slug,
  src,
  alt,
}: {
  slug: string;
  src?: string;
  alt: string;
}) {
  // Fallback placeholder if the client hasn't provided the image yet
  const imageSrc = src || `/images/hero-${slug}.png`;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Ambient glow behind the image */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_65%)] blur-3xl"
      />

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={1200}
          priority
          className="h-auto w-full select-none"
        />
      </motion.div>
    </div>
  );
}