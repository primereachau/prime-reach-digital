import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Google Business Profile Management Melbourne | Prime Reach Digital",
  description:
    "Melbourne Google Business Profile management to help your business dominate the Google Map Pack. Optimisation, reviews management, and local visibility.",
  keywords:
    "Google Business Profile Melbourne, Google My Business Melbourne, Google Maps ranking Melbourne, local SEO Melbourne, Google Business Profile management",
  openGraph: {
    title: "Google Business Profile Management Melbourne | Prime Reach Digital",
    description: "Melbourne Google Business Profile management to help you dominate the Map Pack.",
    type: "website",
  },
};

const benefits = [
  "Appear in the Google Map Pack — the 3 businesses shown with the map",
  "Show up when customers search 'near me' in your suburb",
  "Build trust instantly with reviews, photos, and accurate business info",
  "Get found on Google Search and Google Maps at the same time",
  "Free to set up — we optimise it to work harder for your business",
];

const faqs = [
  {
    q: "What is a Google Business Profile?",
    a: "It's your free business listing on Google that shows up in Search and Maps — displaying your name, address or service area, phone number, hours, reviews and photos. It's essential for any Melbourne business wanting local customers.",
  },
  {
    q: "Do I need a physical address to have a Google Business Profile?",
    a: "No. If you're a service-based business without a storefront, you can set up a Service Area Business profile that hides your address but still shows you serve specific suburbs.",
  },
  {
    q: "How do I get more Google reviews?",
    a: "The best way is to simply ask happy customers directly after a completed job, and make it easy by sending them your direct review link. We help set up review request systems for our clients.",
  },
  {
    q: "How long does it take to rank in the Map Pack?",
    a: "It varies by competition and industry, but with consistent optimisation, reviews, and posts, most Melbourne businesses see meaningful improvement within 2-3 months.",
  },
];

export default function GoogleBusinessProfileMelbourne() {
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
          Melbourne Google Business Profile Experts
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Google Business Profile Management to Dominate the Map Pack in Melbourne
        </h1>
        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          The Google Map Pack is the first thing customers see when they search for a local
          business. We optimise your Google Business Profile so you show up above your
          competitors — with the reviews, photos, and information that turns searches into calls.
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
        <h2 className="text-3xl font-bold text-white mb-6">Why Your Google Business Profile Matters</h2>
        <p className="text-[var(--text-dim)] text-base leading-relaxed max-w-3xl mb-8">
          For local businesses, your Google Business Profile is often more important than your
          website. It's what shows up first when customers search — with your reviews, photos,
          hours and phone number all visible before they even click through to your site.
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
        <h2 className="text-3xl font-bold text-white mb-6">Our Google Business Profile Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { step: "01", title: "Profile Audit & Setup", desc: "We audit your existing profile (or create one) with the right category, service areas, and information." },
            { step: "02", title: "Optimisation", desc: "We optimise photos, description, services, and posts to maximise visibility and clicks." },
            { step: "03", title: "Review Strategy", desc: "We set up a simple system to help you collect more 5-star reviews from happy customers." },
            { step: "04", title: "Ongoing Management", desc: "We post regular updates and monitor performance to keep your profile active and ranking." },
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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Dominate the Map Pack?</h2>
        <p className="text-[var(--text-muted)] text-base mb-8 max-w-xl mx-auto">
          Book a free strategy call and find out how we can optimise your Google Business Profile
          for more local customers.
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
