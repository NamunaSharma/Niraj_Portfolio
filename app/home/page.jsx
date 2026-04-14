import React from "react";
import Footer from "../components/footer";
import PricingSection from "../components/pricing";
import PortfolioGrid from "../components/gallery";
import ContactSection from "../components/form";
import AboutSection from "../components/aboutme";
import Hero from "../components/hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PortfolioGrid />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
