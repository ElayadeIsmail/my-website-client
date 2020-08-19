import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import handleTheme from "./utils/handleTheme";

const mode = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : "blue";

const App = () => {
  useEffect(() => {
    handleTheme(mode);
  }, []);
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
