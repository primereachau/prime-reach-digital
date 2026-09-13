import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["brighton"];

export const metadata = {
  title: `Digital Marketing Agency in Brighton | Prime Reach Digital`,
  description: `Digital marketing agency serving Brighton, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Brighton, SEO Brighton, Google Ads Brighton, website design Brighton, marketing agency Brighton`,
  alternates: {
    canonical: "/digital-marketing-brighton",
  },
  openGraph: {
    title: `Digital Marketing Agency in Brighton | Prime Reach Digital`,
    description: `Digital marketing agency serving Brighton, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
