"use client";

import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const reasons = [
  {
    title: "We focus only on local Australian businesses",
    description:
      "We're not a global agency juggling enterprise clients. Every strategy we build is for local business owners like you.",
  },
  {
    title: "You own everything we build",
    description:
      "Your website, ad accounts, and content are 100% yours. No lock-in. If you leave, you take everything with you.",
  },
  {
    title: "Transparent reporting every month",
    description:
      "No confusing dashboards or vanity metrics. You get a plain-English report showing exactly what your money is doing.",
  },
  {
    title: "We act like a partner, not a vendor",
    description:
      "You get direct access to your account manager — not a support ticket queue. We're invested in your growth.",
  },
  {
    title: "Results-first approach",
    description:
      "Every decision we make is tied to one thing: more leads and revenue for your business. Not awards. Not theory.",
  },
  {
    title: "Melbourne-based and Australian-owned",
    description:
      "We understand the Australian market, local customer behaviour, and what works for businesses here.",
  },
];

const theyDont = [
  "Lock you into long contracts",
  "Outsource your work overseas",
  "Hide your ad spend in confusing reports",
  "Ignore you after onboarding",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
            Why Prime Reach
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            What Makes Us{" "}
            <span className="gradient-text">Different</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            There are a lot of agencies out there. Here&apos;s why business owners in
            Melbourne choose us — and stay with us.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-2xl border border-white/5 bg-[#0D1526]"
              >
                <CheckCircle2 size={20} className="text-blue-400 mb-3" />
                <h3 className="text-white font-semibold text-sm mb-2">
                  {r.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* vs others panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/5 bg-[#0D1526] overflow-hidden"
          >
            <div className="px-7 py-5 border-b border-white/5">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
                Other agencies will...
              </p>
            </div>
            <div className="px-7 py-6 space-y-4">
              {theyDont.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-red-400" />
                  </div>
                  <p className="text-slate-400 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="px-7 pb-7">
              <div className="rounded-xl bg-gradient-to-br from-blue-900/30 to-[#040B18] border border-blue-500/10 p-6">
                <p className="text-white font-semibold mb-1">
                  We do the opposite.
                </p>
                <p className="text-slate-400 text-sm">
                  Month-to-month agreements. Full transparency. Your success is
                  our business model.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center px-5 py-2.5 rounded-lg bg-[#DC2626] hover:bg-[#EF4444] text-white text-sm font-semibold transition-colors duration-200 cursor-pointer"
                >
                  See for yourself — Book a call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
