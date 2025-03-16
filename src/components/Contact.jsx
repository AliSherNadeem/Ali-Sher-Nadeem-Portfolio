import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto min-h-[calc(100vh-5rem)]">
        <div className="pb-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 text-sm sm:text-base">
            Fill the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/pbqggvzb"
            method="POST"
            className="flex flex-col w-full sm:w-3/4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none text-sm sm:text-base"
            />
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="8"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none text-sm sm:text-base"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-sm sm:text-base">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
