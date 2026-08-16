import Hero from "@/components/Hero";
import About from "@/components/About";
import DonationSection from "@/components/DonationSection";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <DonationSection />
    </main>
  );
}