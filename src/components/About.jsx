import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-[calc(100vh-5rem)]">
        <div className="pb-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-base sm:text-lg mt-8 px-2 text-gray-300 text-justify md:px-0">
          I am Ali Sher Nadeem, a Software Engineer and MERN Stack Developer
          with more than one year of experience. I build responsive and
          high-quality web applications that are easy to use. My skills include
          HTML, CSS, Tailwind CSS, JavaScript, TypeScript, ReactJS, and NextJS,
          and I focus on creating effective solutions for users.
        </p>
        <br />
        <p className="text-base sm:text-lg px-2 text-gray-300 text-justify md:px-0">
          For back-end work, I use Node.js, Express.js, and MongoDB to ensure
          everything runs well. I also know how to use Git, GitHub, and JIRA to
          manage projects and work with teams. With a Bachelor’s degree and
          experience in meeting project deadlines, I am eager to join as an
          Associate Developer. I want to use my skills to contribute to
          meaningful and successful projects.
        </p>
      </div>
    </div>
  );
};

export default About;
