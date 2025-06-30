import React, { useState } from "react";
import DLIG from "../assets/portfolio/DLIG Project.png";
// import Revetment from "../assets/portfolio/Revetment.png";
import AutoMojo from "../assets/portfolio/AutoMojo.png";
import AnalyzeCycle from "../assets/portfolio/Analyze-cycle-frame.png";
import TradeBreakout from "../assets/portfolio/Trade Breakout.png";
// import Alignography from "../assets/portfolio/Alignography.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFullImage, setShowFullImage] = useState(false);

  const projects = [
    {
      id: 1,
      src: DLIG,
      title: "Digital Library and Information Gateway",
      company: "Metavystic",
      duration: "November 2024 - Present",
      details: [
        "Built the front-end using React, JavaScript, Mantine UI, and Tailwind CSS, creating a responsive interface for various key modules.",
        "Implemented modules like admin dashboard, user management, and department management, improving navigation efficiency by 25%.",
        "Optimized UI components for seamless performance, reducing user-reported issues by 15%.",
      ],
    },
    // {
    //   id: 2,
    //   src: Alignography,
    //   title: "Alignography",
    //   company: "Metavystic",
    //   duration: "April 2024 - Present",
    //   details: [
    //     "A modern web application designed to streamline business processes through an intuitive and efficient user interface.",
    //     "Developed responsive and scalable UI using Next.js, TypeScript, Tailwind CSS, and Mantine UI, improving development speed by 25% through component reusability.",
    //     "Integrate APIs for scheduling, data management, and user interactions, increasing feature delivery speed by 30%.",
    //     "Implemented Zustand for state management, reducing global state bugs by 40% and improving performance in complex workflows.",
    //   ],
    // },
    {
      id: 2,
      src: AutoMojo,
      title: "AutoMojo",
      company: "Freelance",
      duration: "September 2024 - December 2024",
      details: [
        "Developed a responsive front-end using Next.js, TypeScript, Tailwind CSS, and ShadCN, delivering a modern interface 30% faster than industry competitors like Shopmonkey.",
        "Integrated APIs to enable features like scheduling, inventory tracking, and customer messaging, supporting transactions with 99% uptime.",
        "Designed intuitive dashboards and workflows for shop owners, cutting task completion time by 20% based on user feedback.",
      ],
    },
    // {
    //   id: 3,
    //   src: Revetment,
    //   title: "Revetment",
    //   company: "Metavystic",
    //   duration: "March 2025 - Present",
    //   details: [
    //     "Enhanced the UI using Next.js, JavaScript, Tailwind CSS, and Mantine UI, boosting responsiveness across devices.",
    //     "Upgraded existing features to enhance performance, reducing user load times by 25% on average.",
    //     "Optimized data management systems, cutting processing times by 20% for improved efficiency.",
    //   ],
    // },
    {
      id: 3,
      src: AnalyzeCycle,
      title: "Analyze Cycle Frame",
      company: "Freelance",
      duration: "December 2024 - February 2025",
      details: [
        "Crafted a dynamic front-end using Next.js, TypeScript, Tailwind CSS, and ShadCN, boosting page load speed by 25% compared to similar platforms.",
        "Implemented user authentication and interactive dashboards, enabling users to access real-time stock data seamlessly.",
        "Designed stock detail modules with graphs and charts, improving data visualization clarity by 30% based on user testing.",
      ],
    },
    {
      id: 4,
      src: TradeBreakout,
      title: "Trade Breakout",
      company: "Freelance",
      duration: "January 2025 - March 2025",
      details: [
        "Developed a sleek front-end using Next.js, TypeScript, Tailwind CSS, and ShadCN, delivering real-time market analysis with 30% faster load times.",
        "Integrated advanced search and filters, enabling users to pinpoint breakout opportunities with 95% accuracy.",
        "Designed interactive dashboards with technical indicators and charts, enhancing stock trend visibility by 30% for Malaysian traders.",
      ],
    },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const toggleFullImage = () => setShowFullImage(!showFullImage);

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-[calc(100vh-5rem)]">
        <div className="pb-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            My Portfolio
          </p>
          <p className="py-4 text-sm sm:text-base">
            Take a look at some of my projects here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-500 rounded-lg flex flex-col"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover duration-200 hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between p-4 flex-grow">
                <h3 className="text-lg font-semibold text-center mb-2">
                  {project.title}
                </h3>
                <button
                  onClick={() => openModal(project)}
                  className="w-full px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:scale-105 duration-200"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && !showFullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div
            className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4 shadow-lg transition-opacity duration-300 ease-in-out opacity-0"
            style={{ opacity: selectedProject ? 1 : 0 }}
          >
            {/* Project Image with Button Overlay */}
            <div className="relative w-full h-60 overflow-hidden rounded-lg mb-4">
              <img
                src={selectedProject.src}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={toggleFullImage}
                className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:scale-105 duration-200 text-sm sm:text-base"
              >
                View Full Image
              </button>
            </div>

            {/* Project Details */}
            <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {selectedProject.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              <span className="font-semibold">{selectedProject.company}</span> |{" "}
              {selectedProject.duration}
            </p>
            <ul className="text-gray-300 list-disc list-inside mb-6 space-y-1">
              {selectedProject.details.map((detail, index) => (
                <li key={index} className="text-sm sm:text-base">
                  {detail}
                </li>
              ))}
            </ul>
            <button
              onClick={closeModal}
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:scale-105 duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full-Screen Image Modal */}
      {selectedProject && showFullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer"
          onClick={toggleFullImage}
        >
          <img
            src={selectedProject.src}
            alt={selectedProject.title}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
          <button
            onClick={toggleFullImage}
            className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:scale-105 duration-200"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
