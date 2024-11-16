"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 via-white to-blue-200 text-gray-600">
      <div className="container mx-auto px-5 py-8">
        {/* Footer Top */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h2 className="text-lg font-medium text-gray-900">ABDULREHMAN SHAIKH</h2>
            <p className="mt-2 text-sm">Frontend Developer | UI/UX Designer | Graphic Designer</p>
          </div>
          <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61553115674141" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abdulrehman-shaikh-0b64422b9/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Abdulrehman-Shaikh1010" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © 2024 ABDULREHMAN SHAIKH. All rights reserved. | Powered by{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
