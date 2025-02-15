'use client'

import React from "react";
import Image from "next/image";



const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-[#00040F] px-10 justify-between items-center bg-darkBg  py-6"
    style={{
      backgroundImage: "url('/Recnav.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className=" ml-20 text-sm font-bold">
        {/* <Image src="/logo.png" alt="" className="w-28 " /> */}
        <Image src="/logo.png" alt="Logo" width={120} height={50} />

      </div>
      <ul className="flex space-x-8 "
      >
        <li className="cursor-pointer text-white">Home</li>
        <li className="cursor-pointer text-white/70">About Us</li>
        <li className="cursor-pointer text-white/70">Features</li>
        <li className="cursor-pointer text-white/70">Solution</li>
      </ul>
    </nav>
  );
};

export default Navbar;
