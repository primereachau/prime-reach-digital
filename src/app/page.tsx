import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import CTAStrip from "@/components/ui/CTAStrip";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Industries />
      <Process />
      <Stats />
      <CTAStrip />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCallButton />
    </main>
  );
}
