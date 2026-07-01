"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const details = [
  { Icon: Phone, label: "Phone", value: "0490 881 483" },
  { Icon: Mail, label: "Email", value: "primereachau@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Melbourne, VIC — Australia" },
];

interface FormField {
  name: string;
  business: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

function FloatingInput({
  id, label, type = "text", required, value, onChange, placeholder,
}: {
  id: keyof FormField; label: string; type?: string; required?: boolean;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const lifted = focused || hasValue;

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={lifted ? placeholder : ""}
        className="w-full px-4 pt-5 pb-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[#0066FF]/50 transition-all duration-200"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          lifted
            ? "top-1.5 text-[10px] font-semibold text-[#0066FF] uppercase tracking-wider"
            : "top-1/2 -translate-y-1/2 text-sm text-[#475569]"
        }`}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormField>({
    name: "", business: "", phone: "", email: "", service: "", message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xbdvaqkv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,102,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em]">
            Get Started
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            Book Your Free
            <br />
            <span className="gradient-text-brand">Strategy Call.</span>
          </h2>
          <p className="mt-4 text-[#64748B] text-lg max-w-xl mx-auto">
            30 minutes. No pushy sales. Just an honest look at your business and a clear plan
            to grow it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <a
                href="tel:0490881483"
                className="flex items-center gap-4 glass border border-[#0066FF]/20 rounded-2xl px-5 py-4 mb-8 hover:border-[#0066FF]/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066FF]/20 transition-colors">
                  <Phone size={20} className="text-[#0066FF]" />
                </div>
                <div>
                  <div className="text-[#64748B] text-xs mb-0.5">Prefer to call? Ring us directly</div>
                  <div className="text-white font-bold text-xl tracking-wide">0490 881 483</div>
                </div>
              </a>
              <h3 className="text-white font-semibold text-xl mb-6">What happens on the call?</h3>
              <div className="space-y-4">
                {[
                  "We listen to your business and what you're trying to grow",
                  "We check how your business currently appears on Google",
                  "We tell you exactly what needs to change to get more customers calling",
                  "No pressure — you decide if it feels right for you",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#94a3b8] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-5">
              {details.map((d, i) => {
                const Icon = d.Icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#0066FF]" />
                    </div>
                    <div>
                      <div className="text-[#475569] text-xs">{d.label}</div>
                      <div className="text-white text-sm font-medium">{d.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-strong rounded-2xl p-8 lg:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-[#0066FF]" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">We&apos;ll be in touch!</h3>
                <p className="text-[#64748B] text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll contact you within 1 business day to book
                  your strategy call.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInput id="name" label="Your Name" required value={form.name}
                    onChange={onInputChange} placeholder="John Smith" />
                  <FloatingInput id="business" label="Business Name" required value={form.business}
                    onChange={onInputChange} placeholder="Smith Plumbing" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInput id="phone" label="Phone" type="tel" required value={form.phone}
                    onChange={onInputChange} placeholder="04XX XXX XXX" />
                  <FloatingInput id="email" label="Email" type="email" required value={form.email}
                    onChange={onInputChange} placeholder="john@business.com.au" />
                </div>

                {/* Service select */}
                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-[#0066FF]/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#070d1f]">I&apos;m interested in...</option>
                    <option value="website" className="bg-[#070d1f]">Website Design & Management</option>
                    <option value="seo" className="bg-[#070d1f]">SEO</option>
                    <option value="google-ads" className="bg-[#070d1f]">Google Ads</option>
                    <option value="meta-ads" className="bg-[#070d1f]">Meta Ads (Facebook & Instagram)</option>
                    <option value="tiktok" className="bg-[#070d1f]">TikTok Ads</option>
                    <option value="social" className="bg-[#070d1f]">Social Media Management</option>
                    <option value="gbp" className="bg-[#070d1f]">Google Business Profile</option>
                    <option value="all" className="bg-[#070d1f]">Full Digital Package</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#475569]">▾</div>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us about your business and your biggest challenge right now..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#334155] focus:outline-none focus:border-[#0066FF]/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <MagneticButton data-cursor-cta={true} className="w-full">
                  <button
                    type="submit"
                    className="group w-full relative flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl overflow-hidden font-semibold text-white text-base"
                  >
                    <span className="absolute inset-0 bg-[#FF1744] transition-colors duration-300 group-hover:bg-[#FF4D6D]" />
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-60 blur-xl bg-[#FF1744] transition-opacity duration-500" />
                    <span className="relative z-10">{loading ? "Sending..." : "Book My Free Strategy Call"}</span>
                    {!loading && <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />}
                  </button>
                </MagneticButton>

                <p className="text-center text-[#334155] text-xs">
                  No spam. No obligation. We&apos;ll call within 1 business day.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
