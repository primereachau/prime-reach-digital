"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:0490881483"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white shadow-2xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-105 transition-transform duration-200"
          style={{ background: "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)" }}
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-[#0066FF]" />

          <div className="relative flex-shrink-0">
            <Phone size={18} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00C853] border-2 border-[#0066FF]" />
          </div>

          <div>
            <div className="text-[10px] font-medium opacity-80 leading-none mb-0.5 uppercase tracking-wide">Call us now</div>
            <div className="font-bold text-[15px] leading-none tracking-wide">0490 881 483</div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
