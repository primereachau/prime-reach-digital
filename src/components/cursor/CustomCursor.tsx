"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "cta">("default");

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot — snappy
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 40 });

  // Ring — lags behind (that's the premium feel)
  const ringX = useSpring(mouseX, { stiffness: 160, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 160, damping: 22 });

  useEffect(() => {
    // Don't init on touch devices
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest("[data-cursor-cta]")) {
        setVariant("cta");
      } else if (el.closest("a, button, [role='button'], input, select, textarea, label")) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

  const dotSize = variant === "hover" ? 6 : variant === "cta" ? 8 : 5;
  const ringSize = variant === "hover" ? 44 : variant === "cta" ? 56 : 32;
  const dotColor = variant === "cta" ? "#FF1744" : "#ffffff";
  const ringColor = variant === "cta" ? "rgba(255,23,68,0.5)" : "rgba(255,255,255,0.35)";
  const ringBg = variant === "cta" ? "rgba(255,23,68,0.08)" : "transparent";

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: dotSize,
          height: dotSize,
          backgroundColor: dotColor,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          border: `1px solid ${ringColor}`,
          backgroundColor: ringBg,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Subtle glow trail on dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full blur-sm"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize * 1.5,
          height: ringSize * 1.5,
          backgroundColor: variant === "cta" ? "rgba(255,23,68,0.04)" : "rgba(0,102,255,0.04)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
