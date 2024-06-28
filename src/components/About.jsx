import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About Me
          </p>
        </div>
        <p className="text-xl mt-14 text-justify ">
          I am Ali Sher Nadeem, a passionate Software Engineer with a Bachelor's
          degree and a strong focus on Web Development, particularly the MERN
          Stack. My expertise spans a variety of coding languages including
          JavaScript, C++, and Java, complemented by front-end skills in React
          JS, Tailwind CSS, Bootstrap, HTML, and CSS.
        </p>

        <br />
        <p className="text-xl text-justify">
          On the back-end, I am proficient in Node.js, Express.js, and PHP, with
          MongoDB as my preferred database. Additionally, I am skilled in Git,
          GitHub, and JIRA for project management. My foundation includes
          Object-Oriented Programming, Data Structures and Algorithms, Software
          Engineering, Requirement Engineering, and Object-Oriented Design and
          Architecture.
        </p>
      </div>
    </div>
  );
};

export default About;
