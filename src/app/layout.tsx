import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CursorLoader from "@/components/cursor/CursorLoader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prime Reach Digital | Digital Growth Agency Melbourne",
  description:
    "Melbourne's premium digital growth agency. We help local businesses dominate online with website design, SEO, Google Ads, Meta Ads, and social media management.",
  keywords:
    "digital marketing Melbourne, SEO Melbourne, Google Ads Melbourne, website design Melbourne",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Prime Reach Digital | Digital Growth Agency Melbourne",
    description: "Premium digital growth and website management for Australian businesses.",
    type: "website",
  },
  verification: {
    google: "TkeU0M4dXhomo96cNUuYHR8CDBuUtrgwbVqCZyCCvsw",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grain-overlay min-h-screen overflow-x-hidden">
        <CursorLoader />
        {children}
      </body>
    </html>
  );
}
