import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Prime Reach Digital",
  description: "Privacy Policy for Prime Reach Digital — Melbourne digital marketing agency.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020816] text-white">
      {/* Header */}
      <div className="border-b border-white/[0.06] py-6 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#0066FF] flex items-center justify-center">
              <span className="text-white font-bold text-xs">PR</span>
            </div>
            <span className="text-white font-semibold text-[15px]">
              Prime<span className="text-[#0066FF]">Reach</span> Digital
            </span>
          </Link>
          <Link href="/" className="text-sm text-[#64748B] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="mb-12">
          <span className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em]">Legal</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">Privacy Policy</h1>
          <p className="mt-4 text-[#64748B]">Last updated: 1 July 2026</p>
        </div>

        <div className="space-y-10 text-[#94a3b8] leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. About Us</h2>
            <p>Prime Reach Digital ("we", "our", "us") is a digital marketing agency based in Melbourne, Victoria, Australia. We are committed to protecting your personal information and handling it in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following personal information:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Full name</li>
              <li>Business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any additional information you provide through our contact or enquiry forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. How We Collect Information</h2>
            <p className="mb-3">We collect information when you:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Submit an enquiry or contact form on our website</li>
              <li>Contact us directly via phone or email</li>
              <li>Engage with us through our social media channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. How We Use Your Information</h2>
            <p className="mb-3">We use your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your enquiries and provide our services</li>
              <li>Send you relevant information about our services</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We will never sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Third Party Services</h2>
            <p className="mb-3">Our website uses the following third party services which may process your data:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-white">Formspree</strong> — processes form submissions</li>
              <li><strong className="text-white">Vercel</strong> — hosts our website</li>
              <li><strong className="text-white">Google Analytics</strong> — analyses website traffic</li>
              <li><strong className="text-white">Meta (Facebook/Instagram)</strong> — advertising and remarketing</li>
              <li><strong className="text-white">Google Ads</strong> — advertising and remarketing</li>
            </ul>
            <p className="mt-3">Each of these services has their own privacy policy governing how they handle your data.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience and analyse website traffic. You can disable cookies through your browser settings at any time, however this may affect the functionality of the website.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to provide our services and meet our legal obligations. Once your information is no longer required, it is securely deleted.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for us to use your information at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us using the details below.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">9. Data Security</h2>
            <p>We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification, or disclosure. However, no data transmission over the internet is completely secure.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">10. Complaints</h2>
            <p>If you believe we have breached the Australian Privacy Principles, you may contact us directly. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline">www.oaic.gov.au</a>.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
          </section>

          <section className="border border-white/[0.06] rounded-2xl p-6">
            <h2 className="text-white font-semibold text-xl mb-3">12. Contact Us</h2>
            <p className="mb-4">For any privacy-related questions or requests, please contact:</p>
            <div className="space-y-1">
              <p><strong className="text-white">Prime Reach Digital</strong></p>
              <p>Email: <a href="mailto:primereachau@gmail.com" className="text-[#0066FF] hover:underline">primereachau@gmail.com</a></p>
              <p>Phone: <a href="tel:0490881483" className="text-[#0066FF] hover:underline">0490 881 483</a></p>
              <p>Location: Melbourne, VIC, Australia</p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] py-8 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#334155] text-xs">© {new Date().getFullYear()} Prime Reach Digital · Melbourne, VIC</p>
          <Link href="/" className="text-xs text-[#0066FF] hover:underline">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
