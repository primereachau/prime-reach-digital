import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["footscray"];

export const metadata = {
  title: `Digital Marketing Agency in Footscray | Prime Reach Digital`,
  description: `Digital marketing agency serving Footscray, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Footscray, SEO Footscray, Google Ads Footscray, website design Footscray, marketing agency Footscray`,
  alternates: {
    canonical: "/digital-marketing-footscray",
  },
  openGraph: {
    title: `Digital Marketing Agency in Footscray | Prime Reach Digital`,
    description: `Digital marketing agency serving Footscray, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
