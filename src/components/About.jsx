import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <div className="flex flex-col mx-10 my-10 md:my-0 md:w-2/3 self-center">
      <p className="md:text-3xl text-xl font-bold mb-5">
        Things I've built trying to put my
        <br /> dent in the universe.
      </p>
      <p className="md:text-lg text-base font-normal pb-5">
        I've worked on many of little projects over the years but these <br />
        are the ones that I'm most proud of. some of these are open-source,
        <br /> so if you see something that piques your interest, check out the
        code
        <br /> and contribute if you have ideas for how it can be improved.
      </p>
      <div className="grid gap-2 md:grid-cols-2">
      <Card
        img="/images/download.jpg"
        title="Raj Kumar Institute of Technology"
        content="Bachelor of Technology"
        field="Computer Science & Engineering - 7.0"
        coursework="Data Structures, Operating System, Machine Learning, DBMS, Computer Networks, OOPS."
        year=" 2021 - 2025 "
        linktext="rkgit.edu.in"
        urlLink="https://rkgit.edu.in/"
      ></Card>
      <Card
        img="/images/svm.jpg"
        title="D.H.T. Sarawati Vidya Mandir"
        content="Xll"
        field="76 % "
        year=" 2021 "
        linktext="dhtsvm.com"
        urlLink="https://dhtsvmnehrunagar.com/"
      ></Card>
      </div>
    </div>
  );
};

export default About;
