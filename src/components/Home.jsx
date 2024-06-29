import React from "react";
import myImage from "../assets/My_image.png";
import { MdArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col justify-center
         items-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full mt-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Hi,
            </span>{" "}
            I'm Ali Sher Nadeem
          </h2>
          <h4 className="text-xl sm:text-2xl font-bold text-white mt-4">
            A Software Engineer and MERN Stack Developer.
          </h4>
          <p className="text-gray-400 py-4 max-w-md">
            I am a recent Software Engineering graduate with a strong foundation
            in web development and the MERN Stack.💻 I am passionate about
            designing and implementing responsive web applications and am
            actively seeking opportunities to enhance my skills and contribute
            to innovative projects.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={myImage}
            alt="my profile"
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
