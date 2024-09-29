import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col items-center mx-10 my-10 md:my-0">
      <img
        className="transition-transform duration-300 hover:scale-110 object-fill w-32 h-32 rounded-full mb-5"
        src="images/IMG_3176.png"
        alt="profilepicture"
      ></img>
      <p className="md:text-3xl text-xl font-bold mb-5">Java Full Stack Developer</p>
        <p className="md:text-lg text-base font-normal pb-5 w-1/2">
          Hi, I'm Chetan, a final year CSE student passionate about Java
          Development 🧑‍💻
          I enjoy turning ideas into real-life projects. I am currently seeking
          opportunities to work on challenging projects and learn new
          technologies 😀
        </p>
        <div className="flex justify-center scale-150">
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
