import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSnap from "@/components/AboutSnap";
import StatsBanner from "@/components/StatsBanner";
import ProductHighlight from "@/components/ProductHighlight";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <AboutSnap />
      <ServicesSection />
      <ProductHighlight />
      <CTABanner />
    </>
  );
}
