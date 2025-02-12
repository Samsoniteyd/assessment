import React from "react";
import Image from "next/image";
// import { FooterLink } from "../types";
// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FooterLink } from "@/types/foot";

interface FooterProps {
  footerLinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ footerLinks }) => {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image src="/logo.svg" alt="HooBank Logo" width={150} height={50} />
          <p className="text-gray-400 mt-4">
            A new way to make payments easy, reliable, and secure.
          </p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-primary transition cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 mt-8 pt-6">
        <p className="text-gray-400 text-sm">© 2021 HooBank. All Rights Reserved.</p>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* <FaInstagram className="text-gray-400 hover:text-primary cursor-pointer" size={20} />
          <FaFacebookF className="text-gray-400 hover:text-primary cursor-pointer" size={20} />
          <FaTwitter className="text-gray-400 hover:text-primary cursor-pointer" size={20} />
          <FaLinkedinIn className="text-gray-400 hover:text-primary cursor-pointer" size={20} /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
