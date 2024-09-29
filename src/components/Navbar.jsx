import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex justify-center mt-5">
      {location.pathname !== "/" && (
        <Link to="/">
          <img
            className="hidden md:flex transition-transform duration-300 hover:scale-110 object-fill w-12 h-12 rounded-full mr-10"
            src="/images/IMG_3176.png"
            alt="profilepicture"
          ></img>
        </Link>
      )}
      <div className="hidden md:flex min-w-max justify-around w-1/2 bg-white shadow-md p-3 rounded-full text-md font-bold ">
        <button className="transition-transform duration-300 hover:scale-110">
          <Link to="/about">About</Link>
        </button>
        <button className="transition-transform duration-300 hover:scale-110">
          <Link to="/project">Projects</Link>
        </button>
        <button className="transition-transform duration-300 hover:scale-110">
          <Link to="/resume">Resume</Link>
        </button>
        <button className="transition-transform duration-300 hover:scale-110">
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>

      {/* mobile menu */}
      <div className="md:hidden flex items-center flex-col">
        <div className="mb-2">
          <button onClick={handleMenuButton}>
            <FiMenu />
          </button>
        </div>
        {isOpen && (
          <div className="scale-110 fixed top-12 bg-white shadow-md p-3 rounded-md text-md font-bold">
            <button
              onClick={handleMenuButton}
              className="block transition-transform duration-300 hover:scale-110"
            >
              <Link to="/about">About</Link>
            </button>
            <button
              onClick={handleMenuButton}
              className="block transition-transform duration-300 hover:scale-110"
            >
              <Link to="/project">Projects</Link>
            </button>
            <button
              onClick={handleMenuButton}
              className="block transition-transform duration-300 hover:scale-110"
            >
              <Link to="/resume">Resume</Link>
            </button>
            <button
              onClick={handleMenuButton}
              className="block transition-transform duration-300 hover:scale-110"
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
