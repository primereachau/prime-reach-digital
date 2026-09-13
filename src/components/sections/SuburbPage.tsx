import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import type { Suburb } from "@/lib/suburbs";

const services = [
  {
    href: "/seo-agency-melbourne",
    title: "SEO",
    desc: "Rank #1 on Google and dominate the Map Pack with local SEO.",
  },
  {
    href: "/google-ads-melbourne",
    title: "Google Ads",
    desc: "Get qualified leads within days with expertly managed campaigns.",
  },
  {
    href: "/website-design-melbourne",
    title: "Website Design",
    desc: "Fast, mobile-first websites built to convert visitors into customers.",
  },
  {
    href: "/google-business-profile-melbourne",
    title: "Google Business Profile",
    desc: "Optimise your listing to dominate local Map Pack results.",
  },
];

const benefits = [
  "Show up when local customers search for your business or service",
  "Turn Google searches into phone calls and enquiries",
  "Build trust with reviews, photos, and an optimised Google presence",
  "A dedicated strategy — not a one-size-fits-all template",
];

export default function SuburbPage({ suburb }: { suburb: Suburb }) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing",
    name: `Digital Marketing Agency in ${suburb.name}`,
    description: suburb.intro,
    areaServed: `${suburb.name}, VIC`,
    provider: {
      "@type": "LocalBusiness",
      name: "Prime Reach Digital",
      url: "https://www.primereachdigital.com.au",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: suburb.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[var(--pr-black)] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="border-b border-white/[0.06] py-6 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[var(--pr-blue)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">PR</span>
            </div>
            <span className="text-white font-semibold text-[15px]">
              Prime<span className="text-[var(--pr-blue)]">Reach</span> Digital
            </span>
          </Link>
          <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <span className="text-[var(--pr-blue)] text-xs font-semibold uppercase tracking-[0.2em]">
          {suburb.region} Digital Marketing Specialists
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Digital Marketing Agency in {suburb.name}, Melbourne
        </h1>
        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          {suburb.intro}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="#contact-cta" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[var(--pr-crimson)] hover:bg-[var(--pr-crimson-light)] transition-colors font-semibold text-white text-base">
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
          <a href="tel:0490881483" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass border border-[var(--pr-blue)]/30 hover:border-[var(--pr-blue)]/60 text-white font-semibold text-base transition-all">
            <Phone size={16} className="text-[var(--pr-blue)]" />
            0490 881 483
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Why {suburb.name} Businesses Choose Us</h2>
        <p className="text-[var(--text-dim)] text-base leading-relaxed max-w-3xl mb-8">
          {suburb.whyUs}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[var(--pr-blue)] mt-0.5 flex-shrink-0" />
              <span className="text-[var(--text-dim)] text-sm leading-relaxed">{b}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Our Services in {suburb.name}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block p-6 rounded-2xl border border-white/[0.06] bg-[var(--pr-navy)] hover:border-[var(--pr-blue)]/40 transition-colors">
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          {suburb.faqs.map((f, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold text-lg mb-2">{f.q}</h3>
              <p className="text-[var(--text-dim)] text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contact-cta" className="max-w-5xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Found in {suburb.name}?
        </h2>
        <p className="text-[var(--text-muted)] text-base mb-8 max-w-xl mx-auto">
          Book a free strategy call and find out exactly what it takes to rank higher and win more
          local customers in {suburb.name}.
        </p>
        <Link href="/#contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[var(--pr-crimson)] hover:bg-[var(--pr-crimson-light)] transition-colors font-semibold text-white text-base">
          Book Your Free Strategy Call
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-faint)] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/" className="text-xs text-[var(--pr-blue)] hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
