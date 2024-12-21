import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";


export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center md:pl-20 md:pr-20">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/*Mobile View*/}
          <div className="sm:max-w-lg sm:w-full sm:w-1/2 w-5/6 block md:hidden">
            <img
              className="object-cover object-center rounded scale-75 m-auto"
              alt="hero"
              src="./profile.png"
              width="50%" height="50%"
            />
          </div>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">
            Chue Chue Thet Wai
          </h2>
          <h5 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">Web Developer</h5>
          <p className="mb-3 leading-relaxed">
            Web Developer with 6 years of experience in development of multiple websites, optimizing software for
            customer satisfactions and creating new features. Proficient in an assortment of technologies, including PHP,
            React and MySQL. Able to effectively self-manage during independent projects, as well as collaborate in a team
            setting.
          </p>
          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/chue-chue-thet-wai-ba9878194"
              className="pr-4 inline-block text-accent hover:text-gray-800"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/chue-thet-wai"
              className="pr-4 inline-block text-accent hover:text-gray-800"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-amber-400 border-0 py-3 px-8 w-40 focus:outline-none hover:bg-amber-500 rounded text-lg">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/17ng_coekNXorH_wZeeCst9HNmcVIBfQ5/view"
              target="_blank"
              without
              rel="noreferrer"
              className="ml-4 inline-flex text-white bg-amber-400 border-0 py-3 px-8 w-40 focus:outline-none hover:bg-amber-500 hover:text-white rounded text-lg">
              My Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
          <img
            className="object-cover object-center rounded scale-75 m-auto"
            alt="hero"
            src="./profile.png" width="50%" height="50%"
          />
        </div>
      </div>
    </section>
  );
}