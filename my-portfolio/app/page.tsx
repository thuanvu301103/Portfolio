import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-zinc-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pt-12 md:pt-12">
        <HeroSection />
      </main>
    </div>
  );
}
