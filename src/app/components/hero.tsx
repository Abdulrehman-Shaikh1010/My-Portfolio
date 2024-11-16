"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-blue-100 via-white to-blue-200">
      <div className="container mx-auto flex px-5 py-20 md:py-24 flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am{" "}
            <span className="text-blue-600">
              <Typewriter
                options={{
                  strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700 mb-6"></div>
          <p className="mb-8 leading-relaxed">
            Hi, I’m Abdulrehman—a Frontend engineer passionate about building
            beautiful, functional web apps with Next.js, TypeScript, and
            Tailwind CSS. Let’s create something amazing!
          </p>
          <div className="flex justify-center">
            <Link href="#Contact">
              <button className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                Get in a Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full shadow-lg"
            alt="hero"
            width={300}
            height={300}
            src="/assets/Profile/Profile-removebg-preview.png" // Update with your image path
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
