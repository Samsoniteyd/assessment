'use client'

import React from "react";


const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-[#00040F] px-10 justify-between items-center bg-darkBg  py-6">
      <div className=" text-sm font-bold">
        <img src="/logo.png" alt="" className="w-28 " />
      </div>
      <ul className="flex space-x-8 ">
        <li className="cursor-pointer text-white">Home</li>
        <li className="cursor-pointer text-white/70">About Us</li>
        <li className="cursor-pointer text-white/70">Features</li>
        <li className="cursor-pointer text-white/70">Solution</li>
      </ul>
    </nav>
  );
};

export default Navbar;
