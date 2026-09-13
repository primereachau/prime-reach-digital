import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["point-cook"];

export const metadata = {
  title: `Digital Marketing Agency in Point Cook | Prime Reach Digital`,
  description: `Digital marketing agency serving Point Cook, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Point Cook, SEO Point Cook, Google Ads Point Cook, website design Point Cook, marketing agency Point Cook`,
  alternates: {
    canonical: "/digital-marketing-point-cook",
  },
  openGraph: {
    title: `Digital Marketing Agency in Point Cook | Prime Reach Digital`,
    description: `Digital marketing agency serving Point Cook, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
