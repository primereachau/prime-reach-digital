"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long until I start seeing results?",
    a: "Google Ads can generate leads within days of launching. SEO typically takes 3–6 months to build serious momentum. We set realistic expectations from day one and share progress reports so you always know where you stand.",
  },
  {
    q: "How much does it cost?",
    a: "Every business is different, so we don't do one-size-fits-all pricing. After your free strategy call, we'll build a proposal tailored to your goals and budget. We work with businesses of all sizes across Melbourne.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. We operate on month-to-month agreements because we believe in earning your business every single month. You're never locked in — you stay because you want to, not because you have to.",
  },
  {
    q: "Will I own my website and ad accounts?",
    a: "100%. Everything we build belongs to you — your website, your Google Ads account, your Meta account, your social pages. If you ever leave, you take everything with you, no questions asked.",
  },
  {
    q: "What do I need to get started?",
    a: "Just 30 minutes for a strategy call. We handle everything from there — setup, strategy, creative, copy, and ongoing management. You focus on running your business, we handle the digital side.",
  },
  {
    q: "How will I know if it's actually working?",
    a: "You get a plain-English monthly report showing calls generated, leads, keyword rankings, ad spend, and ROI. No confusing dashboards or vanity metrics — just the numbers that affect your bottom line.",
  },
  {
    q: "Do you work with businesses outside Melbourne?",
    a: "Yes. We're Melbourne-based and focused on Australian businesses, but most of our work is done remotely. We have clients across Victoria, NSW, and QLD. Location is never a barrier.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-white/[0.06] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 lg:py-6 text-left group"
      >
        <span className="text-white font-medium text-base lg:text-[17px] pr-8 group-hover:text-[var(--pr-blue-light)] transition-colors duration-200 leading-snug">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full glass border border-white/[0.08] flex items-center justify-center"
        >
          <Plus size={14} className="text-[var(--text-muted)]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[var(--text-muted)] text-base leading-relaxed pb-6 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="faq" ref={ref} className="relative py-28 lg:py-36">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--pr-crimson)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                Questions?
                <br />
                <span className="gradient-text-brand">We&apos;ve Got Answers.</span>
              </h2>
              <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
                Everything you need to know before working with us.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 text-[var(--pr-blue-light)] text-sm font-medium hover:text-white transition-colors"
              >
                Still have questions? Talk to us →
              </a>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div className="glass rounded-2xl px-8 lg:px-10 py-2">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
