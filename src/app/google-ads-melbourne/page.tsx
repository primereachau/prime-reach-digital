import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Google Ads Management Melbourne | Prime Reach Digital",
  description:
    "Melbourne Google Ads agency helping local businesses generate qualified leads fast. Expert Google Ads management, campaign setup, and conversion optimisation.",
  keywords:
    "Google Ads Melbourne, Google Ads agency Melbourne, Google Ads management Melbourne, PPC agency Melbourne, paid search Melbourne",
  openGraph: {
    title: "Google Ads Management Melbourne | Prime Reach Digital",
    description: "Melbourne Google Ads agency helping local businesses generate qualified leads fast.",
    type: "website",
  },
};

const benefits = [
  "Appear at the top of Google instantly — no waiting months like SEO",
  "Only pay when someone clicks — full control over your budget",
  "Target the exact suburbs and services you want customers from",
  "Detailed reporting so you know exactly what your ad spend delivers",
  "Campaigns built and managed by a Melbourne-based specialist",
];

const faqs = [
  {
    q: "How much should I spend on Google Ads in Melbourne?",
    a: "Budgets vary widely by industry and competition. Many Melbourne local businesses start with $500-1500/month in ad spend. We assess your industry and goals on a free strategy call and recommend a realistic starting budget.",
  },
  {
    q: "How fast do Google Ads work?",
    a: "Unlike SEO, Google Ads can start generating leads within days of launching a campaign. We optimise continuously in the first few weeks to improve results and lower your cost per lead.",
  },
  {
    q: "Do you manage the ad account or do I need my own?",
    a: "We can set up and manage a Google Ads account on your behalf, or work within an existing account you already have. Either way, you retain full ownership and access to your account and data.",
  },
  {
    q: "What's the difference between Google Ads and SEO?",
    a: "Google Ads delivers instant visibility for as long as you pay. SEO takes longer to build but keeps generating free leads long-term. Most successful Melbourne businesses run both together for immediate and long-term results.",
  },
];

export default function GoogleAdsMelbourne() {
  return (
    <main className="min-h-screen bg-[#020816] text-white overflow-x-hidden">
      <div className="border-b border-white/[0.06] py-6 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#0066FF] flex items-center justify-center">
              <span className="text-white font-bold text-xs">PR</span>
            </div>
            <span className="text-white font-semibold text-[15px]">
              Prime<span className="text-[#0066FF]">Reach</span> Digital
            </span>
          </Link>
          <Link href="/" className="text-sm text-[#64748B] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <span className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em]">
          Melbourne Google Ads Specialists
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Google Ads Management Melbourne Businesses Rely On for Fast Leads
        </h1>
        <p className="mt-6 text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
          Waiting months for SEO to work isn&apos;t always an option. Our Google Ads campaigns
          put your business directly in front of Melbourne customers actively searching for
          your services — often generating qualified leads within days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="#contact-cta" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF1744] hover:bg-[#FF4D6D] transition-colors font-semibold text-white text-base">
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
          <a href="tel:0490881483" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass border border-[#0066FF]/30 hover:border-[#0066FF]/60 text-white font-semibold text-base transition-all">
            <Phone size={16} className="text-[#0066FF]" />
            0490 881 483
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Why Melbourne Businesses Choose Google Ads</h2>
        <p className="text-[#94a3b8] text-base leading-relaxed max-w-3xl mb-8">
          Google Ads puts you at the very top of search results — above organic rankings —
          the moment your campaign goes live. For Melbourne businesses that need leads now,
          not in six months, it&apos;s one of the fastest paths to growth.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
              <span className="text-[#94a3b8] text-sm leading-relaxed">{b}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 border-t border-white/[0.06]">
        <h2 className="text-3xl font-bold text-white mb-6">Our Google Ads Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { step: "01", title: "Strategy & Keyword Research", desc: "We find the exact searches your ideal customers use and calculate a realistic budget and cost per lead." },
            { step: "02", title: "Campaign Build & Launch", desc: "We build targeted campaigns with compelling ad copy and landing pages designed to convert clicks into calls." },
            { step: "03", title: "Conversion Tracking Setup", desc: "We set up call and form tracking so every dollar spent is measurable and accountable." },
            { step: "04", title: "Ongoing Optimisation", desc: "We continuously test and refine your campaigns to lower cost per lead and improve results month over month." },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-[#070d1f]">
              <span className="text-[#0066FF] font-bold text-sm">{item.step}</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-2">{item.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
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
              <p className="text-[#94a3b8] text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contact-cta" className="max-w-5xl mx-auto px-6 lg:px-10 py-16 border-t border-white/[0.06] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Leads This Week?</h2>
        <p className="text-[#64748B] text-base mb-8 max-w-xl mx-auto">
          Book a free strategy call and find out how Google Ads can start generating leads for
          your business fast.
        </p>
        <Link href="/#contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF1744] hover:bg-[#FF4D6D] transition-colors font-semibold text-white text-base">
          Book Your Free Strategy Call
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#334155] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/" className="text-xs text-[#0066FF] hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
