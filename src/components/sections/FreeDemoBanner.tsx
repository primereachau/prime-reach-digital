"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function FreeDemoBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-16 lg:py-20 overflow-hidden">
      {/* Bold gradient background — crimson-dominant to stand apart from the blue/navy sections around it */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(255,23,68,0.18) 0%, rgba(255,23,68,0.04) 50%, rgba(0,102,255,0.08) 100%)" }}
      />
      <div className="absolute inset-0 border-y-2 border-[var(--pr-crimson)]/25" />

      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,23,68,0.15) 0%, transparent 70%)", transform: "translateY(-50%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          {/* Icon with pulse ring */}
          <div className="relative flex-shrink-0">
            <span className="absolute inset-0 rounded-2xl bg-[var(--pr-crimson)]/40 animate-ping" />
            <div className="relative w-20 h-20 rounded-2xl bg-[var(--pr-crimson)] flex items-center justify-center shadow-lg shadow-[var(--pr-crimson)]/30">
              <ShieldCheck size={36} className="text-white" />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--pr-crimson)]/15 border border-[var(--pr-crimson)]/30 text-[var(--pr-crimson)] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--pr-crimson)] animate-pulse" />
              100% Free · No Obligation
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
              See Your New Website —{" "}
              <span className="gradient-text-brand">Before You Pay a Cent.</span>
            </h2>
            <p className="mt-4 text-[var(--text-dim)] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We build you a free, working demo of your website first. Like it? We move forward
              together. If not, walk away with nothing owed.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/website-design-melbourne"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl overflow-hidden font-semibold text-white text-base whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-[var(--pr-crimson)]" />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, var(--pr-crimson), #FF6B6B)" }}
              />
              <span className="relative z-10">See How It Works</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
