import { AnnouncementBar } from "@/app/components/layout/AnnouncementBar";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/hero/Hero";
import { PayoutTicker } from "@/app/components/sections/PayoutTicker";
import { LogoMarquee } from "@/app/components/sections/LogoMarquee";
import { WhyXltv } from "@/app/components/sections/WhyXltv";
import { ProvenAtScale } from "@/app/components/sections/ProvenAtScale";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { ForOperators } from "@/app/components/sections/ForOperators";
import { CaseStudy } from "@/app/components/sections/CaseStudy";
import { SuccessStories } from "@/app/components/sections/SuccessStories";
import { RoiCalculator } from "@/app/components/sections/RoiCalculator";
import { Backers } from "@/app/components/sections/Backers";
import { FinalCta } from "@/app/components/sections/FinalCta";
import { DashboardPreview } from "@/app/components/product/DashboardPreview";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        {/* <PayoutTicker /> */}
        <LogoMarquee />
        <WhyXltv />
        <ProvenAtScale />
        <HowItWorks />
        <DashboardPreview />
        <ForOperators />
        <CaseStudy />
        <SuccessStories />
        <RoiCalculator />
        <Backers />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}