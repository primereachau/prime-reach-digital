"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  SiGoogle, SiMeta, SiInstagram,
  SiTiktok, SiGoogleanalytics,
} from "react-icons/si";
import { Globe, MapPin, Search, ChevronDown } from "lucide-react";

const services = [
  {
    Icon: Search,
    iconColor: "#34A853",
    glowColor: "rgba(52,168,83,0.15)",
    borderGlow: "rgba(52,168,83,0.4)",
    title: "Google SEO — Our Core Speciality",
    desc: "When someone in your area searches for your service on Google, we make sure your business is the first thing they see. We handle everything — keywords, content, technical setup — you just answer the calls.",
    tag: "Our #1 Speciality",
    featured: true,
  },
  {
    Icon: MapPin,
    iconColor: "#FF1744",
    glowColor: "rgba(255,23,68,0.15)",
    borderGlow: "rgba(255,23,68,0.3)",
    title: "Google Business Profile",
    desc: "Dominate the Google Maps 3-pack and local search results. Be the first business locals see when they search nearby — the most powerful free tool for local businesses.",
    tag: "Local SEO",
  },
  {
    Icon: Globe,
    iconColor: "#0066FF",
    glowColor: "rgba(0,102,255,0.2)",
    borderGlow: "rgba(0,102,255,0.3)",
    title: "Website Design & Management",
    desc: "High-converting websites built to turn visitors into paying customers. We design, build, and manage everything — so you stay focused on running your business.",
    tag: "Core Service",
  },
  {
    Icon: SiGoogle,
    iconColor: "#4285F4",
    glowColor: "rgba(66,133,244,0.15)",
    borderGlow: "rgba(66,133,244,0.3)",
    title: "Google Ads",
    desc: "Targeted campaigns that put you in front of customers actively searching for your services right now. Instant visibility while your SEO builds long-term.",
    tag: "Paid Ads",
  },
  {
    Icon: SiMeta,
    iconColor: "#0082FB",
    glowColor: "rgba(0,130,251,0.15)",
    borderGlow: "rgba(0,130,251,0.3)",
    title: "Meta Ads",
    desc: "Facebook & Instagram ads that reach your ideal local customers and drive consistent enquiries straight to your phone.",
    tag: "Paid Social",
  },
  {
    Icon: SiInstagram,
    iconColor: "#E1306C",
    glowColor: "rgba(225,48,108,0.15)",
    borderGlow: "rgba(225,48,108,0.3)",
    title: "Social Media Management",
    desc: "Consistent, professional content that builds trust and keeps your business top of mind every week — without you lifting a finger.",
    tag: "Brand Presence",
  },
  {
    Icon: SiTiktok,
    iconColor: "#ffffff",
    glowColor: "rgba(255,255,255,0.1)",
    borderGlow: "rgba(255,255,255,0.2)",
    title: "TikTok Ads",
    desc: "Tap into TikTok's massive and growing Australian audience with short-form creative ads that reach people before they even know they need you.",
    tag: "Emerging Channel",
  },
  {
    Icon: SiGoogleanalytics,
    iconColor: "#F9AB00",
    glowColor: "rgba(249,171,0,0.15)",
    borderGlow: "rgba(249,171,0,0.3)",
    title: "Reporting & Strategy",
    desc: "Clear monthly reports and a growth roadmap that shows exactly what your investment is doing — in plain English, no confusing jargon.",
    tag: "Intelligence",
  },
];

function ServiceRow({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: (typeof services)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const Icon = service.Icon as React.ElementType;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left rounded-2xl border transition-all duration-300 ${
          service.featured
            ? "border-[#34A853]/40 bg-[#34A853]/5 hover:bg-[#34A853]/8"
            : "border-white/[0.06] bg-[#070d1f] hover:border-white/[0.12]"
        } ${isOpen ? "rounded-b-none border-b-0" : ""}`}
        style={isOpen ? { boxShadow: `0 0 30px -8px ${service.borderGlow}` } : {}}
      >
        <div className="flex items-center gap-4 px-5 py-4">
          {/* Icon */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: service.glowColor }}
          >
            <Icon size={18} color={service.iconColor} />
          </div>

          {/* Tag + Title */}
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <span
              className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ color: service.iconColor, backgroundColor: service.glowColor }}
            >
              {service.tag}
            </span>
            <span className={`font-semibold text-[15px] truncate ${service.featured ? "text-white" : "text-white/90"}`}>
              {service.title}
            </span>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 ml-2"
          >
            <ChevronDown size={18} className="text-white/40" />
          </motion.div>
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div
              className={`px-5 pb-5 pt-3 rounded-b-2xl border border-t-0 ${
                service.featured ? "border-[#34A853]/40 bg-[#34A853]/5" : "border-white/[0.06] bg-[#070d1f]"
              }`}
              style={{ boxShadow: `0 8px 30px -8px ${service.borderGlow}` }}
            >
              <p className="text-[#64748B] text-sm leading-relaxed pl-14">
                {service.desc}
              </p>
              {service.featured && (
                <div className="pl-14 mt-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#34A853] hover:underline"
                  >
                    Get started →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            We Specialise in
            <br />
            <span className="gradient-text-brand">Google SEO.</span>
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed">
            Our main focus is getting your business to the top of Google. We also offer everything else you need to grow online — all under one roof.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {services.map((service, i) => (
            <ServiceRow
              key={i}
              service={service}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
