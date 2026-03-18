import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/section/about-section";
import { WorkExperience } from "@/components/section/experience-section";
import { HeroSection } from "@/components/section/hero-section";
import { ProjectsSection } from "@/components/section/project-section";
import { TechStack } from "@/components/section/tech-stack-section";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-12 md:pt-12">
        <section className="snap-start pt-12">
          <HeroSection />
        </section>

        <section id="about" className="transition-all snap-start pt-12">
          <AboutSection />
        </section>

        <section id="techstack" className="transition-all snap-start pt-12">
          <TechStack />
        </section>

        <section id="projects" className="snap-start pt-12">
          <ProjectsSection />
        </section>

        <section id="experience" className="snap-start pt-12">
          <WorkExperience />
        </section>
      </main>
    </div>
  );
}
