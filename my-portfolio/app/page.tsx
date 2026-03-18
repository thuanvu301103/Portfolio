import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/section/about-section";
import { HeroSection } from "@/components/section/hero-section";
import { TechStack } from "@/components/section/tech-stack-section";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-12 md:pt-12">
        <section className="snap-start pt-12">
          <HeroSection />
        </section>

        <section className="snap-start pt-12">
          <AboutSection />
        </section>

        <section className="snap-start pt-12">
          <TechStack />
        </section>
      </main>
    </div>
  );
}
