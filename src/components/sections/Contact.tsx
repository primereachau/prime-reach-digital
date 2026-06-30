"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const details = [
  { icon: Phone, label: "Phone", value: "+61 400 000 000" },
  { icon: Mail, label: "Email", value: "hello@primereachdigital.com.au" },
  { icon: MapPin, label: "Location", value: "Melbourne, VIC — Serving all of Australia" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to email service (e.g. Resend, Formspree)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Book Your Free{" "}
            <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            30 minutes. No pushy sales. Just an honest look at your business and
            what we&apos;d do to grow it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-semibold text-2xl mb-6">
                What happens on the call?
              </h3>
              <div className="space-y-4">
                {[
                  "We learn about your business, goals, and challenges",
                  "We review your current online presence",
                  "We share exactly what we'd do to get you more leads",
                  "You decide if we're the right fit — zero pressure",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-5">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{d.label}</p>
                      <p className="text-white text-sm font-medium">{d.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-[#0D1526] p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  We&apos;ll be in touch soon!
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll contact you within 1 business
                  day to confirm your strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-slate-400 text-xs mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="business"
                      className="block text-slate-400 text-xs mb-1.5"
                    >
                      Business Name *
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      value={form.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Smith Plumbing"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-slate-400 text-xs mb-1.5"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="04XX XXX XXX"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-slate-400 text-xs mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="john@business.com.au"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-slate-400 text-xs mb-1.5"
                  >
                    I&apos;m interested in...
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#0D1526]">
                      Select a service...
                    </option>
                    <option value="website" className="bg-[#0D1526]">
                      Website Design & Management
                    </option>
                    <option value="seo" className="bg-[#0D1526]">SEO</option>
                    <option value="google-ads" className="bg-[#0D1526]">
                      Google Ads
                    </option>
                    <option value="meta-ads" className="bg-[#0D1526]">
                      Meta Ads (Facebook & Instagram)
                    </option>
                    <option value="tiktok" className="bg-[#0D1526]">TikTok Ads</option>
                    <option value="social" className="bg-[#0D1526]">
                      Social Media Management
                    </option>
                    <option value="gbp" className="bg-[#0D1526]">
                      Google Business Profile
                    </option>
                    <option value="all" className="bg-[#0D1526]">
                      Full Digital Package
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-400 text-xs mb-1.5"
                  >
                    Tell us about your business (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="What's your biggest challenge right now?"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#DC2626] hover:bg-[#EF4444] text-white font-semibold transition-all duration-200 cursor-pointer hover:shadow-xl hover:shadow-red-900/30"
                >
                  Book My Free Strategy Call
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>

                <p className="text-center text-slate-600 text-xs">
                  No spam. No obligation. We&apos;ll call you within 1 business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
