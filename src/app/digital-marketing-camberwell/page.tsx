import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["camberwell"];

export const metadata = {
  title: `Digital Marketing Agency in Camberwell | Prime Reach Digital`,
  description: `Digital marketing agency serving Camberwell, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Camberwell, SEO Camberwell, Google Ads Camberwell, website design Camberwell, marketing agency Camberwell`,
  alternates: {
    canonical: "/digital-marketing-camberwell",
  },
  openGraph: {
    title: `Digital Marketing Agency in Camberwell | Prime Reach Digital`,
    description: `Digital marketing agency serving Camberwell, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
