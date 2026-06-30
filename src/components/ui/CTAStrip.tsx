"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTAStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(255,23,68,0.06) 100%)" }}
      />
      <div className="absolute inset-0 border-y border-white/[0.06]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <p className="text-[#64748B] text-sm uppercase tracking-widest font-medium mb-2">Ready to grow?</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Let&apos;s get your business to the{" "}
              <span className="gradient-text-brand">top of Google.</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              href="tel:0490881483"
              className="group flex items-center gap-3 glass border border-[#0066FF]/30 hover:border-[#0066FF]/60 px-6 py-3.5 rounded-xl transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/15 flex items-center justify-center group-hover:bg-[#0066FF]/25 transition-colors">
                <Phone size={15} className="text-[#0066FF]" />
              </div>
              <div>
                <div className="text-[#64748B] text-[10px] leading-none mb-0.5">Call us directly</div>
                <div className="text-white font-bold text-base tracking-wide">0490 881 483</div>
              </div>
            </a>

            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl overflow-hidden font-semibold text-white"
            >
              <span className="absolute inset-0 bg-[#FF1744]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #FF1744, #FF6B6B)" }}
              />
              <span className="relative z-10">Book a Free Call</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
