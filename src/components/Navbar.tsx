'use client'

import React from "react";


const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-white text-2xl font-bold">HooBank</h1>
      <ul className="flex space-x-8 text-white">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Solution</li>
      </ul>
    </nav>
  );
};

export default Navbar;
