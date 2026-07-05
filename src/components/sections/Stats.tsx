"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "×", label: "More Enquiries", desc: "Average increase in calls and leads from Google" },
  { value: 98, suffix: "%", label: "Client Retention", desc: "Our clients stay because they see real results" },
  { value: 24, suffix: "h", label: "Response Time", desc: "We get back to you the same day, every time" },
];

function Counter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const isDecimal = target % 1 !== 0;
    const timer = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.min(current, target) : Math.floor(current));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const isDecimal = target % 1 !== 0;
  const display = isDecimal ? count.toFixed(1) : count;

  return (
    <div ref={ref} className="font-bold text-white text-5xl md:text-6xl tracking-tight tabular-nums">
      {display}{suffix}
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="results" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--pr-blue)]/[0.03] to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--pr-blue)]/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--pr-blue)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Real Results.
            <br />
            <span className="gradient-text-brand">No Fluff.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--pr-navy)] p-8 lg:p-10 flex flex-col gap-3"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <div>
                <div className="text-white font-semibold text-sm">{stat.label}</div>
                <div className="text-[var(--text-dimmer)] text-xs mt-1">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
