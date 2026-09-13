import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["coburg"];

export const metadata = {
  title: `Digital Marketing Agency in Coburg | Prime Reach Digital`,
  description: `Digital marketing agency serving Coburg, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Coburg, SEO Coburg, Google Ads Coburg, website design Coburg, marketing agency Coburg`,
  alternates: {
    canonical: "/digital-marketing-coburg",
  },
  openGraph: {
    title: `Digital Marketing Agency in Coburg | Prime Reach Digital`,
    description: `Digital marketing agency serving Coburg, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
