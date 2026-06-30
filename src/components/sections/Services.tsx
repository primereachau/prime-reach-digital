"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import {
  Globe,
  Search,
  BarChart2,
  Megaphone,
  Video,
  Share2,
  MapPin,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Management",
    description:
      "High-converting websites built to turn visitors into paying customers. We manage everything so you can focus on running your business.",
    color: "blue",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Rank on page 1 of Google for the searches that matter. We build long-term organic traffic that compounds over time.",
    color: "blue",
  },
  {
    icon: BarChart2,
    title: "Google Ads Management",
    description:
      "Targeted Google Ads campaigns that put you in front of customers actively searching for your services right now.",
    color: "red",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Facebook and Instagram ads that reach your ideal local customers and drive consistent leads to your business.",
    color: "red",
  },
  {
    icon: Video,
    title: "TikTok Ads",
    description:
      "Tap into TikTok's massive and growing Australian audience. Creative short-form ads that build brand awareness fast.",
    color: "blue",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Consistent, professional content across your social channels that builds trust and keeps your business top of mind.",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description:
      "Optimise your Google Business Profile to dominate local search results and the Google Maps 3-pack.",
    color: "red",
  },
  {
    icon: TrendingUp,
    title: "Reporting & Growth Strategy",
    description:
      "Clear monthly reports showing exactly what's working, what's not, and a strategy to keep growing your revenue.",
    color: "red",
  },
];

const easing: Easing = "easeOut";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: easing },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Everything Your Business Needs to{" "}
            <span className="gradient-text">Grow Online</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            We handle your entire digital presence — so you get more customers
            without becoming a marketing expert.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isBlue = service.color === "blue";
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative p-6 rounded-2xl border border-white/5 bg-[#0D1526] hover:border-blue-500/20 transition-all duration-300 cursor-default hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    isBlue
                      ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                      : "bg-red-500/10 group-hover:bg-red-500/20"
                  }`}
                >
                  <Icon
                    size={22}
                    className={isBlue ? "text-blue-400" : "text-red-400"}
                  />
                </div>

                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isBlue
                      ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                      : "bg-gradient-to-r from-transparent via-red-500 to-transparent"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
