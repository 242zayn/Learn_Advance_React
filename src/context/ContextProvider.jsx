"use client";
import React, { useState } from "react";
import ContextCounter from "./CounterContext";

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const bgTolgo = () => {
    setBgColor(!bgColor);
  };
  return (
    <ContextCounter.Provider
      value={{ count, increment, decrement, bgColor, bgTolgo }}
    >
      {children}
    </ContextCounter.Provider>
  );
};

export default ContextProvider;
