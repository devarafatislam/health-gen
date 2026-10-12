import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/healthgen/Navbar";
import { Hero } from "@/components/healthgen/Hero";
import {
  AppPreviewSection,
  BenefitsSection,
  FeaturesSection,
  HowItWorksSection,
  PrivacySection,
  TrustSection,
} from "@/components/healthgen/Sections";
import { DownloadSection, FinalCTASection } from "@/components/healthgen/Download";
import { FaqSection } from "@/components/healthgen/Faq";
import { Footer } from "@/components/healthgen/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Healthgen — Your Smart Health Companion" },
      {
        name: "description",
        content:
          "Healthgen is a smart health diary and AI-powered primary health advisor for Android: track health metrics, log symptoms, manage medicine reminders, and find nearby care.",
      },
      { property: "og:title", content: "Healthgen — Your Smart Health Companion" },
      {
        property: "og:description",
        content:
          "Track your health, understand your symptoms, stay on top of your medication, and discover wellness insights — all in one simple Android app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <FeaturesSection />
        <AppPreviewSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PrivacySection />
        <DownloadSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
