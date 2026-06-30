import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Prime Reach Digital | Digital Growth Agency Melbourne",
  description:
    "Melbourne's premium digital growth agency. We help local businesses dominate online with website design, SEO, Google Ads, Meta Ads, and social media management.",
  keywords:
    "digital marketing Melbourne, SEO Melbourne, Google Ads Melbourne, website design Melbourne, Meta Ads, social media management",
  openGraph: {
    title: "Prime Reach Digital | Digital Growth Agency Melbourne",
    description:
      "Premium digital growth and website management for Australian businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
