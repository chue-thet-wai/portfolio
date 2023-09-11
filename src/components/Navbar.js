import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const closeToggle = () => setToggle(false);

  return (
    <header className="bg-amber-400 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row md:items-center">
        <a className="hidden md:block title-font font-medium text-black mb-4 md:mb-0">
          <a href="#home" className="ml-3 text-xl">
            Home
          </a>
        </a>
        <div className="block md:hidden flex flex-wrap">
          <a href="#home" className="ml-3 text-xl title-font font-medium text-black mb-4">
            Home
          </a>
          {/* Toggle button */}
          <button onClick={handleToggle} className="ml-auto">
            {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </button>
        </div>
        
        <nav className="hidden md:block md:ml-auto md:mt-0 md:py-1 md:pl-4 md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#experiences" className="mr-5 hover:text-white">
            Projects
          </a>        
          <a href="#contact" className="mr-5 hover:text-white">
            Contact
          </a>
        </nav>
        {/* Mobile Nav */}
        <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
          <ul className="flex flex-col items-center">
            <li className="pt-3">
              <a href="#about" className="mr-5 hover:text-white" onClick={closeToggle}>
                About
              </a>
            </li>
            <li className="pt-3">
              <a href="#skills" className="mr-5 hover:text-white" onClick={closeToggle}>
                Skills
              </a>
            </li>
            <li className="pt-3">
              <a href="#experiences" className="mr-5 hover:text-white" onClick={closeToggle}>
                Projects
              </a>  
            </li>
            <li className="pt-3">
              <a href="#contact" className="mr-5 hover:text-white" onClick={closeToggle}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}