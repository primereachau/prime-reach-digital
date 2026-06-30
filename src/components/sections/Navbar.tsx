"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
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
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-[#0066FF] group-hover:bg-[#FF1744] transition-colors duration-300" />
              <div className="absolute inset-0 rounded-lg bg-[#0066FF] opacity-0 group-hover:opacity-0 blur-md transition-all duration-300" />
              <span className="relative z-10 flex items-center justify-center h-full text-white font-bold text-xs tracking-wider">
                PR
              </span>
            </div>
            <span className="text-white font-semibold text-[15px] tracking-tight">
              Prime<span className="text-[#0066FF]">Reach</span>
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
                className="relative px-4 py-2 text-sm text-[#64748B] hover:text-white transition-colors duration-200 group"
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-px bg-[#0066FF] transition-all duration-300 origin-left ${
                    active === l.href ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-3"
          >
            <MagneticButton data-cursor-cta={true}>
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#FF1744] group-hover:bg-[#FF4D6D] transition-colors duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #FF1744, #FF6B6B)" }}
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
                  className="py-3 px-2 text-[#94a3b8] hover:text-white text-base font-medium border-b border-white/[0.04] last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 py-3.5 rounded-xl bg-[#FF1744] text-white font-semibold text-center text-sm"
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
