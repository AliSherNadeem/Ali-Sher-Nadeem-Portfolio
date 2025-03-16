import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaShareAlt, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/ali-sher-nadeem/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/AliSherNadeem",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:ali.thejsdev@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "./Ali Sher Nadeem Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="fixed z-10">
      <div className="md:hidden fixed top-24 left-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-gray-500 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-opacity duration-300"
        >
          {isOpen ? <FaTimes size={16} /> : <FaShareAlt size={16} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-32 left-0 w-40 transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col">
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-full h-12 px-4 bg-gray-500 hover:bg-gray-600 hover:rounded-md duration-300 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white text-sm"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex flex-col fixed top-[35%] left-0">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white text-sm sm:text-base"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;