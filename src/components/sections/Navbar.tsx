"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Phone } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY + 10 && y > 100);
      if (y < lastY - 10 || y < 100) setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/[0.06] shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 group"
          >
            {/* PR Monogram — matches real business card */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background circle */}
              <circle cx="18" cy="18" r="18" fill="#0A0F1E"/>
              {/* P — white geometric */}
              <path d="M8 10h7c2.8 0 5 2.2 5 5s-2.2 5-5 5h-4v6H8V10zm3 3v4h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4z" fill="white"/>
              {/* R — blue gradient */}
              <defs>
                <linearGradient id="rGrad" x1="18" y1="10" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4DA6FF"/>
                  <stop offset="100%" stopColor="#0044CC"/>
                </linearGradient>
              </defs>
              <path d="M19 10h7c2.2 0 4 1.8 4 4 0 1.6-.9 3-2.3 3.7L31 26h-3.5l-2.9-7.5H22V26h-3V10zm3 3v3.5h4c.8 0 1.5-.7 1.5-1.5S26.8 13 26 13h-4z" fill="url(#rGrad)"/>
            </svg>
            <span className="text-white font-bold text-base md:text-xl tracking-tight">
              Prime<span className="text-[var(--pr-blue)]">Reach</span> <span className="text-white/80">Digital</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.2 }}
                onMouseEnter={() => setActive(l.href)}
                onMouseLeave={() => setActive("")}
                className="relative px-4 py-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-px bg-[var(--pr-blue)] transition-all duration-300 origin-left ${
                    active === l.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </motion.a>
            ))}
          </nav>

          {/* Phone + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-4"
          >
            <a
              href="tel:0490881483"
              className="flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-lg bg-[var(--pr-blue)]/15 flex items-center justify-center group-hover:bg-[var(--pr-blue)]/25 transition-colors">
                <Phone size={13} className="text-[var(--pr-blue)]" />
              </div>
              <span className="text-white font-bold text-lg tracking-wide group-hover:text-[var(--pr-blue)] transition-colors">
                0490 881 483
              </span>
            </a>
            <MagneticButton data-cursor-cta={true}>
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[var(--pr-crimson)] group-hover:bg-[var(--pr-crimson-light)] transition-colors duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, var(--pr-crimson), #FF6B6B)" }}
                />
                <span className="relative text-white text-sm font-semibold">Free Strategy Call</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white p-1 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 glass border-b border-white/[0.06]"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-2 text-[var(--text-dim)] hover:text-white text-base font-medium border-b border-white/[0.04] last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:0490881483"
                className="mt-4 flex items-center justify-center gap-2 py-3.5 rounded-xl glass border border-[var(--pr-blue)]/30 text-white font-bold text-lg"
              >
                <Phone size={16} className="text-[var(--pr-blue)]" />
                0490 881 483
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3.5 rounded-xl bg-[var(--pr-crimson)] text-white font-semibold text-center text-sm"
              >
                Free Strategy Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
