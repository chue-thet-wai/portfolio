import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { educations,certifications } from "../data";

export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto md:mb-10 md:mt-10 md:pl-20 md:pr-20">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-amber-400 mt-10 pb-2 pl-2">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 mb-5">
          <div className="mt-10">
            <p className="pb-5">
              Hi, My name is "Chue Chue Thet Wai". I have 6 years of 
              working experiences as web developer.
            </p>
            <p className="pb-5">
              I worked at "Myanmar Online Creations" company as a "Web Developer" about 3 half years.
              In this company, I used PHP with "Drupal" framework , MySQL for database and HTML,CSS,JavaScript,
              JQuery and Ajax for frontend.
            </p>
            <p className="pb-5">
              I worked at "Brycen Myanmar" company as a "Senior Web Developer" about 1 half years.
              In this company, I used PHP with "Laravel" framework , MySQL for database and React Js
              for frontend.
            </p>  
            <p>
              Now, I have working at "Techy Solutions" company as a "Senior Web Developer" from 2023,Nov.
              In this company, I write PHP with "Laravel" framework , MySQL for database and React JS and Tailwind CSS
              for frontend.
            </p>  
          </div>

          <div className="ml-10 mt-5 mb:mt-0">
            <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-3 mt-5">
              EDUCATIONS
            </h1>
            <div className="bg-amber-500 bg-opacity-80 p-5 rounded mr-5">
              {educations.map((education) => (                  
                <div className="mb-3">
                  <span className="flex-grow flex flex-col">
                    <span className="font-medium font-bold text-white">
                      <i>
                      {education.major}
                      </i>
                    </span>
                    <span className="text-sm font-bold text-white">
                      <i>
                      {education.period}  [{education.name}]
                      </i>
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-3 mt-3">
              CERTIFICATIONS
            </h1>           
            <div className="full bg-amber-500 bg-opacity-80 p-5 rounded mr-5">
              {certifications.map((certificate) => (                  
                <div>
                  <span className="text-sm font-bold text-white">
                      {certificate.period} : {certificate.name} {certificate.course}
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