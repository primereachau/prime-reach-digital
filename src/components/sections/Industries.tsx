"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Utensils, Sparkles, Car, Wrench, Briefcase, Hammer, ArrowUpRight } from "lucide-react";

const industries = [
  {
    icon: Car,
    color: "#9333EA",
    bg: "rgba(147,51,234,0.12)",
    title: "Mechanics & Auto",
    desc: "Show up when locals search for mechanics, tyres, and car services. Own the search results in your suburb.",
    result: "Dominate local search",
  },
  {
    icon: Wrench,
    color: "var(--pr-crimson)",
    bg: "rgba(255,23,68,0.12)",
    title: "Trades & Construction",
    desc: "Plumbers, electricians, builders — we bring qualified jobs straight to your phone.",
    result: "More qualified jobs",
  },
  {
    icon: Sparkles,
    color: "var(--pr-blue)",
    bg: "rgba(0,102,255,0.12)",
    title: "Cleaning Companies",
    desc: "Generate consistent residential and commercial cleaning enquiries every single month.",
    result: "3× more leads",
  },
  {
    icon: Utensils,
    color: "#FF6B35",
    bg: "rgba(255,107,53,0.12)",
    title: "Restaurants & Cafes",
    desc: "Fill tables, grow takeaway orders, and build a loyal local following that keeps coming back.",
    result: "+40% more bookings",
  },
  {
    icon: Briefcase,
    color: "#00BCD4",
    bg: "rgba(0,188,212,0.12)",
    title: "Local Service Businesses",
    desc: "Any local business that relies on customers in their area — if you serve locals, we grow it.",
    result: "Predictable growth",
  },
  {
    icon: Hammer,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.12)",
    title: "Handyman Services",
    desc: "Get found by homeowners who need odd jobs done. More calls, more bookings, less time chasing work.",
    result: "More calls daily",
  },
];

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--pr-crimson)]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,23,68,0.06) 0%, transparent 70%)", transform: "translateY(-50%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
                Built for
                <br />
                <span className="gradient-text-brand">Australian</span>
                <br />
                Local Business.
              </h2>
              <p className="mt-5 text-[var(--text-muted)] text-lg leading-relaxed max-w-sm">
                We understand your industry, your customers, and what it takes to win in your
                local market — not just in theory, but in practice.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl bg-[var(--pr-crimson)] text-white text-sm font-semibold"
                data-cursor-cta
              >
                Talk to Us
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right — industry cards */}
          <div className="flex flex-col gap-3">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-white/[0.06] bg-[var(--pr-navy)] hover:border-white/[0.12] hover:bg-[#080e20] transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: ind.bg }}
                  >
                    <Icon size={26} style={{ color: ind.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-white font-bold text-xl leading-tight">{ind.title}</h3>
                      <span
                        className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
                        style={{ color: ind.color, backgroundColor: ind.bg }}
                      >
                        {ind.result}
                      </span>
                    </div>
                    <p className="text-[var(--text-muted)] text-base mt-2 leading-relaxed">{ind.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-5 rounded-2xl border border-[var(--pr-blue)]/20 bg-[var(--pr-blue)]/05"
            >
              <p className="text-[var(--pr-blue-light)] text-xs font-semibold uppercase tracking-widest mb-1">
                Not on the list?
              </p>
              <p className="text-white font-medium text-sm">
                We work with any local Australian service business. If you serve local customers,
                we can help you get more of them.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
