import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
