import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Stats from "@/app/components/Stats";
import CTA from "@/app/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <Stats />
      <CTA />
    </main>
  );
}
