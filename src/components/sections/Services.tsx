"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import {
  SiGoogle, SiMeta, SiFacebook, SiInstagram,
  SiTiktok, SiGoogleanalytics,
} from "react-icons/si";
import { Globe, MapPin, BarChart3, Search } from "lucide-react";

const services = [
  {
    Icon: Globe,
    iconColor: "#0066FF",
    glowColor: "rgba(0,102,255,0.2)",
    borderGlow: "rgba(0,102,255,0.3)",
    title: "Website Design & Management",
    desc: "High-converting websites built to turn visitors into paying customers. We design, build, and manage everything — so you stay focused on running your business.",
    tag: "Core Service",
    featured: true,
  },
  {
    Icon: Search,
    iconColor: "#34A853",
    glowColor: "rgba(52,168,83,0.15)",
    borderGlow: "rgba(52,168,83,0.3)",
    title: "SEO",
    desc: "Rank on page 1 of Google for searches that matter. We build long-term organic traffic that compounds.",
    tag: "Organic Growth",
  },
  {
    Icon: SiGoogle,
    iconColor: "#4285F4",
    glowColor: "rgba(66,133,244,0.15)",
    borderGlow: "rgba(66,133,244,0.3)",
    title: "Google Ads",
    desc: "Targeted campaigns that put you in front of customers actively searching for your services right now.",
    tag: "Paid Ads",
  },
  {
    Icon: SiMeta,
    iconColor: "#0082FB",
    glowColor: "rgba(0,130,251,0.15)",
    borderGlow: "rgba(0,130,251,0.3)",
    title: "Meta Ads",
    desc: "Facebook & Instagram ads that reach your ideal local customers and drive consistent enquiries.",
    tag: "Paid Social",
  },
  {
    Icon: SiInstagram,
    iconColor: "#E1306C",
    glowColor: "rgba(225,48,108,0.15)",
    borderGlow: "rgba(225,48,108,0.3)",
    title: "Social Media Management",
    desc: "Consistent, professional content that builds trust and keeps your business top of mind every week.",
    tag: "Brand Presence",
  },
  {
    Icon: SiTiktok,
    iconColor: "#ffffff",
    glowColor: "rgba(255,255,255,0.1)",
    borderGlow: "rgba(255,255,255,0.2)",
    title: "TikTok Ads",
    desc: "Tap into TikTok's massive and growing Australian audience with short-form creative ads.",
    tag: "Emerging Channel",
  },
  {
    Icon: MapPin,
    iconColor: "#FF1744",
    glowColor: "rgba(255,23,68,0.15)",
    borderGlow: "rgba(255,23,68,0.3)",
    title: "Google Business Profile",
    desc: "Dominate the Google Maps 3-pack and local search results. Be the first business locals see.",
    tag: "Local SEO",
  },
  {
    Icon: SiGoogleanalytics,
    iconColor: "#F9AB00",
    glowColor: "rgba(249,171,0,0.15)",
    borderGlow: "rgba(249,171,0,0.3)",
    title: "Reporting & Strategy",
    desc: "Clear monthly reports and a growth roadmap that shows exactly what your investment is doing.",
    tag: "Intelligence",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-6, 6]), { stiffness: 200, damping: 25 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const Icon = service.Icon as React.ElementType;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className={`group relative rounded-2xl p-6 border border-white/[0.06] bg-[#070d1f] hover:border-white/[0.12] transition-all duration-500 cursor-default ${
        service.featured ? "lg:col-span-2 lg:row-span-1" : ""
      }`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 60px ${service.glowColor}` }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 30px -8px ${service.borderGlow}` }}
      />

      <div className={`flex gap-5 ${service.featured ? "flex-row items-start" : "flex-col"}`}>
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: service.glowColor }}
        >
          <Icon size={22} color={service.iconColor} />
        </div>

        <div className={service.featured ? "flex-1" : ""}>
          {/* Tag */}
          <span
            className="inline-block text-[10px] font-semibold uppercase tracking-widest mb-2 px-2 py-0.5 rounded-full"
            style={{ color: service.iconColor, backgroundColor: service.glowColor }}
          >
            {service.tag}
          </span>

          <h3 className="text-white font-semibold text-[15px] leading-snug mb-2">
            {service.title}
          </h3>
          <p className="text-[#475569] text-sm leading-relaxed">
            {service.desc}
          </p>

          {service.featured && (
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium group/link"
              style={{ color: service.iconColor }}
            >
              <span>Learn more</span>
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" ref={ref} className="relative py-28 lg:py-36">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            Your Digital Arsenal.
            <br />
            <span className="gradient-text-brand">Fully Loaded.</span>
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-xl leading-relaxed">
            Every service you need to dominate your local market — under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ perspective: 1000 }}>
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
