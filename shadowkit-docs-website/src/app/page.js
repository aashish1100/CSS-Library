import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const SectionDivider = () => (
  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-muted)] to-transparent my-24" />
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider />

      <FeaturesSection />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <ContactSection />
    </main>
  );
}
