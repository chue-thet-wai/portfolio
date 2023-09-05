import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import About from "./components/About";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <main className="text-black bg-white body-font">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />    
      <Contact />
      {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
      )}
    </main>
  );
}

export default App;
