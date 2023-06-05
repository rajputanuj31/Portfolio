import React from "react";
import "./index.css";
import Home from "./componentes/Home/Home";
import Skills from "./componentes/Skills/Skills";
import Projects from "./componentes/Projects/Projects";
import Contact from "./componentes/Contact/Conatct";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
