import React from "react";
import Home from "./Home";
import About from "./About";
import Counter from "./Counter";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
      <Routes>
        <Route path="/" element={ <Counter/> } />
        <Route path="home" element={ <Home/> } />jj
        <Route path="about" element={ <About/> } />
      </Routes>
  );
}

export default App;
