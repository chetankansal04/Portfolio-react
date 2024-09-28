import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="flex justify-center mt-5">
      {location.pathname !== "/" && (
        <Link to="/">
          <img
            className="transition-transform duration-300 hover:scale-110 object-fill w-12 h-12 rounded-full mr-10"
            src="public/static/images/IMG_3176.png"
            alt="profilepicture"
          ></img>
        </Link>
      )}
      <div className="min-w-max flex justify-around w-1/2 bg-white shadow-md p-3 rounded-full text-md font-bold ">
        <button className="transition-transform duration-300 hover:scale-125">
          <Link to="/about">About</Link>
        </button>
        <button className="transition-transform duration-300 hover:scale-125">
          <Link to="/project">Projects</Link>
        </button>
        <button className="transition-transform duration-300 hover:scale-125">
          <Link to="/resume">Resume</Link>
        </button>
        <button className="transition-transform duration-300 hover:scale-125">
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
