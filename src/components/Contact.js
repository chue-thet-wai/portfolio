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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.8008399342694!2d96.12250772811021!3d16.845468123689635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19504d3b9d49d%3A0xbf520595738d191e!2sKyaung%20Kone%20St%203%2C%20Yangon%2C%20Myanmar!5e0!3m2!1sen!2smm!4v1694404178516!5m2!1sen!2smm"
          />
        </div>
        <div className="lg:w-2/4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-10 mb-10 md:mt-0">
          <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <br />
          <p className="leading-relaxed mb-5">
            I am currently open for a fulltime Web Developer role. If you
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