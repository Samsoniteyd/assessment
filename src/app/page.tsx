"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BusinessSection from "../components/BusinessSection";
import Statistics from "../components/Statistics";
import Billing from "../components/Billing";
import CardDeal from "../components/CardDeal";
import Testimonials from "../components/Testimonials";
import TrustedCompanies from "../components/TrustedCompanies";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { FooterLink } from "@/types/foot";
import { Feature } from "@/types/index";


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

const features: Feature[] = [
  {
    id: 1,
    title: "Rewards",
    description: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
    icon: "/Star.png",
  },
  {
    id: 2,
    title: "100% Secured",
    description: "We take proactive steps to make sure your information and transactions are secure.",
    icon: "/Shield.png",
  },
  {
    id: 3,
    title: "Balance Transfer",
    description: "A balance transfer credit card can save you a lot of money in interest charges.",
    icon: "/Send.png",
  },
];

export default function Home() {
  return (
    <div className="bg-[#00040F]  font-poppins"
    >
      <Head>
        <title>HooBank | Next Gen Payment</title>
      </Head>

      {/* Navbar - */}
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Statistics stats={stat} />
        
      </motion.div>
      

      {/* Business Section & Billing */}
      <motion.div 
        className=""
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BusinessSection features={features} />
      </motion.div>

      <motion.div 
        className=""
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Billing />
      </motion.div>

      {/* Card Deal Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CardDeal />
      </motion.div>

      {/* Testimonials & Trusted Companies */}
      <motion.div
  
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Testimonials />
</motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <TrustedCompanies />
      </motion.div>

      {/* Call To Action */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CTA />
      </motion.div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Footer footerLinks={footerLinks} />
      </motion.div>
    </div>
  );
}
