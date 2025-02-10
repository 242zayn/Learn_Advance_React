"use client";
import ContextCounter from "@/context/CounterContext";
import React, { useContext } from "react";

const CounterDisplay = () => {
  const { count } = useContext(ContextCounter);
  return <div> The contvalue is {count} </div>;
};

export default CounterDisplay;
