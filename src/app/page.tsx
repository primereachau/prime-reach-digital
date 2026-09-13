import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import AreasWeServe from "@/components/sections/AreasWeServe";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import CTAStrip from "@/components/ui/CTAStrip";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prime Reach Digital",
  url: "https://www.primereachdigital.com.au",
  telephone: "+61 490 881 483",
  areaServed: "Melbourne, VIC",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Industries />
      <AreasWeServe />
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
