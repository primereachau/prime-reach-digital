import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["werribee"];

export const metadata = {
  title: `Digital Marketing Agency in Werribee | Prime Reach Digital`,
  description: `Digital marketing agency serving Werribee, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Werribee, SEO Werribee, Google Ads Werribee, website design Werribee, marketing agency Werribee`,
  alternates: {
    canonical: "/digital-marketing-werribee",
  },
  openGraph: {
    title: `Digital Marketing Agency in Werribee | Prime Reach Digital`,
    description: `Digital marketing agency serving Werribee, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
