"use client";

import { SiGoogle, SiMeta, SiFacebook, SiInstagram, SiTiktok, SiGoogleanalytics } from "react-icons/si";
import { Globe } from "lucide-react";

const items = [
  { Icon: SiGoogle, label: "Google Ads", color: "#4285F4" },
  { Icon: SiMeta, label: "Meta Ads", color: "#0082FB" },
  { Icon: SiInstagram, label: "Instagram", color: "#E1306C" },
  { Icon: SiFacebook, label: "Facebook", color: "#1877F2" },
  { Icon: SiTiktok, label: "TikTok Ads", color: "#ffffff" },
  { Icon: SiGoogleanalytics, label: "Analytics", color: "#F9AB00" },
  { Icon: Globe, label: "Web Design", color: "var(--pr-blue)" },
  { Icon: SiGoogle, label: "SEO", color: "var(--pr-green)" },
];

// Duplicate for seamless loop
const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="relative py-6 border-y border-white/[0.06] overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--pr-black)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--pr-black)] to-transparent pointer-events-none" />

      <div className="marquee-track flex items-center gap-0 whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((item, i) => {
          const Icon = item.Icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-10 border-r border-white/[0.06] last:border-0"
            >
              <Icon size={18} color={item.color} style={{ flexShrink: 0 }} />
              <span className="text-[var(--text-dimmer)] text-sm font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
