"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { ChevronDown } from "lucide-react";

const googleIcon = <svg viewBox="0 0 48 48" width="26" height="26"><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.9 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.3-17.7 11.7z"/><path fill="#FBBC05" d="M24 45c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.5C29.7 36 26.9 37 24 37c-5.5 0-10.2-3.7-11.8-8.8l-7 5.4C8.5 40.7 15.7 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.4-2.3 4.4-4.3 5.9l6.6 5.5C41.7 36.7 45 31 45 24c0-1.3-.2-2.7-.5-4z"/></svg>;

const services = [
  {
    icon: googleIcon,
    iconBg: "rgba(66,133,244,0.12)",
    borderGlow: "rgba(52,168,83,0.4)",
    title: "Google SEO",
    desc: "When someone in your area searches for your service on Google, we make sure your business is the first thing they see. We handle everything — keywords, content, technical setup — you just answer the calls.",
    tag: "Our #1 Speciality",
    tagColor: "#34A853",
    featured: true,
  },
  {
    icon: googleIcon,
    iconBg: "rgba(66,133,244,0.12)",
    borderGlow: "rgba(255,23,68,0.3)",
    title: "Google Business Profile",
    desc: "Dominate the Google Maps 3-pack and local search results. Be the first business locals see when they search nearby — the most powerful free tool for local businesses.",
    tag: "Local SEO",
    tagColor: "#FF1744",
  },
  {
    icon: googleIcon,
    iconBg: "rgba(66,133,244,0.12)",
    borderGlow: "rgba(66,133,244,0.3)",
    title: "Google Ads",
    desc: "Targeted campaigns that put you in front of customers actively searching for your services right now. Instant visibility while your SEO builds long-term.",
    tag: "Paid Ads",
    tagColor: "#4285F4",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="26" height="26"><rect width="48" height="48" rx="8" fill="#0066FF"/><path d="M14 14h8c3.3 0 6 2.7 6 6s-2.7 6-6 6h-5v8h-3V14zm3 3v6h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5z" fill="white"/><path d="M30 14h7c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5L42 30h-3.5l-2.7-7.5H33V30h-3V14zm3 3v4h4c.8 0 1.5-.7 1.5-1.5S37.8 17 37 17h-4z" fill="white" opacity="0.7"/></svg>
    ),
    iconBg: "rgba(0,102,255,0.12)",
    borderGlow: "rgba(0,102,255,0.3)",
    title: "Website Design & Management",
    desc: "High-converting websites built to turn visitors into paying customers. We design, build, and manage everything — so you stay focused on running your business.",
    tag: "Core Service",
    tagColor: "#0066FF",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="26" height="26"><path fill="#1877F2" d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24c0 11.9 8.7 21.8 20.2 23.7V31H14v-7h6.2v-5.3c0-6.1 3.6-9.5 9.2-9.5 2.7 0 5.5.5 5.5.5v6h-3.1c-3 0-4 1.9-4 3.8V24H35l-1.1 7h-5.7v16.7C39.3 45.8 48 35.9 48 24z"/></svg>
    ),
    iconBg: "rgba(24,119,242,0.12)",
    borderGlow: "rgba(0,130,251,0.3)",
    title: "Meta Ads",
    desc: "Facebook & Instagram ads that reach your ideal local customers and drive consistent enquiries straight to your phone.",
    tag: "Paid Social",
    tagColor: "#1877F2",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="26" height="26"><rect width="48" height="48" rx="10" fill="#010101"/><path d="M28 10h5.5c.5 4.5 3 7.5 7.5 8v5c-2.7-.1-5-1-7.5-2.7V32c0 7-5.5 12-12 10.5C15 41 11 36.5 12 30.5c.8-4.5 4.5-8 9-8.5v5.5c-2 .5-3.5 2-3.5 4 0 2.5 2 4 4 4s4-1.5 4-4.5V10z" fill="white"/></svg>
    ),
    iconBg: "rgba(255,255,255,0.08)",
    borderGlow: "rgba(255,255,255,0.2)",
    title: "TikTok Ads",
    desc: "Tap into TikTok's massive and growing Australian audience with short-form creative ads that reach people before they even know they need you.",
    tag: "Emerging Channel",
    tagColor: "#ffffff",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="26" height="26"><defs><radialGradient id="ig1" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497"/><stop offset="10%" stopColor="#fdf497"/><stop offset="50%" stopColor="#fd5949"/><stop offset="68%" stopColor="#d6249f"/><stop offset="100%" stopColor="#285AEB"/></radialGradient></defs><rect width="48" height="48" rx="12" fill="url(#ig1)"/><circle cx="24" cy="24" r="8" fill="none" stroke="white" strokeWidth="3"/><circle cx="34" cy="14" r="2.5" fill="white"/><rect x="6" y="6" width="36" height="36" rx="10" fill="none" stroke="white" strokeWidth="3"/></svg>
    ),
    iconBg: "rgba(225,48,108,0.12)",
    borderGlow: "rgba(225,48,108,0.3)",
    title: "Social Media Management",
    desc: "Consistent, professional content that builds trust and keeps your business top of mind every week — without you lifting a finger.",
    tag: "Brand Presence",
    tagColor: "#E1306C",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="26" height="26"><path fill="#F9AB00" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"/><path fill="#F9AB00" d="M24 12c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle fill="#F9AB00" cx="24" cy="24" r="4"/></svg>
    ),
    iconBg: "rgba(249,171,0,0.12)",
    borderGlow: "rgba(249,171,0,0.3)",
    title: "Reporting & Strategy",
    desc: "Clear monthly reports and a growth roadmap that shows exactly what your investment is doing — in plain English, no confusing jargon.",
    tag: "Intelligence",
    tagColor: "#F9AB00",
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
        <div className="flex items-center gap-4 px-5 py-5">
          {/* Icon */}
          <div
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: service.iconBg }}
          >
            {service.icon}
          </div>

          {/* Tag + Title */}
          <div className="flex-1 min-w-0 flex items-center gap-3">
            <span
              className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ color: service.tagColor, backgroundColor: service.iconBg }}
            >
              {service.tag}
            </span>
            <span className={`font-bold text-lg truncate ${service.featured ? "text-white" : "text-white/90"}`}>
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

function EnquiryForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xbdvaqkv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "Service Enquiry — Prime Reach Digital" }),
      });
      setSent(true);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-10 rounded-2xl border border-[#0066FF]/20 bg-[#070d1f] overflow-hidden"
    >
      {/* Header strip */}
      <div className="px-7 py-5 border-b border-white/[0.06] flex items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-lg">Enquire about a service</p>
          <p className="text-[#64748B] text-sm mt-0.5">We&apos;ll get back to you within 1 business day.</p>
        </div>
        <a href="tel:0490881483" className="hidden sm:flex items-center gap-2 text-[#0066FF] text-sm font-medium hover:underline flex-shrink-0">
          <Phone size={14} />
          0490 881 483
        </a>
      </div>

      {sent ? (
        <div className="px-7 py-10 text-center">
          <div className="w-12 h-12 rounded-full bg-[#34A853]/15 flex items-center justify-center mx-auto mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <p className="text-white font-semibold text-lg">Message sent!</p>
          <p className="text-[#64748B] text-sm mt-1">We&apos;ll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="px-7 py-6 grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#64748B] text-xs font-medium uppercase tracking-wider">Your Name *</label>
            <input name="name" required value={form.name} onChange={onChange} placeholder="John Smith"
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#64748B] text-xs font-medium uppercase tracking-wider">Phone Number *</label>
            <input name="phone" type="tel" required value={form.phone} onChange={onChange} placeholder="04XX XXX XXX"
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-[#64748B] text-xs font-medium uppercase tracking-wider">Service Interested In</label>
            <select name="service" value={form.service} onChange={onChange}
              className="px-4 py-3 rounded-xl bg-[#070d1f] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#0066FF]/50 transition-colors appearance-none">
              <option value="">Select a service...</option>
              <option>Google SEO</option>
              <option>Google Business Profile</option>
              <option>Google Ads</option>
              <option>Website Design &amp; Management</option>
              <option>Meta Ads</option>
              <option>TikTok Ads</option>
              <option>Social Media Management</option>
              <option>Reporting &amp; Strategy</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-[#64748B] text-xs font-medium uppercase tracking-wider">Message (optional)</label>
            <textarea name="message" value={form.message} onChange={onChange} rows={3} placeholder="Tell us a bit about your business..."
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors resize-none" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit"
              className="group w-full relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl overflow-hidden font-semibold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #0066FF 0%, #0044CC 100%)" }}
            >
              <span>{loading ? "Sending..." : "Send Enquiry"}</span>
              {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

        {/* Enquiry form */}
        <EnquiryForm />
      </div>
    </section>
  );
}
