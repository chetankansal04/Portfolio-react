import React from "react";
import { BsLink45Deg } from "react-icons/bs";

const Card = ({
  title,
  content,
  field,
  coursework,
  year,
  img,
  icon,
  linktext,
  urlLink,
}) => {
  return (
    <div className="flex flex-col border-solid border-2 shadow-lg rounded-md p-4 mr-2 min-w-96">
      {img && (
        <img
          className="bg-blend-screen place-self-center transition-transform duration-300 hover:scale-110 object-fill w-12 h-12 rounded-full mr-10"
          src={img}
          alt={title}
        />
      )}
      <div className="place-self-center mb-5 scale-150">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-base mb-1 ">{content}</p>
      {field && <p className="text-sm mb-1 ">{field}</p>}
      {coursework && <p className="text-sm mb-1 ">{coursework}</p>}
      {year && <p className="text-sm mb-1 ">{year}</p>}
      <span className="flex">
        <BsLink45Deg />
        {urlLink && (
          <a
            className=" ml-1 text-sm font-medium text-blue-800"
            href={urlLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linktext}
          </a>
        )}
      </span>
    </div>
  );
};
export default Card;
