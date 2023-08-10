import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { educations,certifications } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto mb-10 mt-10 pl-20 pr-20">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-amber-400 mt-10 pb-2 pl-2">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 mb-5">
          <div className="mt-10">
            <p className="pb-5">
              Hi, My Name Is Rohima Akther everyone calls me Amrin. I am a
              Frontend Developer. I build beautifull websites with React and
              Tailwind CSS.
            </p>
            <p className="pb-5">
              I am proficient in Frontend skills like React.js, Redux, Redux Tool
              Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
            </p>

            <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

            <p>
              In my spare time I create YouTube videos and write blogs on my Blog.
              Where I talk about programming theory and build various projects.
            </p>
          </div>
          <div className="ml-5">
            <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-3">
              EDUCATION
            </h1>
            <div className="bg-amber-400 bg-opacity-80 p-5 rounded">
              {educations.map((education) => (                  
                <div className="mb-3">
                  <span className="flex-grow flex flex-col">
                    <span className="font-medium font-bold text-white">
                      {education.major}
                    </span>
                    <span className="text-sm font-bold text-red-600">
                      {education.period}  [{education.name}]
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-3 mt-3">
              CERTIFICATIONS
            </h1>           
            <div className="full bg-amber-400 bg-opacity-80 p-5 rounded">
              {certifications.map((certificate) => (                  
                <div>
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-white">
                      {certificate.period} : {certificate.name}
                    </span>
                  </span>
                </div>                 
              ))}
            </div>           
          </div>        
        </div>
      </div>
    </section>
  );
}