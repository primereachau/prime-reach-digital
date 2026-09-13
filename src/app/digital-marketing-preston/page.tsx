import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["preston"];

export const metadata = {
  title: `Digital Marketing Agency in Preston | Prime Reach Digital`,
  description: `Digital marketing agency serving Preston, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Preston, SEO Preston, Google Ads Preston, website design Preston, marketing agency Preston`,
  alternates: {
    canonical: "/digital-marketing-preston",
  },
  openGraph: {
    title: `Digital Marketing Agency in Preston | Prime Reach Digital`,
    description: `Digital marketing agency serving Preston, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
