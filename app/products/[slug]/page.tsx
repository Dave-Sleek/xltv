// app/products/[slug]/page.tsx

import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/app/lib/products";
import { AnnouncementBar } from "@/app/components/layout/AnnouncementBar";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ProductHero } from "@/app/components/product/ProductHero";
import { StatTiles } from "@/app/components/product/StatTiles";
import { CapabilitiesList } from "@/app/components/product/CapabilitiesList";
import { ProcessFlow } from "@/app/components/product/ProcessFlow";
import { ProductCta } from "@/app/components/product/ProductCta";
import { ProductDashboard } from "@/app/components/product/ProductDashboard";
import { ProductFaq } from "@/app/components/product/ProductFaq";
import { GlobalReach } from "@/app/components/product/GlobalReach";
import { TrustMarquee } from "@/app/components/product/TrustMarquee";
import { DeclineOsDashboard } from "@/app/components/product/dashboards/DeclineOsDashboard";
import { WinnerTicker } from "@/app/components/product/WinnerTicker";
import { FlipCardGallery } from "@/app/components/product/FlipCardGallery";
import { MerchantPipeline } from "@/app/components/product/MerchantPipeline";
import { AcquirerMatch } from "@/app/components/product/AcquirerMatch";
import { AcquireOsDashboard } from "@/app/components/product/dashboards/AcquireOsDashboard";
import { RewardOsHero } from "@/app/components/product/RewardOsHero";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not Found" };

  return {
    title: `${product.name} — XLTV`,
    description: product.subheadline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <AnnouncementBar copy={product.announcement} />
      <Navbar />
      <main>
        {/* ── HERO SECTION ── */}
        {/* RewardOS gets the custom, gradient hero. All others get the standard hero. */}
        {slug === "reward-os" ? (
          <RewardOsHero product={product} />
        ) : (
          <ProductHero product={product} />
        )}

        {/* ── POST-HERO SECTIONS ── */}
        <TrustMarquee slug={slug} />
        <StatTiles stats={product.stats} />

        {/* Dashboards */}
        {slug === "acquire-os" && <AcquireOsDashboard />}
        {slug === "decline-os" && <DeclineOsDashboard />}
        {slug !== "acquire-os" && slug !== "decline-os" && (
          <ProductDashboard slug={slug} />
        )}

        {/* AcquireOS Specifics */}
        {slug === "acquire-os" && <MerchantPipeline />}
        {slug === "acquire-os" && <AcquirerMatch />}

        {/* RewardOS Specifics */}
        {slug === "reward-os" && <WinnerTicker />}
        {slug === "reward-os" && <FlipCardGallery />}

        {/* Global Sections */}
        <GlobalReach slug={slug} />
        <CapabilitiesList
          capabilities={product.capabilities}
          productName={product.name}
          slug={slug}
        />
        <ProcessFlow
          steps={product.processSteps}
          productName={product.name}
          slug={slug}
        />
        
        <ProductFaq product={product} />
        <ProductCta product={product} />
      </main>
      <Footer />
    </>
  );
}