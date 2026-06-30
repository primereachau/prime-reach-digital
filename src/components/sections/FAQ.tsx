"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long until I start seeing results?",
    a: "It depends on the service. Google Ads can generate leads within days of launching. SEO typically takes 3–6 months to build momentum. We always set realistic expectations upfront and show you progress along the way.",
  },
  {
    q: "How much does it cost?",
    a: "Every business is different, so we don't have one-size-fits-all pricing. After your free strategy call, we'll put together a proposal tailored to your goals and budget. We work with local businesses of all sizes.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. We operate on month-to-month agreements because we believe in earning your business every single month. You're never locked in.",
  },
  {
    q: "Will I own my website and ad accounts?",
    a: "Absolutely. Everything we build belongs to you — your website, your Google Ads account, your social pages. If you ever leave, you keep everything.",
  },
  {
    q: "What do I need to get started?",
    a: "Nothing except 30 minutes for a strategy call. We handle everything from there — setup, strategy, creative, and ongoing management.",
  },
  {
    q: "Do you work with businesses outside Melbourne?",
    a: "Yes. While we're based in Melbourne and focus on Australian businesses, we work with clients across Australia. Most of our work is done remotely, so location isn't a barrier.",
  },
  {
    q: "How will I know if it's working?",
    a: "You'll receive a clear monthly report showing leads, calls, rankings, ad spend, and ROI. No confusing dashboards — just plain English so you know exactly where your money is going.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      >
        <span className="text-white font-medium pr-8 group-hover:text-blue-300 transition-colors duration-200">
          {q}
        </span>
        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center">
          {open ? (
            <Minus size={14} className="text-blue-400" />
          ) : (
            <Plus size={14} className="text-slate-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Questions?{" "}
              <span className="gradient-text">We&apos;ve Got Answers</span>
            </h2>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              Everything you need to know before working with us. Can&apos;t find
              your answer here?
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold text-sm transition-colors duration-200 cursor-pointer"
            >
              Ask us directly
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-[#0D1526] px-7"
          >
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
