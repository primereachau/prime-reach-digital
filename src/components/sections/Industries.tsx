"use client";

import { motion } from "framer-motion";
import { Utensils, Sparkles, Car, Wrench, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description:
      "Fill tables and grow takeaway orders with local SEO, Google Business, and targeted social ads that reach hungry customers nearby.",
    results: "Avg. 40% more bookings",
  },
  {
    icon: Sparkles,
    title: "Cleaning Companies",
    description:
      "Generate a consistent stream of residential and commercial cleaning enquiries with Google Ads and a professional website.",
    results: "Avg. 3× more leads",
  },
  {
    icon: Car,
    title: "Mechanics & Auto",
    description:
      "Show up when locals search for mechanics, tyres, or car services. We keep your Google Business and ads running 24/7.",
    results: "Dominate local search",
  },
  {
    icon: Wrench,
    title: "Trades & Construction",
    description:
      "Plumbers, electricians, builders — we build your digital presence so you get enquiries while you're on the tools.",
    results: "More qualified jobs",
  },
  {
    icon: Briefcase,
    title: "Local Service Businesses",
    description:
      "Any local business that relies on customers in their area — we build the systems to bring them to you consistently.",
    results: "Predictable growth",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">
            Who We Help
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Built for{" "}
            <span className="gradient-text">Australian Local Businesses</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            We understand your industry, your customers, and what it takes to
            win in your local market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-7 rounded-2xl border border-white/5 bg-[#0D1526] hover:border-red-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon + Result badge row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition-colors duration-300">
                    <Icon size={22} className="text-red-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {ind.results}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-2">
                  {ind.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative p-7 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-[#0D1526] flex flex-col justify-between"
          >
            <div>
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
                Not on the list?
              </p>
              <h3 className="text-white font-bold text-xl mb-3">
                We work with any local service business in Australia
              </h3>
              <p className="text-slate-500 text-sm">
                If you serve local customers and want more of them, we can help.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
            >
              Talk to Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
