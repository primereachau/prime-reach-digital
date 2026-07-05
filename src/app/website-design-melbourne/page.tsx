import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Website Design Melbourne | Prime Reach Digital",
  description:
    "Melbourne website design agency building fast, modern websites for local businesses that convert visitors into customers. Custom design, SEO-ready, mobile-first.",
  keywords:
    "website design Melbourne, web design agency Melbourne, website designer Melbourne, custom website Melbourne, small business website Melbourne",
  openGraph: {
    title: "Website Design Melbourne | Prime Reach Digital",
    description: "Melbourne website design agency building fast, modern websites for local businesses.",
    type: "website",
  },
};

const benefits = [
  "Fast-loading, mobile-first websites built to convert visitors into calls",
  "SEO-ready structure from day one — no expensive rebuilds later",
  "Custom design that matches your brand — not a generic template",
  "Ongoing website management so you never worry about updates",
  "Built by a Melbourne team who understands local business needs",
];

const faqs = [
  {
    q: "How much does a website cost in Melbourne?",
    a: "Pricing depends on the size and complexity of your website. We offer a free consultation to understand your goals and provide a tailored quote — no generic templates, no hidden fees.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most small business websites take 2-4 weeks from initial consultation to launch, depending on content and revisions needed.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Every website we build is structured with SEO best practices from the ground up — fast loading speed, mobile optimisation, and proper page structure — giving you the best possible starting point to rank.",
  },
  {
    q: "Do you offer ongoing website management?",
    a: "Yes. We offer website management packages so you never have to worry about updates, security, or making changes yourself — we handle it all for a simple monthly fee.",
  },
];

export default function WebsiteDesignMelbourne() {
  return (
    <main className="min-h-screen bg-[var(--pr-black)] text-white overflow-x-hidden">
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
          Melbourne Website Design Agency
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Website Design Melbourne Businesses Use to Turn Visitors Into Customers
        </h1>
        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          Your website is often the first impression a potential customer has of your business.
          We design fast, modern, mobile-first websites for Melbourne businesses that build
          trust instantly and convert visitors into paying customers.
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
        <h2 className="text-3xl font-bold text-white mb-6">Why Your Website Matters More Than You Think</h2>
        <p className="text-[var(--text-dim)] text-base leading-relaxed max-w-3xl mb-8">
          Most customers judge a business within seconds of landing on its website. A slow,
          outdated, or hard-to-navigate site loses trust — and customers — instantly. We build
          websites designed to keep visitors engaged and guide them straight to contacting you.
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
        <h2 className="text-3xl font-bold text-white mb-6">Our Website Design Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { step: "01", title: "Discovery & Strategy", desc: "We learn about your business, customers, and goals to plan a website that actually converts." },
            { step: "02", title: "Custom Design", desc: "We design a unique layout matching your brand — never a generic template." },
            { step: "03", title: "Build & SEO Setup", desc: "We build a fast, mobile-first website with SEO best practices baked in from day one." },
            { step: "04", title: "Launch & Ongoing Support", desc: "We launch your site and offer ongoing management so it's always fast, secure, and up to date." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-[var(--pr-navy)]">
              <span className="text-[var(--pr-blue)] font-bold text-sm">{item.step}</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-2">{item.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold text-lg mb-2">{f.q}</h3>
              <p className="text-[var(--text-dim)] text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contact-cta" className="max-w-5xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Website That Converts?</h2>
        <p className="text-[var(--text-muted)] text-base mb-8 max-w-xl mx-auto">
          Book a free strategy call and let&apos;s design a website that turns visitors into
          paying customers.
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
