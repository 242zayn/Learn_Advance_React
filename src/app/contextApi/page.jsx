"use client";
import CounterButton from "@/components/CounterButton";
import CounterDisplay from "@/components/CounterDisplay";
import CounterDisplay2 from "@/components/CounterDisplay2";
import ModeHandle from "@/components/ModeHandle";
import ContextCounter from "@/context/CounterContext";
import React, { useContext } from "react";

const Page = () => {
  const { bgColor, bgTolgo } = useContext(ContextCounter);

  return (
    <div
      className={` h-screen flex flex-col justify-center items-center ${
        bgColor ? "bg-black" : "bg-white"
      } ${bgColor ? "text-white" : "text-black"}  `}
    >
      <CounterDisplay />
      <CounterDisplay2 />
      <CounterButton />
      <ModeHandle />
      <button onClick={bgTolgo}>Togle</button>
    </div>
  );
};

export default Page;
