"use client";

import { motion } from "framer-motion";
import { TrendingUp, Lock } from "lucide-react";

const placeholders = [
  {
    industry: "Restaurant — Melbourne CBD",
    metric1: { label: "Monthly bookings", before: "140", after: "310" },
    metric2: { label: "Google ranking", before: "Page 3", after: "Position 1" },
    channel: "SEO + Google Business",
    timeframe: "6 months",
  },
  {
    industry: "Cleaning Company — Bayside",
    metric1: { label: "Monthly leads", before: "8", after: "34" },
    metric2: { label: "Cost per lead", before: "$85", after: "$22" },
    channel: "Google Ads",
    timeframe: "3 months",
  },
  {
    industry: "Mechanic — Northern Suburbs",
    metric1: { label: "Phone calls/month", before: "22", after: "71" },
    metric2: { label: "Google Maps rank", before: "Not visible", after: "Top 3" },
    channel: "Google Business + SEO",
    timeframe: "4 months",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Case Studies
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Real Results for{" "}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Numbers don&apos;t lie. Here&apos;s what we&apos;ve achieved for businesses like
            yours across Melbourne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0D1526] overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-white/5 flex items-center gap-2">
                <TrendingUp size={16} className="text-blue-400" />
                <span className="text-white text-sm font-semibold">
                  {cs.industry}
                </span>
              </div>

              {/* Metrics */}
              <div className="px-6 py-6 space-y-5">
                {[cs.metric1, cs.metric2].map((m, j) => (
                  <div key={j}>
                    <p className="text-slate-500 text-xs mb-2">{m.label}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-600 line-through text-lg font-semibold">
                        {m.before}
                      </span>
                      <span className="text-slate-500 text-sm">→</span>
                      <span className="text-white text-xl font-bold">
                        {m.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {cs.channel}
                </span>
                <span className="text-slate-600 text-xs">{cs.timeframe}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer / coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-2 text-slate-600 text-sm"
        >
          <Lock size={14} />
          <span>
            Client names withheld for privacy. Full case studies available on
            your strategy call.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
