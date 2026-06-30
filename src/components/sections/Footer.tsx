export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#1D4ED8] flex items-center justify-center">
            <span className="text-white font-bold text-xs">PR</span>
          </div>
          <span className="text-white font-semibold">
            Prime<span className="text-[#3B82F6]">Reach</span> Digital
          </span>
        </div>
        <p className="text-slate-600 text-sm text-center">
          © {year} Prime Reach Digital Pty Ltd · Melbourne, Australia · ABN XX XXX XXX XXX
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>
      </div>
    </footer>
  );
}
