import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { AboutSection } from '@/sections/AboutSection';
import { ContactSection } from '@/sections/ContactSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { HeroSection } from '@/sections/HeroSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ParticlesBackground } from '@/three/ParticlesBackground';

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip">
      <ParticlesBackground />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
