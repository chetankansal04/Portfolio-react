import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaJava,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMongodb } from "react-icons/si";

const Home = () => {
  return (
    <div className="flex flex-col md:w-1/2 w-2/3 self-center items-center mx-10 my-10 md:my-20 md:my-0;">
      <img
        className="transition-transform duration-300 md:mt-5 hover:scale-110 object-fill w-32 h-32 rounded-full mb-5"
        src="images/IMG_3176.png"
        alt="profilepicture"
      ></img>
      <p className="md:text-3xl text-xl font-bold mb-5">
        Java Full Stack Developer
      </p>
      <p className="md:text-lg text-base text-center font-normal pb-5">
        Hi, I'm Chetan, a final year CSE student passionate about Java
        Development 🧑‍💻 I enjoy turning ideas into real-life projects. I am
        currently seeking opportunities to work on challenging projects and
        learn new technologies 😀
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 p-4 border m-5 rounded-lg shadow-lg opacity-80 flex-shrink">
        {/* HTML */}
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-600 shrink-1 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* CSS */}
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <FaJs className="text-yellow-500 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* React */}
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* Spring Boot */}
        <div className="flex flex-col items-center">
          <SiSpringboot className="text-green-600 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* Java */}
        <div className="flex flex-col items-center">
          <FaJava className="text-red-600 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* Tailwind */}
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-teal-400 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* GitHub */}
        <div className="flex flex-col items-center">
          <FaGithub className="text-gray-800 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* Docker */}
        <div className="flex flex-col items-center">
          <FaDocker className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        {/* MongoDB */}
        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-500 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
      </div>

      <div className="flex justify-center scale-150 m-2">
        <a
          className="mr-5"
          href="https://github.com/chetankansal04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/chetankansal__/"
          target="_blank"
          className="mr-5"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/kansalchetan007"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
