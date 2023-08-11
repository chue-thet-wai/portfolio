import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap md:pl-20 md:pr-20">
        <div className="w-full h-[200px] md:h-auto lg:w-2/4 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="lg:w-2/4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-10 mb-10 md:mt-0">
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <br />
          <p className="leading-relaxed mb-5">
            I am currently open for a fulltime Backend Developer role. If you
            want to discuss about that feel free to email me or call me.
          </p>
          <br />
          <div className="relative mb-4">
            <span className="font-bold">Email &nbsp;:</span> chuechuethetwai14@gmail.com
          </div>
          <div className="relative mb-4">
           <span className="font-bold">Phone:</span> +959955532578
          </div>
        </div>
      </div>
      <div className="py-4 text-center bg-amber-500 text-white "> &copy; 2023 chuethetwai</div>
    </section>
  );
}