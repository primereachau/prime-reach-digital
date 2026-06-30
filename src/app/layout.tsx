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
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Prime Reach Digital | Digital Growth Agency Melbourne",
    description: "Premium digital growth and website management for Australian businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grain-overlay min-h-screen">
        <CursorLoader />
        {children}
      </body>
    </html>
  );
}
