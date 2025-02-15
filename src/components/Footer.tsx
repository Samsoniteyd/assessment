"use client"

import React from "react";
import Image from "next/image";

import { FooterLink } from "@/types/foot";

interface FooterProps {
  footerLinks: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ footerLinks }) => {
  return (
    <footer className=" text-white bg-[#00040F] px-10  py-12">
      <div className="container ml-20 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image src="/logo.png" alt="HooBank Logo" width={150} height={50} />
          <p className="text-gray-300 mt-4 font-poppins font-normal text-[18px] leading-[32px] tracking-[0%]">
            A new way to make payments easy, reliable, and secure.
          </p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="font-poppins font-medium text-[18px] leading-[27px] tracking-[0%] ">{section.title}</h3>
            <ul className="mt-4  font-poppins font-normal text-[16px] leading-[24px] tracking-[0%] text-white/70">
              {section.links.map((link, i) => (
                <li key={i} className=" space-y-2 hover:text-primary transition cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className=" ml-20 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 mt-8 pt-6">
        <p className="text-gray-400 text-sm">Copyright © 2021 HooBank. All Rights Reserved.</p>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
        <Image src="/instagram.png" alt="Instagram" width={30} height={30} className="w-4 h-4 object-contain" />
      <Image src="/facebook.png" alt="Facebook" width={30} height={30} className="w-4 h-4 object-contain" />
      <Image src="/twitter.png" alt="Twitter" width={30} height={30} className="w-4 h-4 object-contain" />
      <Image src="/linkedin.png" alt="LinkedIn" width={10} height={30} className="w-4 h-4 object-contain" />
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
