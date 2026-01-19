import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { InsuranceTicker } from "@/components/sections/InsuranceTicker";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AnxietyRelief } from "@/components/sections/AnxietyRelief";
import { DoctorHighlight } from "@/components/sections/DoctorHighlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <InsuranceTicker />
      <ServicesGrid />
      <ProcessSection />
      <AnxietyRelief />
      <DoctorHighlight />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
