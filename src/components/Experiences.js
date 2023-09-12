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
          <b>Here are my production level projects.</b>
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div class="card mr-4 mb-4 rounded overflow-hidden shadow-lg">
              <a href={project.link}>
                <img
                  class="w-full"
                  alt="project_image"
                  src={project.image}
                />
                <div className="px-6 py-4">
                  <h1 className="font-bold text-xl mb-2">{project.title}</h1>
                  <div className="text-base"><b>Language &nbsp;&nbsp;:</b> {project.subtitle}</div>
                  <div className="text-base"><b>Desctiption:</b> {project.description}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}