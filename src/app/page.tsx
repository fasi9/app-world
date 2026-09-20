import { Hero } from "@/components/home/hero";
import { ImproveSection } from "@/components/home/improve-section";
import { ServiceGroupsSection } from "@/components/home/service-groups-section";
import { HowWeTestSection } from "@/components/home/how-we-test-section";
import { SelectedProjectsSection } from "@/components/home/selected-projects-section";
import { ProcessSection } from "@/components/home/process-section";
import { EngagementSection } from "@/components/home/engagement-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ImproveSection />
      <ServiceGroupsSection />
      <HowWeTestSection />
      <SelectedProjectsSection />
      <ProcessSection />
      <EngagementSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
