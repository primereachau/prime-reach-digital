import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["st-kilda"];

export const metadata = {
  title: `Digital Marketing Agency in St Kilda | Prime Reach Digital`,
  description: `Digital marketing agency serving St Kilda, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing St Kilda, SEO St Kilda, Google Ads St Kilda, website design St Kilda, marketing agency St Kilda`,
  alternates: {
    canonical: "/digital-marketing-st-kilda",
  },
  openGraph: {
    title: `Digital Marketing Agency in St Kilda | Prime Reach Digital`,
    description: `Digital marketing agency serving St Kilda, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
