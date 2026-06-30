"use client";

import { motion } from "framer-motion";
import { PhoneCall, Search, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Strategy Call",
    description:
      "We start with a no-obligation call to understand your business, goals, competitors, and current online presence.",
  },
  {
    icon: Search,
    step: "02",
    title: "Audit & Roadmap",
    description:
      "We audit your website, Google presence, and ad accounts — then build a custom growth roadmap tailored to your business.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Implement",
    description:
      "We build, set up, and launch your campaigns and assets. You review and approve everything before anything goes live.",
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Track, Report & Grow",
    description:
      "Every month you get a clear report showing results — calls, leads, rankings, ad spend — and we keep optimising to grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            A Simple Process That{" "}
            <span className="gradient-text">Gets Results</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            No jargon, no confusion. Just a clear, proven process from first
            call to consistent growth.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full border border-blue-500/20 bg-[#0D1526] flex flex-col items-center justify-center gap-1">
                      <Icon size={26} className="text-blue-400" />
                      <span className="text-blue-500/60 text-xs font-bold">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold text-lg transition-all duration-200 cursor-pointer hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-0.5"
          >
            Start with a Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
