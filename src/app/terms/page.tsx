import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Prime Reach Digital",
  description: "Terms of Service for Prime Reach Digital — Melbourne digital marketing agency.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[var(--pr-black)] text-white">
      {/* Header */}
      <div className="border-b border-white/[0.06] py-6 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="mb-12">
          <span className="text-[var(--pr-blue)] text-xs font-semibold uppercase tracking-[0.2em]">Legal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">Terms of Service</h1>
          <p className="mt-4 text-[var(--text-muted)]">Last updated: 1 July 2026</p>
        </div>

        <div className="space-y-10 text-[var(--text-dim)] leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Acceptance of Terms</h2>
            <p>These Terms of Service (&quot;Terms&quot;) govern your use of the Prime Reach Digital website and any services you engage us for. By using our website, submitting an enquiry, or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Services Provided</h2>
            <p className="mb-3">Prime Reach Digital is a Melbourne-based digital marketing agency offering services including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Search Engine Optimisation (SEO)</li>
              <li>Google Ads and Meta Ads management</li>
              <li>Website design and management</li>
              <li>Google Business Profile optimisation</li>
              <li>Social media management and reporting</li>
            </ul>
            <p className="mt-3">The specific scope, deliverables, and terms of any engagement will be confirmed directly with you before work begins.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Free Website Demos</h2>
            <p>Where we offer to build a free demo of a website ahead of any paid engagement, that demo is provided with no cost and no obligation to proceed. You are free to decline the demo and walk away with nothing owed. If you choose to proceed, a separate agreement covering scope, timeline, and payment will be confirmed before further work begins.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. Client Responsibilities</h2>
            <p className="mb-3">To enable us to deliver our services effectively, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Provide accurate and complete information about your business</li>
              <li>Respond to requests for feedback, approvals, or access in a timely manner</li>
              <li>Provide necessary access to accounts, platforms, or systems required to deliver the service</li>
              <li>Ensure any content or material you provide does not infringe the rights of any third party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Payment Terms</h2>
            <p>Pricing and payment terms are agreed individually with each client based on the scope of work and are set out in your quote, proposal, or invoice. Fees for ongoing services (such as website or ad management) are generally billed monthly in advance unless otherwise agreed in writing. Late or non-payment may result in suspension of services.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Intellectual Property</h2>
            <p>Upon full payment for a completed website or asset, ownership of the final deliverable transfers to you, except for any third-party tools, licences, stock assets, or platforms used in its creation, which remain subject to their own licence terms. Until payment is received in full, all work remains the property of Prime Reach Digital.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Third-Party Platforms &amp; Advertising</h2>
            <p>Our services may involve managing accounts on third-party platforms such as Google, Meta, and TikTok. These platforms set their own policies, algorithms, and pricing, which are outside our control and subject to change at any time. We are not responsible for changes made by these platforms that affect performance, cost, or availability of advertising or search features.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. No Guarantee of Results</h2>
            <p>While we work to achieve the best possible outcomes for your business, digital marketing results depend on factors outside our control, including competitor activity, market conditions, and third-party platform algorithms. We do not guarantee specific rankings, traffic, lead volumes, or advertising results.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">9. Cancellation</h2>
            <p>Either party may end an ongoing engagement in line with the notice period agreed at the start of that engagement. Work completed and costs incurred up to the date of cancellation remain payable. Cancellation terms for one-off projects will be set out in the relevant quote or proposal.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Prime Reach Digital&apos;s liability for any claim arising from our services is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential loss, including loss of profits, revenue, or data.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">11. Governing Law</h2>
            <p>These Terms are governed by the laws of Victoria, Australia. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">12. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated date. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.</p>
          </section>

          <section className="border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-white font-semibold text-xl mb-3">13. Contact Us</h2>
            <p className="mb-4">For any questions about these Terms, please contact:</p>
            <div className="space-y-1">
              <p><strong className="text-white">Prime Reach Digital</strong></p>
              <p>Email: <a href="mailto:primereachau@gmail.com" className="text-[var(--pr-blue)] hover:underline">primereachau@gmail.com</a></p>
              <p>Phone: <a href="tel:0490881483" className="text-[var(--pr-blue)] hover:underline">0490 881 483</a></p>
              <p>Location: Melbourne, VIC, Australia</p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-faint)] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/" className="text-xs text-[var(--pr-blue)] hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
