import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const handleTabClick = (tab) => {
    setIsActive(tab);
    setIsOpen(false);
  };

  const handleMenuButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex justify-center sticky top-5 mt-5">
      {location.pathname !== "/" && (
        <Link to="/">
          <img
            className="hidden md:flex transition-transform duration-300 hover:scale-110 object-fill w-12 h-12 rounded-full mr-10"
            src="/images/IMG_3176.png"
            alt="profilepicture"
            onClick={() => {
              handleTabClick("home");
            }}
          ></img>
        </Link>
      )}
      <div className="hidden md:flex min-w-max justify-around w-1/2 bg-white shadow-md p-3 rounded-full text-md font-bold ">
        <button
          onClick={() => {
            handleTabClick("about");
          }}
          className={`transition-transform duration-300 hover:scale-110 ${
            isActive === "about" && "text-blue-500 font-bold"
          }`}
        >
          <Link to="/about">About</Link>
        </button>
        <button
          onClick={() => {
            handleTabClick("project");
          }}
          className={`transition-transform duration-300 hover:scale-110 ${
            isActive === "project" && "text-blue-500 font-bold"
          }`}
        >
          <Link to="/project">Projects</Link>
        </button>
        <button
          onClick={() => {
            handleTabClick("resume");
          }}
          className={`transition-transform duration-300 hover:scale-110 ${
            isActive === "resume" && "text-blue-500 font-bold"
          }`}
        >
          <Link to="/resume">Resume</Link>
        </button>
        <button
          onClick={() => {
            handleTabClick("contact");
          }}
          className={`transition-transform duration-300 hover:scale-110 ${
            isActive === "contact" && "text-blue-500 font-bold"
          }`}
        >
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>

      {/* mobile menu */}
      <div className="md:hidden flex items-center flex-col">
        <div className="bg-white shadow-md pt-1 px-2 rounded-lg">
          <button onClick={handleMenuButton}>
            <FiMenu />
          </button>
        </div>
        {isOpen && (
          <div className="scale-110 fixed top-16 bg-white shadow-md p-3 rounded-md text-sm font-bold">
            <button
              onClick={() => {
                handleTabClick("home");
                handleMenuButton;
              }}
              className={`block transition-transform duration-300 hover:scale-110 ${
                isActive === "home" && "text-blue-500 font-bold"
              }`}
            >
              <Link to="/">Home</Link>
            </button>
            <button
              onClick={() => {
                handleTabClick("about");
                handleMenuButton;
              }}
              className={`block transition-transform duration-300 hover:scale-110 ${
                isActive === "about" && "text-blue-500 font-bold"
              }`}
            >
              <Link to="/about">About</Link>
            </button>
            <button
              onClick={() => {
                handleTabClick("project");
                handleMenuButton;
              }}
              className={`block transition-transform duration-300 hover:scale-110 ${
                isActive === "project" && "text-blue-500 font-bold"
              }`}
            >
              <Link to="/project">Projects</Link>
            </button>
            <button
              onClick={() => {
                handleTabClick("resume");
                handleMenuButton;
              }}
              className={`block transition-transform duration-300 hover:scale-110 ${
                isActive === "resume" && "text-blue-500 font-bold"
              }`}
            >
              <Link to="/resume">Resume</Link>
            </button>
            <button
              onClick={() => {
                handleTabClick("contact");
                handleMenuButton;
              }}
              className={`block transition-transform duration-300 hover:scale-110 ${
                isActive === "contact" && "text-blue-500 font-bold"
              }`}
            >
              <Link to="/contact">Contact Me</Link>
            </button>
          </div>
        )}
      </div>
      <div className="md:hidden"></div>
    </header>
  );
};

export default Navbar;
