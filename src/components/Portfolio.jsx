import React from "react";
import TaskEase from "../assets/portfolio/TaskEase_Project.png";
import DiceGame from "../assets/portfolio/Dice_Game.png";
import PortfolioProject from "../assets/portfolio/Potfolio_Project.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TaskEase,
      demo: "https://to-do-app-in-react-js.vercel.app/",
      code: "https://github.com/AliSherNadeem/To-Do-App-in-React-JS",
    },
    {
      id: 2,
      src: DiceGame,
      demo: "https://react-project-3-small-dice-game.vercel.app/",
      code: "https://github.com/AliSherNadeem/React-Project-3-Small-Dice-Game",
    },
    {
      id: 3,
      src: PortfolioProject,
      demo: "http://example.com/demo/portfolio-project", // Replace with the actual URL
      code: "https://github.com/AliSherNadeem/my-portfolio-project",
    },
  ];

  const handleDemoClick = (url) => {
    window.open(url, "_blank");
  };

  const handleCodeClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Portfolio
          </p>
          <p className="py-6">Take a look at some of my projects here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
