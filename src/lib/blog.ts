export interface BlogSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  relatedService: { href: string; label: string };
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "google-ads-budget-melbourne",
    title: "How Much Should You Spend on Google Ads in Melbourne? A Realistic Guide",
    description:
      "A realistic breakdown of Google Ads budgets for Melbourne local businesses, by industry and competition level, so you can set a starting budget without guessing.",
    excerpt:
      "Budgets vary wildly by industry and competition. Here's how to actually work out a starting number instead of guessing.",
    date: "2026-01-12",
    readTime: "6 min read",
    category: "Google Ads",
    relatedService: { href: "/google-ads-melbourne", label: "Google Ads Management Melbourne" },
    sections: [
      {
        type: "paragraph",
        text: "\"How much should I spend on Google Ads?\" is the first question almost every Melbourne business owner asks us, and the honest answer is: it depends on your industry, your competition, and what a customer is actually worth to you. There's no universal number — but there is a realistic way to work one out.",
      },
      {
        type: "heading",
        text: "Start with your customer value, not a round number",
      },
      {
        type: "paragraph",
        text: "Before picking a budget, work out what a new customer is actually worth. A plumber charging $150 for a call-out can afford a very different cost-per-lead than a cafe selling $6 coffees. If your average job or sale is worth $500 and you're comfortable paying $50-100 to acquire that customer, your budget math starts from there — not from a figure a competitor mentioned once.",
      },
      {
        type: "heading",
        text: "Typical starting budgets by industry",
      },
      {
        type: "list",
        items: [
          "Trades (plumbers, electricians, builders): $800-2,000/month — high-value jobs justify a higher cost-per-click",
          "Home services (cleaning, handyman, gardening): $500-1,200/month — competitive but lower job values",
          "Professional services (accountants, lawyers, consultants): $1,000-3,000/month — high customer lifetime value, higher competition",
          "Hospitality and retail: $300-800/month — usually better suited to a mix of Ads and organic/social",
        ],
      },
      {
        type: "paragraph",
        text: "These are starting points, not guarantees. Competitive keywords in Melbourne's CBD or bayside suburbs cost more per click than the same search in an outer growth suburb, simply because more businesses are bidding for the same customers.",
      },
      {
        type: "heading",
        text: "Why a small budget can still fail",
      },
      {
        type: "paragraph",
        text: "A common mistake is spreading a small budget across too many keywords or too broad a location. $500/month split across 50 keywords covering all of Melbourne rarely gets enough clicks per keyword to learn what's actually working. It's almost always better to start narrow — a handful of high-intent keywords in the suburbs you actually service — and expand once you know your numbers.",
      },
      {
        type: "heading",
        text: "The real answer",
      },
      {
        type: "paragraph",
        text: "Most Melbourne local businesses see a realistic starting point somewhere between $500 and $1,500 a month, refined after the first few weeks of real data. The number matters less than having someone actively watching cost-per-lead and adjusting weekly — a campaign left on autopilot burns budget regardless of how well it started.",
      },
    ],
  },
  {
    slug: "how-long-does-seo-take",
    title: "How Long Does SEO Really Take to Work?",
    description:
      "An honest timeline for SEO results in Melbourne — what changes in month 1, month 3, and month 6+, and why anyone promising overnight rankings is lying to you.",
    excerpt:
      "If someone promises page-one rankings in two weeks, that's your sign to walk away. Here's what a realistic timeline actually looks like.",
    date: "2026-01-19",
    readTime: "5 min read",
    category: "SEO",
    relatedService: { href: "/seo-agency-melbourne", label: "SEO Agency Melbourne" },
    sections: [
      {
        type: "paragraph",
        text: "If an agency promises you page-one Google rankings within two weeks, that's not confidence — it's a red flag. SEO is one of the few marketing channels where speed and legitimacy are almost always in conflict. Here's what actually happens, month by month.",
      },
      {
        type: "heading",
        text: "Month 1: foundations, not rankings",
      },
      {
        type: "paragraph",
        text: "The first month is technical and structural — fixing site issues, optimising your Google Business Profile, cleaning up on-page content, and setting up tracking. You typically won't see ranking movement yet, because Google needs to recrawl and reassess your site, which doesn't happen instantly.",
      },
      {
        type: "heading",
        text: "Month 2-3: early signals",
      },
      {
        type: "paragraph",
        text: "This is usually when you start seeing small movements — a keyword climbing from page 4 to page 2, more impressions in Google Search Console, maybe your Google Business Profile starting to show up more often in the Map Pack for certain searches. It's progress, but rarely enough yet to feel like \"results.\"",
      },
      {
        type: "heading",
        text: "Month 4-6: meaningful movement",
      },
      {
        type: "paragraph",
        text: "By month 4-6, most Melbourne local businesses start seeing genuine ranking improvements for their priority keywords, and — more importantly — actual calls and enquiries starting to come from organic search rather than just paid ads. This is the point where SEO starts paying for itself.",
      },
      {
        type: "heading",
        text: "Month 6-12+: compounding returns",
      },
      {
        type: "paragraph",
        text: "This is where SEO earns its reputation as the long-term play. Unlike Google Ads, which stops the moment you stop paying, SEO rankings built over 6-12 months keep generating free leads indefinitely, as long as you maintain the work. Businesses that stick with it for a full year rarely regret the investment.",
      },
      {
        type: "heading",
        text: "Why some businesses give up too early",
      },
      {
        type: "paragraph",
        text: "The most common reason SEO \"doesn't work\" for a business is that they stopped at month 3, right before the momentum was about to show. If you need leads this week, Google Ads is the right tool. If you're building for the next 2-3 years, SEO is the one that keeps paying you back long after you've stopped actively spending.",
      },
    ],
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO vs Google Ads: Which Should Your Melbourne Business Choose First?",
    description:
      "A practical comparison of SEO and Google Ads for Melbourne businesses, so you can decide which to prioritise first based on your timeline and budget.",
    excerpt:
      "Neither is \"better\" — they solve different problems. Here's how to work out which one your business actually needs first.",
    date: "2026-01-26",
    readTime: "5 min read",
    category: "Strategy",
    relatedService: { href: "/google-ads-melbourne", label: "Google Ads Management Melbourne" },
    sections: [
      {
        type: "paragraph",
        text: "This is the question we get asked more than any other, and the honest answer is: it's not about which one is better, it's about which problem you need solved first.",
      },
      {
        type: "heading",
        text: "Choose Google Ads first if...",
      },
      {
        type: "list",
        items: [
          "You need leads within the next 1-2 weeks, not months",
          "You're launching a new business or service and have zero existing Google visibility",
          "You want to test which keywords and offers actually convert before investing in long-term content",
          "You have a flexible budget you can turn on and off as needed",
        ],
      },
      {
        type: "heading",
        text: "Choose SEO first if...",
      },
      {
        type: "list",
        items: [
          "You're building for the next 1-3 years, not just the next month",
          "Your industry has strong \"near me\" or local search demand you're currently missing out on",
          "You want leads that don't disappear the moment you stop paying for them",
          "You have the patience for a 3-6 month runway before seeing full results",
        ],
      },
      {
        type: "heading",
        text: "Why most successful businesses eventually do both",
      },
      {
        type: "paragraph",
        text: "In practice, most Melbourne local businesses that stick around end up running both — Google Ads for the leads they need right now, and SEO building quietly in the background for the leads they'll get for free in six months. Google Ads buys you time; SEO is what you're buying it for.",
      },
      {
        type: "heading",
        text: "The mistake to avoid",
      },
      {
        type: "paragraph",
        text: "The worst outcome is picking neither and waiting for word-of-mouth to fill the gap, or picking SEO and expecting Google Ads-speed results, or picking Google Ads and expecting it to build long-term asset value the way SEO does. Match the tool to the timeline you actually need, and be honest with yourself about which one that is.",
      },
    ],
  },
  {
    slug: "google-business-profile-checklist",
    title: "The Google Business Profile Checklist Every Melbourne Local Business Needs",
    description:
      "A practical checklist for optimising your Google Business Profile to rank higher in Melbourne's Map Pack results and win more local customers.",
    excerpt:
      "Your Google Business Profile is often more important than your website. Here's the checklist to get it working properly.",
    date: "2026-02-02",
    readTime: "6 min read",
    category: "Google Business Profile",
    relatedService: {
      href: "/google-business-profile-melbourne",
      label: "Google Business Profile Melbourne",
    },
    sections: [
      {
        type: "paragraph",
        text: "For most local businesses, your Google Business Profile gets seen by more potential customers than your actual website — it's the box with your reviews, hours, and phone number that shows up before anyone even clicks through. Here's what to check.",
      },
      {
        type: "heading",
        text: "1. Category accuracy",
      },
      {
        type: "paragraph",
        text: "Your primary category should be the single most accurate description of your business — not the broadest one. A \"Plumber\" ranks differently to a \"Emergency plumber service,\" and picking the wrong primary category is one of the most common reasons businesses don't show up for the searches they actually want.",
      },
      {
        type: "heading",
        text: "2. Complete every field",
      },
      {
        type: "list",
        items: [
          "Business hours (including public holiday hours — this affects trust signals)",
          "Service areas, if you don't have a storefront customers visit",
          "A complete, keyword-natural business description",
          "Attributes relevant to your business (e.g. \"wheelchair accessible,\" \"free quotes\")",
        ],
      },
      {
        type: "heading",
        text: "3. Photos — more than you think you need",
      },
      {
        type: "paragraph",
        text: "Profiles with more photos consistently get more clicks and calls than sparse ones. Add real photos of your work, your team, and your premises — not stock images. Update them regularly; a profile with photos from three years ago signals inactivity to both Google and customers.",
      },
      {
        type: "heading",
        text: "4. Reviews — quantity, recency, and responses",
      },
      {
        type: "paragraph",
        text: "Review count and rating matter, but so does recency — a business with 40 reviews all from two years ago ranks worse than one steadily adding new reviews every month. Respond to every review, good and bad; it's a visible trust signal and Google factors engagement into ranking.",
      },
      {
        type: "heading",
        text: "5. Posts — the most underused feature",
      },
      {
        type: "paragraph",
        text: "Google Business Profile lets you publish short posts — offers, updates, new services — directly to your listing. Almost no small business uses this consistently, which makes it one of the easiest ways to signal an active, well-maintained profile to Google.",
      },
      {
        type: "heading",
        text: "6. Q&A — don't leave it empty",
      },
      {
        type: "paragraph",
        text: "Anyone can ask a public question on your profile, and if you don't answer it, someone else might with wrong information. Seed it yourself with the questions customers actually ask, answered accurately.",
      },
      {
        type: "paragraph",
        text: "Getting these six things right consistently outperforms almost any other single local SEO action you can take — and unlike a website rebuild, most of it can be done in an afternoon.",
      },
    ],
  },
  {
    slug: "website-mistakes-costing-customers",
    title: "5 Website Mistakes That Are Costing Melbourne Businesses Customers",
    description:
      "The five most common website mistakes we see on Melbourne local business websites, and what to fix first to stop losing customers before they even call.",
    excerpt:
      "Most customers judge a business within seconds of landing on its website. These are the mistakes making them leave.",
    date: "2026-02-09",
    readTime: "6 min read",
    category: "Website Design",
    relatedService: { href: "/website-design-melbourne", label: "Website Design Melbourne" },
    sections: [
      {
        type: "paragraph",
        text: "A customer typically decides whether to trust your business within seconds of landing on your website. These are the five mistakes we see most often on Melbourne local business sites — and they're usually costing more customers than any marketing spend can make up for.",
      },
      {
        type: "heading",
        text: "1. No clear phone number or call-to-action above the fold",
      },
      {
        type: "paragraph",
        text: "If a visitor has to scroll or hunt to find your phone number, you've already lost some of them. Your phone number and a clear next step (call, book, enquire) should be visible the instant the page loads, on both desktop and mobile.",
      },
      {
        type: "heading",
        text: "2. Slow load times",
      },
      {
        type: "paragraph",
        text: "Every extra second a page takes to load measurably increases the chance a visitor leaves before it finishes. This is especially damaging on mobile, where most local searches happen — a slow site doesn't just lose the sale, it can also hurt your Google rankings directly.",
      },
      {
        type: "heading",
        text: "3. Not mobile-friendly",
      },
      {
        type: "paragraph",
        text: "The majority of \"near me\" searches happen on a phone. A site that requires pinching and zooming to read, or has buttons too small to tap accurately, is actively pushing away the exact customers most likely to call you today.",
      },
      {
        type: "heading",
        text: "4. Generic stock-template content",
      },
      {
        type: "paragraph",
        text: "Vague copy like \"quality service you can trust\" tells a visitor nothing they couldn't get from any competitor's site. Specific details — what you actually do, which suburbs you serve, what makes your process different — build far more trust than generic reassurance.",
      },
      {
        type: "heading",
        text: "5. No social proof",
      },
      {
        type: "paragraph",
        text: "A website with zero reviews, testimonials, or trust signals asks visitors to take a leap of faith. Even a handful of real reviews or a photo of completed work does more to convert a hesitant visitor than another paragraph of marketing copy.",
      },
      {
        type: "paragraph",
        text: "None of these fixes require a full rebuild — most can be addressed individually. But if you're seeing decent traffic and still not enough calls, one of these five is almost always the reason.",
      },
    ],
  },
  {
    slug: "how-to-get-more-google-reviews",
    title: "How to Get More Google Reviews for Your Business (Without Being Pushy)",
    description:
      "A practical, non-pushy system for consistently getting more Google reviews for your Melbourne business, and why review volume directly affects local rankings.",
    excerpt:
      "Reviews are one of the biggest ranking factors you have direct control over. Here's a system that actually works.",
    date: "2026-02-16",
    readTime: "5 min read",
    category: "Google Business Profile",
    relatedService: {
      href: "/google-business-profile-melbourne",
      label: "Google Business Profile Melbourne",
    },
    sections: [
      {
        type: "paragraph",
        text: "Reviews are one of the few ranking factors a small business has almost complete control over — no algorithm update can take away a review someone chose to leave you. Yet most businesses treat asking for reviews as an afterthought. Here's a system that actually works.",
      },
      {
        type: "heading",
        text: "Ask at the right moment",
      },
      {
        type: "paragraph",
        text: "The best time to ask is immediately after you've delivered value — right after a completed job, a successful appointment, or a satisfied phone call. Waiting days or weeks means the moment (and the motivation) has passed.",
      },
      {
        type: "heading",
        text: "Make it a one-click process",
      },
      {
        type: "paragraph",
        text: "Every extra step between \"yes I'll leave a review\" and actually leaving one loses you reviewers. Get your direct Google review link (not just your profile link) and send it via text message immediately after the job — most people will do it right then if it takes ten seconds, and never do it if it takes two minutes of searching.",
      },
      {
        type: "heading",
        text: "Ask consistently, not occasionally",
      },
      {
        type: "paragraph",
        text: "A business that asks every single customer gets a steady stream of new reviews. A business that only asks when they remember gets a handful, then goes quiet for months — and Google's local algorithm favours consistent, recent review activity over a big cluster of old ones.",
      },
      {
        type: "heading",
        text: "Respond to every review",
      },
      {
        type: "paragraph",
        text: "Thank people for positive reviews specifically (mention what they mentioned, don't copy-paste the same reply). For a negative review, respond calmly and professionally — how you handle criticism publicly is often more persuasive to future customers than the review itself.",
      },
      {
        type: "heading",
        text: "Never buy or fake reviews",
      },
      {
        type: "paragraph",
        text: "Google actively detects and penalises fake review patterns, and getting caught can mean your entire profile gets suspended — wiping out real reviews along with the fake ones. It's not worth the risk for a shortcut that often doesn't even work.",
      },
      {
        type: "paragraph",
        text: "Set up a simple system — ask every time, make it effortless, respond to everything — and review growth becomes one of the most reliable, low-cost local SEO wins available to any Melbourne business.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
