import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["box-hill"];

export const metadata = {
  title: `Digital Marketing Agency in Box Hill | Prime Reach Digital`,
  description: `Digital marketing agency serving Box Hill, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Box Hill, SEO Box Hill, Google Ads Box Hill, website design Box Hill, marketing agency Box Hill`,
  alternates: {
    canonical: "/digital-marketing-box-hill",
  },
  openGraph: {
    title: `Digital Marketing Agency in Box Hill | Prime Reach Digital`,
    description: `Digital marketing agency serving Box Hill, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
