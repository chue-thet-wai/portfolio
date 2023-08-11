import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto md:mb-10 md:mt-10 md:pl-20 md:pr-20">       
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-amber-400 pb-2 pt-5 mt-10">
          Projects
        </h2>
        <p className="mb-10">
          Here are my production level projects.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div class="card mr-4 mb-4 border-2 border-color: border-amber-400">
                <img
                  alt="project_image"
                  src={project.image}
                />
                <div className="p-2">
                  <h1 className="text-black font-bold text-center mb-3">{project.title}</h1>
                  <div className="pl-2"><b>Language &nbsp;&nbsp;:</b> {project.subtitle}</div>
                  <div className="pl-2"><b>Desctiption:</b> {project.description}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}