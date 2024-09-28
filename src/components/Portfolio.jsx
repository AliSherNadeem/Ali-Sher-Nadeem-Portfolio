import React from "react";
import TaskEase from "../assets/portfolio/TaskEase_Project.png";
import ContactApp from "../assets/portfolio/contact_app.png";
import DiceGame from "../assets/portfolio/Dice_Game.png";
import PortfolioProject from "../assets/portfolio/Ali-Sher-Nadeem-Portfolio.png";
import AdviceGeneratorApp from "../assets/portfolio/Advice-generator.png";
// import FurryFriendFinder from "../assets/portfolio/Furry-Friend-Finder.png";
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
      demo: "http://example.com/demo/portfolio-project", // Replace with the actual URL
      code: "https://github.com/AliSherNadeem/my-portfolio-project",
    },
    {
      id: 5,
      src: AdviceGeneratorApp,
      demo: "https://advice-generator-app-751.vercel.app/",
      code: "https://github.com/AliSherNadeem/Advice-Generator-App",
    },
    // {
    //   id: 6,
    //   src: FurryFriendFinder,
    //   demo: "#", // Replace with the actual URL
    //   code: "#",
    // },
    {
      id: 7,
      src: RatingCard,
      demo: "http://interactive-rating-component-main-751.vercel.app/", // Replace with the actual URL
      code: "https://github.com/AliSherNadeem/interactive-rating-component-main",
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
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 md:pt-8 md:h-screen"
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
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
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
