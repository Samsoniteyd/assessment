import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Poppins } from "next/font/google";
import BusinessSection from "../components/BusinessSection";
import { Feature } from "../types";
import Statistics from "../components/Statistics";
// import Billing from "../components/Billing";
import CardDeal from "../components/CardDeal";
import Testimonials from "../components/Testimonials";
import TrustedCompanies from "../components/TrustedCompanies";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { FooterLink } from "@/types/foot";
// import { FooterLink } from "../types";

const footerLinks: FooterLink[] = [
  {
    title: "Useful Links",
    links: ["Content", "How it Works", "Create", "Explore", "Terms & Services"],
  },
  {
    title: "Community",
    links: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
  },
  {
    title: "Partner",
    links: ["Our Partner", "Become a Partner"],
  },
];

const stat = [
  { id: 1, value: "3800+", label: "USER ACTIVE" },
  { id: 2, value: "230+", label: "TRUSTED BY COMPANY" },
  { id: 3, value: "$230M+", label: "TRANSACTION" },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
const stats = [
  { label: "USER ACTIVE", value: "3800+" },
  { label: "TRUSTED BY COMPANY", value: "230+" },
  { label: "TRANSACTION", value: "$230M+" },
];

const features: Feature[] = [
  {
    id: 1,
    title: "Rewards",
    description: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
    icon: "/icons/star.svg",
  },
  {
    id: 2,
    title: "100% Secured",
    description: "We take proactive steps to make sure your information and transactions are secure.",
    icon: "/icons/shield.svg",
  },
  {
    id: 3,
    title: "Balance Transfer",
    description: "A balance transfer credit card can save you a lot of money in interest charges.",
    icon: "/icons/send.svg",
  },
];

export default function Home() {
  return (
    <div className={`bg-darkBg   ${poppins.variable}`}>
      <Head>
        <title>HooBank | Next Gen Payment</title>
      </Head>
      <Navbar />
      <Hero />
      {/* Statistics Section */}
      <Statistics stats={stat} />
      <BusinessSection stats={stats} features={features} />
      <CardDeal />
      <Testimonials />
      <TrustedCompanies />
      <CTA/>
       {/* Footer Section */}
       <Footer footerLinks={footerLinks} />
    </div>
  );
}
