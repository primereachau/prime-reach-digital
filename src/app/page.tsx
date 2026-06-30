import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <WhyUs />
      <Results />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
