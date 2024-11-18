import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Skill = () => {
  const skills = [
    { name: "HTML", proficiency: "95%" },
    { name: "CSS", proficiency: "90%" },
    { name: "JavaScript/TypeScript", proficiency: "90%" },
    { name: "Next.js", proficiency: "65%" },
    { name: "Graphic Designing", proficiency: "80%" },
    { name: "Figma", proficiency: "70%"},
  ];

  return (
    <div id="Skill" className="bg-gradient-to-b from-blue-100 via-white to-blue-200 py-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5">
          {/* Heading */}
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              My Expertise
            </h1>
          </div>
          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform hover:scale-105"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <FaCheckCircle size={20} />
                  </div>
                  <h2 className="text-gray-900 text-xl font-semibold">{skill.name}</h2>
                </div>
                <div className="relative w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                    style={{ width: skill.proficiency }}
                  ></div>
                </div>
                <p className="mt-2 text-right text-blue-500 font-bold">{skill.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
