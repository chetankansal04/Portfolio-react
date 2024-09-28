import React from "react";
import Card from "./Card";
import { BsJournal, BsCart3 } from "react-icons/bs";

const Project = () => {
  return (
    <div className="flex flex-col ml-96 w-1/2">
      <p className="text-3xl font-bold mb-5">
        Things I've built trying to put my
        <br /> dent in the universe.
      </p>
      <p className="text-l font-normal pb-5">
        I've worked on many of little projects over the years but these <br />
        are the ones that I'm most proud of. some of these are open-source,
        <br /> so if you see something that piques your interest, check out the
        code
        <br /> and contribute if you have ideas for how it can be improved.
      </p>
      <div className="flex">
        <Card
          title="Shopping Cart Application"
          content="Developed a dynamic shopping cart application using React, enabling users to seamlessly browse, add, update, and remove products from their cart."
          icon={<BsCart3 />}
          linktext="Github"
          urlLink="https://github.com/chetankansal04/Shopping-Cart-React"
        ></Card>
        <Card
          title="Journal Application"
          content="Developed a Journal management application which enables user profile and journal entry management with secure CRUD operations using Spring Security, ensuring 100% privacy for user data."
          icon={<BsJournal />}
          linktext="Github"
          urlLink="https://github.com/chetankansal04/journalapp"
        ></Card>
      </div>
    </div>
  );
};

export default Project;
