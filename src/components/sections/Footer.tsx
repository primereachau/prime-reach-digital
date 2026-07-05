"use client";

import { SiGoogle, SiMeta, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

const year = new Date().getFullYear();

const platforms = [
  { Icon: SiGoogle, label: "Google" },
  { Icon: SiMeta, label: "Meta" },
  { Icon: SiFacebook, label: "Facebook" },
  { Icon: SiInstagram, label: "Instagram" },
  { Icon: SiTiktok, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[var(--pr-blue)] flex items-center justify-center">
                <span className="text-white font-bold text-xs">PR</span>
              </div>
              <span className="text-white font-semibold text-[15px]">
                Prime<span className="text-[var(--pr-blue)]">Reach</span> Digital
              </span>
            </div>
            <p className="text-[var(--text-dimmer)] text-sm max-w-xs leading-relaxed">
              Melbourne's SEO specialists. We help local businesses get found on Google and get more customers calling.
            </p>
          </div>

          {/* Certified platforms */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-[var(--text-faint)] text-xs uppercase tracking-widest">Certified Partners</span>
            <div className="flex items-center gap-4">
              {platforms.map(({ Icon, label }, i) => (
                <div key={i} title={label} className="text-[var(--text-faint)] hover:text-[var(--text-muted)] transition-colors">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-[var(--text-faint)] text-xs">
            © {year} Prime Reach Digital · Melbourne, VIC
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--text-faint)]">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
