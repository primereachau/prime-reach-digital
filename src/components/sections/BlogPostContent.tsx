import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Prime Reach Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Prime Reach Digital",
      url: "https://www.primereachdigital.com.au",
    },
    mainEntityOfPage: `https://www.primereachdigital.com.au/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[var(--pr-black)] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="border-b border-white/[0.06] py-6 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[var(--pr-blue)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">PR</span>
            </div>
            <span className="text-white font-semibold text-[15px]">
              Prime<span className="text-[var(--pr-blue)]">Reach</span> Digital
            </span>
          </Link>
          <Link href="/blog" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors flex items-center gap-1.5">
            <ArrowLeft size={14} />
            All Articles
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="flex items-center gap-3 text-xs text-[var(--text-faint)] mb-5">
          <span className="text-[var(--pr-blue)] font-semibold uppercase tracking-widest">{post.category}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-[var(--text-dim)] text-lg leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-12 space-y-6">
          {post.sections.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-2">
                  {section.text}
                </h2>
              );
            }
            if (section.type === "list") {
              return (
                <div key={i} className="space-y-3">
                  {section.items?.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[var(--pr-blue)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--text-dim)] text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <p key={i} className="text-[var(--text-dim)] text-base leading-relaxed">
                {section.text}
              </p>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-[var(--pr-blue)]/20 bg-[var(--pr-blue)]/05">
          <h3 className="text-white font-semibold text-xl mb-2">Need help with this?</h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
            This is exactly what we do for Melbourne businesses every day. Book a free strategy
            call and we&apos;ll give you a straight answer for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--pr-crimson)] hover:bg-[var(--pr-crimson-light)] transition-colors font-semibold text-white text-sm"
            >
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link
              href={post.relatedService.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-[var(--pr-blue)]/30 hover:border-[var(--pr-blue)]/60 text-white font-semibold text-sm transition-all"
            >
              {post.relatedService.label}
            </Link>
          </div>
        </div>
      </article>

      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-faint)] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/blog" className="text-xs text-[var(--pr-blue)] hover:underline">All Articles</Link>
        </div>
      </div>
    </main>
  );
}
