import React from "react";
import "./App.css";

import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
