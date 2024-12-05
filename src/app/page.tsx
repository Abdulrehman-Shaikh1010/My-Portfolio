import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Skill from "./components/skill";
import Contact from "./components/contact";
import Project from "./components/project";

export default function Page() {
  return ( 
      <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
