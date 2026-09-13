import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["brunswick"];

export const metadata = {
  title: `Digital Marketing Agency in Brunswick | Prime Reach Digital`,
  description: `Digital marketing agency serving Brunswick, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Brunswick, SEO Brunswick, Google Ads Brunswick, website design Brunswick, marketing agency Brunswick`,
  alternates: {
    canonical: "/digital-marketing-brunswick",
  },
  openGraph: {
    title: `Digital Marketing Agency in Brunswick | Prime Reach Digital`,
    description: `Digital marketing agency serving Brunswick, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
