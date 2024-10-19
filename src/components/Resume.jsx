import React from "react";

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Download My Resume</h2>
        <p className="text-gray-700 mb-4">
          Click the button below to download my resume and learn more about my skills and experiences.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1tE7LXj3ecm4QXfCJWdiKDjw9AeG9OvMl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;