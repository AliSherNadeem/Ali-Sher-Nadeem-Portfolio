import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import php from "../assets/php-logo.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import github from "../assets/github.png";
import jira from "../assets/jira.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: react,
      title: "React JS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: next,
      title: "Next JS",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-600",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 9,
      src: php,
      title: "PHP",
      style: "shadow-indigo-400",
    },
    {
      id: 10,
      src: node,
      title: "Node JS",
      style: "shadow-lime-500",
    },
    {
      id: 11,
      src: express,
      title: "Express JS",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: jira,
      title: "Jira",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-8 pt-20 md:pt-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are the tools & technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
