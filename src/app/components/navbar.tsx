"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white shadow-md sticky top-0 z-50">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <Link href={"/"} className="flex items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/assets/Logo/A.R logo.jpeg" // Update with your image path
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="ml-3 text-xl font-semibold text-blue-700">ABDULREHMAN SHAIKH</span>
          </Link>

          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href="#About" className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href="#Skill" className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href="#Project" className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href="#Contact" className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>

          {/* Download CV Button */}
          <Link href="/assets/CV/Abdulrehman Shaikh.pdf" target="_blank">
            <button className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Download CV
              <FaCloudDownloadAlt className="ml-2 text-lg" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
