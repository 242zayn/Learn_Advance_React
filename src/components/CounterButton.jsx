"use client";
import ContextCounter from "@/context/CounterContext";
import React, { useContext } from "react";

const CounterButton = () => {
  const { decrement, increment } = useContext(ContextCounter);
  return (
    <div>
      <button onClick={decrement} className="bg-red-500 px-2 py-2 my-2">
        Decreiemnt
      </button>
      <button onClick={increment} className="bg-green-500 px-2 py-2 my-2">
        Increment
      </button>
    </div>
  );
};

export default CounterButton;
