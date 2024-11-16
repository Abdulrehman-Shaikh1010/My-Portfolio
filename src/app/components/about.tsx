import React from "react";

export const About = () => {
  return (
    <div id="About" className="body-font bg-gradient-to-b from-blue-100 via-white to-blue-200 text-gray-600">
      <section className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            About Me
          </h1>
          <div className="w-20 h-1 bg-blue-500 rounded mx-auto mb-4"></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Hi, I'm Abdulrehman Shaikh, a passionate Frontend Developer, UI/UX Designer, and Graphic Designer. 
            I specialize in building dynamic, responsive websites and user interfaces using modern technologies 
            like Next.js, TypeScript, and Tailwind CSS. I have a keen eye for design and an obsession for making 
            websites both functional and visually appealing.
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-6">
            My goal is to create seamless, intuitive user experiences while building projects that challenge 
            my skills and help me grow. I'm always eager to learn new things and improve my craft.
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="flex justify-center">
          <div className="w-full sm:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills & Technologies</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>HTML, CSS,</li>
              <li>Tpescript / JavaScript</li>
              <li>Next.js</li>
              <li>React & React Native</li>
              <li>UI/UX Design</li>
              <li>Tailwind CSS</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
