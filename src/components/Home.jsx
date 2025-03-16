import React from "react";
import myImage from "../assets/My_image.png";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-5rem)] px-4">
        <div className="flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Hi,
            </span>{" "}
            I'm Ali Sher Nadeem
          </h2>
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-4">
            Software Engineer and MERN Stack Developer
          </h4>
          <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Software Engineer and MERN Stack Developer with over 1 year of
            experience building responsive, high-quality web applications.
            Skilled in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, ReactJS,
            and NextJS with a focus on delivering efficient and user-friendly
            solutions. Seeking an Associate Developer role to apply my expertise
            and contribute to impactful projects.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer mx-auto md:mx-0"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src={myImage}
            alt="my profile"
            className="w-40 sm:w-56 md:w-72 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
