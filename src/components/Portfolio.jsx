import React from "react";
import TaskEase from "../assets/portfolio/TaskEase_Project.png";
import ContactApp from "../assets/portfolio/contact_app.png";
import DiceGame from "../assets/portfolio/Dice_Game.png";
import PortfolioProject from "../assets/portfolio/Ali-Sher-Nadeem-Portfolio.png";
import AdviceGeneratorApp from "../assets/portfolio/Advice-generator.png";
import RatingCard from "../assets/portfolio/rating_component.png";

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
      src: ContactApp,
      demo: "https://contact-app-using-react-and-firebase.vercel.app/",
      code: "https://github.com/AliSherNadeem/Contact-App-using-React-and-Firebase",
    },
    {
      id: 3,
      src: DiceGame,
      demo: "https://react-project-3-small-dice-game.vercel.app/",
      code: "https://github.com/AliSherNadeem/React-Project-3-Small-Dice-Game",
    },
    {
      id: 4,
      src: PortfolioProject,
      demo: "http://example.com/demo/portfolio-project",
      code: "https://github.com/AliSherNadeem/my-portfolio-project",
    },
    {
      id: 5,
      src: AdviceGeneratorApp,
      demo: "https://advice-generator-app-751.vercel.app/",
      code: "https://github.com/AliSherNadeem/Advice-Generator-App",
    },
    {
      id: 6,
      src: RatingCard,
      demo: "http://interactive-rating-component-main-751.vercel.app/",
      code: "https://github.com/AliSherNadeem/interactive-rating-component-main",
    },
  ];

  const handleDemoClick = (url) => window.open(url, "_blank");
  const handleCodeClick = (url) => window.open(url, "_blank");

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
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-40 object-cover"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoClick(demo)}
                  className="w-1/2 px-4 py-2 m-2 text-sm sm:text-base duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(code)}
                  className="w-1/2 px-4 py-2 m-2 text-sm sm:text-base duration-200 hover:scale-105"
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
