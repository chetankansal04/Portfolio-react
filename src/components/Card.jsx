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
}) => (
  <div className="flex flex-wrap flex-col border-solid border-2 shadow-lg rounded-md p-4">
    {img && (
      <img
        className="flex self-center transition-transform duration-300 hover:scale-110 object-fill w-12 h-12 rounded-full"
        src={img}
        alt={title}
      />
    )}
    <div className="place-self-center mb-5 scale-150">{icon}</div>
    <h2 className="text-xl font-semibold mb-1">{title}</h2>
    <p className="text-base mb-1">{content}</p>
    {field && <p className="text-sm mb-1 ">{field}</p>}
    {coursework && <p className="text-sm mb-1 text-wrap ">{coursework}</p>}
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
export default Card;
