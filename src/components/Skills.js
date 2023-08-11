import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { languages, skills, technologies } from "../data";

export default function Skills() {
  return (
      <section id="skills">
      <div className="container px-5 py-10 mx-auto mb-10 mt-10 md:pl-20 md:pr-20">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[250px] md:w-[370px]  border-amber-400 pb-2 pt-5 mt-10">
          Skills &amp; Technologies
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
          ipsa delectus eum quo voluptas aspernatur accusantium distinctio
          possimus est.
        </p>
        <div class="sm:grid-cols-1 md:grid-col-1 lg:grid-col-1 xl:columns-2 mt-5">
          <div>
            <div>
              <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-4 text-center">
                Skills
              </h1>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills.map((skill) => (
                  <div key={skill} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-amber-400 rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-black w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-white">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>  
            </div>  
            <div>
              <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-4 text-center">
                Languages
              </h1>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {languages.map((language) => (
                  <div key={language} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-amber-400 rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-black w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-white">
                        {language}
                      </span>
                    </div>
                  </div>
                ))}
              </div>  
            </div>           
          </div>                     
          <div>
            <h1 className="sm:text-2xl text-1xl font-medium title-font text-black mb-4 text-center">
              Technologies
            </h1>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {technologies.map((technology) => (
                <div key={technology} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-amber-400 rounded flex p-4 h-full items-center">
                    <BadgeCheckIcon className="text-black w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {technology}
                    </span>
                  </div>
                </div>
              ))}
            </div>  
          </div>                
        </div> 
      </div>       
    </section>
  );
}