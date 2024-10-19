import React from "react";
import Card from "./Card";
import { BsJournal, BsCart3 } from "react-icons/bs";

const Project = () => {
  return (
    <div className="flex flex-col mx-10 my-10 md:my-0 md:w-2/3 self-center">
      <div className="">
      <p className=" md:text-3xl text-xl font-bold mb-5">
        Things I've built trying to put my dent in the universe.
      </p>
      <p className="md:text-lg text-base font-normal pb-5">
        I've worked on many of little projects over the years but these are the ones that I'm most proud of. some of these are open-source, so if you see something that piques your interest, check out the
        code and contribute if you have ideas for how it can be improved.
      </p>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <Card
          title="Shopping Cart Application"
          content="Developed a dynamic shopping cart application using React, enabling users to seamlessly browse, add, update, and remove products from their cart. Implemented CI/CD using Github actions for automatic testing."
          icon={<BsCart3 />}
          linktext="Github"
          urlLink="https://github.com/chetankansal04/Shopping-Cart-React"
        ></Card>
        <Card
          title="Journal Application"
          content="Developed a Journal management application which enables user profile and journal entry management with secure CRUD operations using Spring Security and User friendly Interface using React, ensuring 100% privacy for user data."
          icon={<BsJournal />}
          linktext="Github"
          urlLink="https://journal-app-chetankansal.vercel.app"
        ></Card>
      </div>
    </div>
  );
};

export default Project;
