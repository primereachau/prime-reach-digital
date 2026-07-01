"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Search, Phone } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import MagneticButton from "@/components/ui/MagneticButton";

const words = ["We Get Local Businesses", "Found on Google.", "More Customers. More Growth."];
const stats = [
  { icon: Search, value: "#1", label: "Google Rankings", color: "#0066FF" },
  { icon: TrendingUp, value: "3×", label: "More Enquiries", color: "#00C853" },
  { icon: Zap, value: "24h", label: "Response Time", color: "#FF1744" },
];

// Google SERP result mockup rows
const serpResults = [
  { rank: 1, name: "Your Business", url: "yourbusiness.com.au", featured: true },
  { rank: 2, name: "Competitor A", url: "competitor-a.com.au", featured: false },
  { rank: 3, name: "Competitor B", url: "competitor-b.com.au", featured: false },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useSpring(useTransform(mouseX, [0, 1], [-25, 25]), { stiffness: 60, damping: 20 });
  const orb1Y = useSpring(useTransform(mouseY, [0, 1], [-25, 25]), { stiffness: 60, damping: 20 });
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [25, -25]), { stiffness: 40, damping: 18 });
  const orb2Y = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 40, damping: 18 });

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 2 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[68px]">

      {/* ── Background ── */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Blue orb */}
      <motion.div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none orb-animate"
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,0.18) 0%, rgba(0,102,255,0.04) 50%, transparent 70%)",
          x: orb1X, y: orb1Y,
        }}
      />

      {/* Crimson orb */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none orb-animate-reverse"
        style={{
          background: "radial-gradient(circle, rgba(255,23,68,0.14) 0%, rgba(255,23,68,0.03) 50%, transparent 70%)",
          x: orb2X, y: orb2Y,
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,102,255,0.08) 0%, transparent 70%)" }}
      />

      {/* ── Content — fully centred ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col items-center text-center py-20 lg:py-28">

          {/* Badge */}
          <AnimatePresence>
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 mb-8"
              >
                <span className="flex items-center gap-2 glass border border-[#0066FF]/20 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] shadow-[0_0_6px_#00C853]" />
                  <span className="text-[#94a3b8] text-xs font-medium tracking-wide">
                    Melbourne&apos;s Local SEO Specialists
                  </span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-6 overflow-hidden"
          >
            {words.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div variants={lineVariants}>
                  <span
                    className={`block font-bold leading-[1.05] tracking-tight ${
                      i === 2
                        ? "gradient-text-brand text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                        : "text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                    }`}
                  >
                    {line}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            transition={{ delay: 0.7 }}
            className="text-[#64748B] text-lg leading-relaxed max-w-2xl mb-10"
          >
            If customers can&apos;t find you on Google, they&apos;re calling your competitor. We specialise
            in getting Melbourne local businesses to the top of Google — more calls, more
            bookings, more growth.
          </motion.p>

          {/* CTAs — centred */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <MagneticButton data-cursor-cta={true}>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl overflow-hidden font-semibold text-white text-base"
              >
                <span className="absolute inset-0 bg-[#FF1744] transition-transform duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #FF1744 0%, #FF6B6B 100%)" }}
                />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 bg-[#FF1744]" />
                <span className="relative z-10">Book a Free Strategy Call</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="tel:0490881483"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass border border-[#0066FF]/30 hover:border-[#0066FF]/60 text-white font-semibold text-base transition-all duration-300"
              >
                <Phone size={16} className="text-[#0066FF]" />
                <span>0490 881 483</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats row — centred */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-16"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${s.color}15` }}
                  >
                    <Icon size={14} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">{s.value}</div>
                    <div className="text-[#475569] text-xs">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mockups row — stacked on mobile, side by side on desktop */}
          <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6" style={{maxWidth: "900px"}}>

          {/* LEFT: Google Local Pack */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-md mx-auto xl:mx-0 xl:max-w-[420px] flex-shrink-0"
          >
            {/* Label above */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[#64748B] text-[11px] font-medium px-2">This is what Google looks like</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google card — white background, looks real */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">

              {/* Google search bar */}
              <div className="bg-[#202124] px-4 py-3 flex items-center gap-3">
                {/* Google logo */}
                <svg viewBox="0 0 74 24" width="48" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
                  <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
                  <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.49 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
                  <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
                  <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
                  <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
                </svg>
                {/* Search input */}
                <div className="flex-1 bg-[#303134] rounded-full px-4 py-1.5 flex items-center gap-2">
                  <span className="text-[#e8eaed] text-[11px] truncate">plumber near me Melbourne</span>
                </div>
              </div>

              {/* Map strip */}
              <div className="relative h-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #e8ead0 0%, #d5d9b8 100%)" }}>
                {/* Street grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#c5c9a8" strokeWidth="2"/>
                  <line x1="0" y1="60" x2="500" y2="60" stroke="#c5c9a8" strokeWidth="2"/>
                  <line x1="80" y1="0" x2="80" y2="80" stroke="#c5c9a8" strokeWidth="2"/>
                  <line x1="200" y1="0" x2="200" y2="80" stroke="#c5c9a8" strokeWidth="2"/>
                  <line x1="320" y1="0" x2="320" y2="80" stroke="#c5c9a8" strokeWidth="2"/>
                  <rect x="85" y="5" width="40" height="20" rx="2" fill="#d4d8bc" stroke="#b8bca0" strokeWidth="1"/>
                  <rect x="205" y="35" width="50" height="20" rx="2" fill="#d4d8bc" stroke="#b8bca0" strokeWidth="1"/>
                  <rect x="130" y="42" width="35" height="15" rx="2" fill="#d4d8bc" stroke="#b8bca0" strokeWidth="1"/>
                </svg>
                {/* Pin #1 - YOUR client (highlighted) */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={mounted ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.4 }}
                  className="absolute"
                  style={{ left: "28%", top: "8px" }}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="bg-[#1a73e8] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap">Your Business</div>
                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#1a73e8]" />
                  </div>
                </motion.div>
                {/* Pin #2 */}
                <div className="absolute" style={{ left: "58%", top: "30px" }}>
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-[#70757a] flex items-center justify-center shadow">
                    <span className="text-[#70757a] text-[8px] font-bold">2</span>
                  </div>
                </div>
                {/* Pin #3 */}
                <div className="absolute" style={{ left: "72%", top: "10px" }}>
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-[#70757a] flex items-center justify-center shadow">
                    <span className="text-[#70757a] text-[8px] font-bold">3</span>
                  </div>
                </div>
                {/* Map attribution */}
                <div className="absolute bottom-1 right-2 text-[8px] text-[#70757a] opacity-60">Map data ©2024 Google</div>
              </div>

              {/* Local Pack listings */}
              <div className="bg-white">
                {/* Listing 1 — YOUR BUSINESS (highlighted) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={mounted ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                  className="px-4 py-3 border-b border-[#e8eaed] bg-[#f0f7ff]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[10px] font-bold bg-[#1a73e8] text-white px-1.5 py-0.5 rounded">1</span>
                        <span className="text-[#1a0dab] font-semibold text-sm truncate">Your Business Name</span>
                      </div>
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[#fbbc04] text-xs tracking-tighter">★★★★★</span>
                        <span className="text-[#70757a] text-[10px]">4.9</span>
                        <span className="text-[#70757a] text-[10px]">(47 reviews)</span>
                      </div>
                      <div className="text-[#70757a] text-[10px]">Plumber · Melbourne</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[#34a853] text-[10px] font-medium">Open</span>
                        <span className="text-[#70757a] text-[10px]">· Closes 6 pm · 0490 881 483</span>
                      </div>
                    </div>
                    {/* Thumbnail */}
                    <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden bg-[#1a73e8] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">PR</span>
                    </div>
                  </div>
                </motion.div>

                {/* Listings 2 & 3 — competitors (muted) */}
                {[
                  { n: 2, name: "FastFix Plumbing", rating: "4.2", reviews: "28", open: "Closes 5 pm" },
                  { n: 3, name: "Melbourne Plumbers Co.", rating: "3.8", reviews: "12", open: "Closes 4 pm" },
                ].map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={mounted ? { opacity: 0.45 } : {}}
                    transition={{ delay: 1.6 + i * 0.1 }}
                    className="px-4 py-2.5 border-b border-[#e8eaed] last:border-0"
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-bold bg-[#70757a] text-white px-1.5 py-0.5 rounded">{b.n}</span>
                      <span className="text-[#1a0dab] text-xs font-medium">{b.name}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-0.5">
                      <span className="text-[#fbbc04] text-[10px]">{"★".repeat(Math.round(parseFloat(b.rating)))}</span>
                      <span className="text-[#70757a] text-[10px]">{b.rating} ({b.reviews})</span>
                    </div>
                    <div className="text-[#70757a] text-[10px]">Plumber · <span className="text-[#ea4335]">Closes soon</span> · {b.open}</div>
                  </motion.div>
                ))}

                {/* Footer */}
                <div className="px-4 py-2 bg-[#f8f9fa] flex items-center justify-between">
                  <span className="text-[#1a73e8] text-[10px] font-medium">More businesses</span>
                  <span className="text-[#5f6368] text-[9px]">Sponsored · Report</span>
                </div>
              </div>
            </div>

            {/* CTA label below card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.9 }}
              className="mt-5 flex flex-col items-center gap-1"
            >
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-[#34A853]/40" />
                <span className="text-[#34A853] text-[11px] font-semibold uppercase tracking-[0.18em]">This is where people search</span>
                <div className="h-px w-8 bg-[#34A853]/40" />
              </div>
              <p className="text-white text-xl font-bold tracking-tight">
                We get your business to{" "}
                <span className="text-[#34A853]">Position #1</span>
              </p>
              <p className="text-[#64748B] text-sm">So customers find you — not your competitors.</p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Google Business Profile stats — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden xl:block w-full max-w-[320px] flex-shrink-0"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[#64748B] text-[11px] font-medium px-2">Your results dashboard</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 bg-white">
              {/* Header */}
              <div className="px-4 py-3 border-b border-[#e8eaed] flex items-center gap-2">
                <svg viewBox="0 0 74 24" width="48" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
                  <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
                  <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.49 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
                  <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
                  <path d="M58 .24h2.51v17.57H58z" fill="#34A853"/>
                  <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335"/>
                </svg>
                <span className="text-[#5f6368] text-[11px] font-medium">Business Profile · Last 28 days</span>
              </div>

              {/* Business info */}
              <div className="px-4 py-3 border-b border-[#e8eaed] flex items-center gap-3 bg-[#f8f9fa]">
                <div className="w-10 h-10 rounded-lg bg-[#1a73e8] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">PR</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[#1a1a1a] text-sm font-semibold">Your Business</div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#fbbc04] text-xs">★★★★★</span>
                    <span className="text-[#5f6368] text-[10px]">4.9 · 127 reviews</span>
                  </div>
                </div>
                <span className="text-[#34a853] text-[11px] font-semibold">● Open</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-0 divide-x divide-[#e8eaed]">
                <div className="px-3 py-4 text-center bg-[#e8f5e9]">
                  <div className="text-xl font-bold text-[#2e7d32]">847</div>
                  <div className="text-[10px] font-semibold text-[#388e3c] mt-0.5">Views</div>
                  <div className="text-[10px] text-[#34a853] mt-0.5">↑ 312%</div>
                </div>
                <div className="px-3 py-4 text-center bg-[#e3f2fd]">
                  <div className="text-xl font-bold text-[#1565c0]">234</div>
                  <div className="text-[10px] font-semibold text-[#1976d2] mt-0.5">Clicks</div>
                  <div className="text-[10px] text-[#1976d2] mt-0.5">↑ 189%</div>
                </div>
                <div className="px-3 py-4 text-center bg-[#fff3e0]">
                  <div className="text-xl font-bold text-[#e65100]">67</div>
                  <div className="text-[10px] font-semibold text-[#f57c00] mt-0.5">Calls</div>
                  <div className="text-[10px] text-[#f57c00] mt-0.5">↑ 240%</div>
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="px-4 py-3 border-t border-[#e8eaed]">
                <div className="text-[10px] text-[#5f6368] mb-2">Weekly calls</div>
                <div className="flex items-end gap-1 h-10">
                  {[15, 22, 18, 30, 28, 42, 38, 55, 50, 67].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-[#1a73e8]" style={{ height: `${(h / 67) * 100}%`, opacity: 0.3 + (i / 10) * 0.7 }} />
                  ))}
                </div>
              </div>

              <div className="px-4 py-2 bg-[#f8f9fa] border-t border-[#e8eaed]">
                <p className="text-[9px] text-[#5f6368] text-center">Compared to previous period</p>
              </div>
            </div>

            {/* Label below */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.0 }}
              className="mt-5 flex flex-col items-center gap-1"
            >
              <p className="text-white text-xl font-bold tracking-tight text-center">
                Real results, <span className="text-[#0066FF]">every month.</span>
              </p>
              <p className="text-[#64748B] text-sm text-center">We show you exactly what&apos;s working.</p>
            </motion.div>
          </motion.div>

          </div>{/* end mockups row */}

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1 h-1 rounded-full bg-white/30"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020816] to-transparent pointer-events-none" />
    </section>
  );
}
