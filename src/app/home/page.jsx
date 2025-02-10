"use client";
import Form from "@/components/Form";
import UseLayoutEffect from "@/components/UseLayoutEffect";
import ContextCounter from "@/context/CounterContext";
import React, { useContext, useEffect, useState } from "react";

const Page = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const { count } = useContext(ContextCounter);

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <span>{count} </span>
      <UseLayoutEffect />
    </div>
  );
};

export default Page;
