import React from "react";
import { HashRouter } from "react-router-dom"; // ⬅️ Import HashRouter
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <HashRouter>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
