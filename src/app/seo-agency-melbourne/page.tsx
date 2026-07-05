import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "SEO Agency Melbourne | Local SEO Experts | Prime Reach Digital",
  description:
    "Melbourne's local SEO agency helping businesses rank #1 on Google. We specialise in Google SEO, Google Business Profile optimisation, and local search rankings for Melbourne businesses.",
  keywords:
    "SEO agency Melbourne, local SEO Melbourne, SEO company Melbourne, Google ranking Melbourne, digital marketing agency Melbourne, SEO services Melbourne",
  openGraph: {
    title: "SEO Agency Melbourne | Prime Reach Digital",
    description: "Melbourne's local SEO agency helping businesses rank #1 on Google.",
    type: "website",
  },
};

const benefits = [
  "Rank higher for searches like 'near me' and your suburb name",
  "Show up in the Google Map Pack — the top 3 local results",
  "More phone calls and enquiries without paying for ads",
  "Long-term, sustainable growth that keeps working for years",
  "Full transparency — you see exactly what we do and why",
];

const faqs = [
  {
    q: "How long does SEO take to work in Melbourne?",
    a: "Most Melbourne businesses start seeing meaningful ranking improvements within 3-6 months, with significant results by month 6-12. SEO is a long-term investment, but unlike paid ads, the results compound and keep working even after the initial work is done.",
  },
  {
    q: "How much does SEO cost in Melbourne?",
    a: "Pricing depends on your industry, competition, and goals. We offer a free strategy call to assess your current Google presence and give you a tailored quote — no obligation.",
  },
  {
    q: "Do you guarantee first page rankings?",
    a: "No ethical SEO agency can guarantee specific rankings, as Google's algorithm is constantly changing. What we do guarantee is a proven process, full transparency, and measurable improvements in your visibility and leads.",
  },
  {
    q: "What's the difference between SEO and Google Ads?",
    a: "Google Ads gets you instant visibility but stops working the moment you stop paying. SEO takes longer to build but keeps generating free leads long-term. Most of our clients use both — Ads for immediate leads, SEO for long-term growth.",
  },
];

export default function SEOAgencyMelbourne() {
  return (
    <main className="min-h-screen bg-[var(--pr-black)] text-white overflow-x-hidden">
      {/* Header */}
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

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <span className="text-[var(--pr-blue)] text-xs font-semibold uppercase tracking-[0.2em]">
          Melbourne's Local SEO Specialists
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          The SEO Agency Melbourne Businesses Trust to Rank #1 on Google
        </h1>
        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          If your business isn&apos;t showing up when Melbourne customers search on Google, you&apos;re
          losing them to competitors who do. Prime Reach Digital is a Melbourne-based SEO agency
          that helps local businesses climb Google rankings, dominate the Map Pack, and turn
          searches into paying customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#contact-cta"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[var(--pr-crimson)] hover:bg-[var(--pr-crimson-light)] transition-colors font-semibold text-white text-base"
          >
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
          <a
            href="tel:0490881483"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass border border-[var(--pr-blue)]/30 hover:border-[var(--pr-blue)]/60 text-white font-semibold text-base transition-all"
          >
            <Phone size={16} className="text-[var(--pr-blue)]" />
            0490 881 483
          </a>
        </div>
      </div>

      {/* Why SEO matters */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Why Melbourne Businesses Need Local SEO</h2>
        <p className="text-[var(--text-dim)] text-base leading-relaxed max-w-3xl mb-8">
          Over 90% of consumers search Google before choosing a local business. If you&apos;re not
          ranking on the first page — especially in the Google Map Pack — you&apos;re invisible to
          the majority of potential customers actively searching for what you offer right now.
          As a dedicated SEO agency in Melbourne, we help you claim that visibility.
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

      {/* Our SEO Process */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Our Local SEO Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { step: "01", title: "Technical & Local Audit", desc: "We analyse your current website, Google Business Profile, and competitors to find exactly what's holding you back." },
            { step: "02", title: "Google Business Profile Optimisation", desc: "We optimise your listing — categories, photos, posts, and reviews — so you dominate the Map Pack." },
            { step: "03", title: "On-Page & Content SEO", desc: "We rewrite and structure your website content to target the exact searches your customers use." },
            { step: "04", title: "Ongoing Reporting & Growth", desc: "We track rankings, calls, and leads monthly — so you always know exactly what's working." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-[var(--pr-navy)]">
              <span className="text-[var(--pr-blue)] font-bold text-sm">{item.step}</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-2">{item.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
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

      {/* CTA */}
      <div id="contact-cta" className="max-w-5xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Rank #1 on Google?
        </h2>
        <p className="text-[var(--text-muted)] text-base mb-8 max-w-xl mx-auto">
          Book a free, no-obligation strategy call and find out exactly what&apos;s stopping your
          business from ranking higher on Google.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[var(--pr-crimson)] hover:bg-[var(--pr-crimson-light)] transition-colors font-semibold text-white text-base"
        >
          Book Your Free Strategy Call
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-faint)] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/" className="text-xs text-[var(--pr-blue)] hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
