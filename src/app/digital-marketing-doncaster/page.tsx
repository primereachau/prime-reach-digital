import SuburbPage from "@/components/sections/SuburbPage";
import { suburbs } from "@/lib/suburbs";

const suburb = suburbs["doncaster"];

export const metadata = {
  title: `Digital Marketing Agency in Doncaster | Prime Reach Digital`,
  description: `Digital marketing agency serving Doncaster, Melbourne. SEO, Google Ads, website design, and Google Business Profile management for local businesses.`,
  keywords: `digital marketing Doncaster, SEO Doncaster, Google Ads Doncaster, website design Doncaster, marketing agency Doncaster`,
  alternates: {
    canonical: "/digital-marketing-doncaster",
  },
  openGraph: {
    title: `Digital Marketing Agency in Doncaster | Prime Reach Digital`,
    description: `Digital marketing agency serving Doncaster, Melbourne.`,
    type: "website",
  },
};

export default function Page() {
  return <SuburbPage suburb={suburb} />;
}
