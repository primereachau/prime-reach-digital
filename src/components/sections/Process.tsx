"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { PhoneCall, FileSearch, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: PhoneCall,
    color: "var(--pr-blue)",
    bg: "rgba(0,102,255,0.12)",
    title: "Free Strategy Call",
    desc: "We start with a no-obligation 30-minute call to understand your business, goals, competitors, and current online presence. No pushy sales. Just an honest conversation.",
    detail: "30 minutes · Zero obligation",
  },
  {
    num: "02",
    icon: FileSearch,
    color: "#9333EA",
    bg: "rgba(147,51,234,0.12)",
    title: "Audit & Roadmap",
    desc: "We audit your website, Google presence, social media, and ad accounts. Then we build a custom growth roadmap showing exactly what we'd do and why.",
    detail: "Delivered within 48 hours",
  },
  {
    num: "03",
    icon: Rocket,
    color: "#FF6B35",
    bg: "rgba(255,107,53,0.12)",
    title: "Launch & Implement",
    desc: "We build, set up, and launch your campaigns and digital assets. You review and approve everything before it goes live. Your business, your brand, your control.",
    detail: "Typical launch: 2–3 weeks",
  },
  {
    num: "04",
    icon: BarChart3,
    color: "#00C853",
    bg: "rgba(0,200,83,0.12)",
    title: "Track, Report & Grow",
    desc: "Every month you receive a plain-English report showing calls, leads, rankings, and ad performance. We keep optimising — your results compound over time.",
    detail: "Monthly · Every month",
  },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex gap-6 lg:gap-10"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        {/* Icon circle */}
        <div
          className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border"
          style={{ backgroundColor: step.bg, borderColor: `${step.color}30` }}
        >
          <Icon size={22} style={{ color: step.color }} />
        </div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${step.color}40, transparent)` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 lg:pb-16 pt-1 flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>
            STEP {step.num}
          </span>
          <span className="text-xs text-[var(--text-faint)] border border-white/[0.05] px-2.5 py-0.5 rounded-full">
            {step.detail}
          </span>
        </div>
        <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 tracking-tight">
          {step.title}
        </h3>
        <p className="text-[var(--text-dimmer)] text-base leading-relaxed max-w-lg">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="process" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--pr-blue)]/20 to-transparent" />

      {/* Glow */}
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)", transform: "translateY(-50%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                A Simple Process.
                <br />
                <span className="gradient-text-blue">Real Results.</span>
              </h2>
              <p className="mt-4 text-[var(--text-muted)] text-lg leading-relaxed">
                No jargon. No confusion. From first call to consistent growth — here&apos;s exactly
                what working with us looks like.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-xl bg-[var(--pr-blue)] text-white text-sm font-semibold"
                data-cursor-cta
              >
                Start With a Free Call
              </motion.a>
            </motion.div>
          </div>

          {/* Right — steps */}
          <div className="mt-2">
            {steps.map((step, i) => (
              <Step key={i} step={step} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
