import Link from "next/link";
import { suburbList } from "@/lib/suburbs";

const regions = ["Melbourne's North", "Melbourne's East", "Melbourne's West", "Melbourne's South"];

export default function AreasWeServe() {
  return (
    <section className="relative py-20 lg:py-28 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Areas We <span className="gradient-text-brand">Serve</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg max-w-xl mx-auto">
            We work with local businesses across Melbourne, with dedicated local expertise in
            these suburbs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {regions.map((region) => (
            <div key={region}>
              <span className="text-[var(--text-faint)] text-xs uppercase tracking-widest">
                {region}
              </span>
              <div className="flex flex-col gap-2 mt-4">
                {suburbList
                  .filter((s) => s.region === region)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="text-[var(--text-dim)] hover:text-white text-sm transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
