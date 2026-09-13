import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["frankston"];

export const metadata = {
  title: `Digital Marketing Agency in Frankston | Prime Reach Digital`,
  description: `Digital marketing agency serving Frankston, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Frankston, SEO Frankston, Google Ads Frankston, website design Frankston, marketing agency Frankston`,
  alternates: {
    canonical: "/digital-marketing-frankston",
  },
  openGraph: {
    title: `Digital Marketing Agency in Frankston | Prime Reach Digital`,
    description: `Digital marketing agency serving Frankston, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
