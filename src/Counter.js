import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Routes, Route } from "react-router-dom"

function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Routes>
      <Route path="home" element={ <Home/> } />jj
        <Route path="about" element={ <About/> } />
        </Routes>
    </>
  );
}

export default Counter;
