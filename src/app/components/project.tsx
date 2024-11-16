import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Static Resume Project",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/assets/Projects/MResume.jpg", // Ensure this path is correct
    link: "https://milestone-1-abdulrehman-shaikhs-projects.vercel.app/",
  },
  {
    title: "Resume Builder",
    description: "This is a project I created for practice and learning..",
    image: "/assets/Projects/R..Builder.jpg", // Replace with actual image path
    link: "https://milestone-3-sigma-six.vercel.app/",
  },
  {
    title: "Share Able Resume Builder",
    description: "An share able resume website built with HTML, CSS and Typescript.",
    image: "/assets/Projects/S.B.jpg", // Replace with actual image path
    link: "https://milestone-5-nine-xi.vercel.app/",
  },
];

const Project = () => {
  return (
    <div id="Project" className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5">
          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              PROJECTS
            </h2>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              My Recent Work
            </h1>
          </div>
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h2 className="text-sm font-medium text-blue-500 uppercase mb-1">
                    {project.title}
                  </h2>
                  <h1 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h1>
                  <p className="leading-relaxed mb-4 text-gray-700">{project.description}</p>
                  <Link href={project.link} target="_blank">
                    <p className="text-blue-500 hover:underline text-right">View Project →</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
