import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <main className="text-black bg-white body-font">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />    
      <Contact />
    </main>
  );
}

export default App;
