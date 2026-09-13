import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Prime Reach Digital",
  description:
    "Practical SEO, Google Ads, website, and Google Business Profile advice for Melbourne local businesses — no jargon, no fluff.",
  alternates: {
    canonical: "/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--pr-black)] text-white overflow-x-hidden">
      <div className="border-b border-white/[0.06] py-6 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[var(--pr-blue)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">PR</span>
            </div>
            <span className="text-white font-semibold text-[15px]">
              Prime<span className="text-[var(--pr-blue)]">Reach</span> Digital
            </span>
          </Link>
          <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <span className="text-[var(--pr-blue)] text-xs font-semibold uppercase tracking-[0.2em]">
          The Prime Reach Digital Blog
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Straight Answers on SEO, Ads, and Growing a Local Business
        </h1>
        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed max-w-2xl">
          No jargon, no fluff — just practical advice for Melbourne business owners trying to get
          more customers from Google.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl border border-white/[0.06] bg-[var(--pr-navy)] hover:border-[var(--pr-blue)]/40 transition-colors"
            >
              <div className="flex items-center gap-3 text-xs text-[var(--text-faint)] mb-4">
                <span className="text-[var(--pr-blue)] font-semibold uppercase tracking-widest">{post.category}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-white font-semibold text-xl mb-2 leading-snug group-hover:text-[var(--pr-blue-light)] transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-faint)] text-xs">{formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1.5 text-[var(--pr-blue)] text-sm font-medium">
                  Read
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-faint)] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/" className="text-xs text-[var(--pr-blue)] hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
