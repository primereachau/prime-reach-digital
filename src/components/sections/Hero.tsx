"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Search } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const words = ["We Get Local Businesses", "Found on Google.", "More Customers. More Growth."];
const stats = [
  { icon: Search, value: "#1", label: "Google Rankings", color: "#0066FF" },
  { icon: TrendingUp, value: "3×", label: "More Enquiries", color: "#00C853" },
  { icon: Zap, value: "24h", label: "Response Time", color: "#FF1744" },
];

const ticker = [
  "Google Ads", "SEO", "Meta Ads", "Website Design",
  "TikTok Ads", "Google Business", "Social Media", "Analytics",
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
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseX.set(e.clientX / w);
      mouseY.set(e.clientY / h);
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
    visible: {
      opacity: 1, y: 0, skewY: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[68px]">

      {/* ── Background ── */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Blue orb — top left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none orb-animate"
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,0.18) 0%, rgba(0,102,255,0.04) 50%, transparent 70%)",
          x: orb1X,
          y: orb1Y,
        }}
      />

      {/* Crimson orb — bottom right */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none orb-animate-reverse"
        style={{
          background: "radial-gradient(circle, rgba(255,23,68,0.14) 0%, rgba(255,23,68,0.03) 50%, transparent 70%)",
          x: orb2X,
          y: orb2Y,
        }}
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,102,255,0.08) 0%, transparent 70%)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center py-20 lg:py-28">

          {/* Left — text */}
          <div>
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
                      Melbourne&apos;s #1 Digital Growth Agency
                    </span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Headline — staggered word reveal */}
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
                          ? "gradient-text-brand text-5xl md:text-6xl lg:text-7xl"
                          : "text-white text-5xl md:text-6xl lg:text-7xl"
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
              className="text-[#64748B] text-lg leading-relaxed max-w-xl mb-10"
            >
              If customers can’t find you on Google, they’re calling your competitor. We specialise
              in getting Melbourne local businesses to the top of Google — more calls, more
              bookings, more growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
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
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#0066FF]/40 text-white font-semibold text-base transition-all duration-300 hover:bg-[#0066FF]/05"
                >
                  <span>See Our Services</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-6"
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
          </div>

          {/* Right — floating glass card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={mounted ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-strong rounded-2xl p-6 relative overflow-hidden">
                {/* Card glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#0066FF]/10 blur-2xl" />

                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#64748B] text-xs font-medium uppercase tracking-widest">Growth Overview</span>
                  <span className="text-[#00C853] text-xs font-semibold bg-[#00C853]/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C853]" />
                    Live
                  </span>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-28 mb-5">
                  {[40, 55, 48, 70, 62, 85, 78, 95, 88, 100, 94, 110].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        background: i > 8
                          ? "linear-gradient(to top, #0066FF, #3385FF)"
                          : "rgba(255,255,255,0.08)",
                      }}
                      initial={{ height: 0 }}
                      animate={mounted ? { height: `${h}%` } : {}}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-2xl font-bold">+247%</div>
                    <div className="text-[#64748B] text-xs">Leads this month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00C853] text-sm font-semibold">↑ 3.2×</div>
                    <div className="text-[#64748B] text-xs">vs last month</div>
                  </div>
                </div>
              </div>

              {/* Floating mini card 1 */}
              <motion.div
                className="absolute -top-6 -right-6 glass border border-white/[0.08] rounded-xl px-4 py-3 float"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 }}
              >
                <div className="text-white text-sm font-bold">4.9 ★★★★★</div>
                <div className="text-[#64748B] text-xs">Google Reviews</div>
              </motion.div>

              {/* Floating mini card 2 */}
              <motion.div
                className="absolute -bottom-4 -left-6 glass border border-white/[0.08] rounded-xl px-4 py-3 float-delayed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 }}
              >
                <div className="text-[#0066FF] text-sm font-bold">+34 Leads</div>
                <div className="text-[#64748B] text-xs">This week</div>
              </motion.div>
            </div>
          </motion.div>

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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020816] to-transparent pointer-events-none" />
    </section>
  );
}
