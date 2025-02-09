"use client";
import ExpensiveTask from "@/components/ExpensiveTask";
import useCounter from "@/components/useCounter";
import React, { useEffect, useMemo, useState } from "react";

const Page = () => {
  const [count, Increment, Decrement] = useCounter();
  const [complex, setComplex] = useState(4);

  const ComplexCalu = (num) => {
    console.log("inside Comple");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  const DobuleData = useMemo(() => {
    ComplexCalu(complex);
  }, [complex]);

  useEffect(() => {
    console.log("use effect render");
  }, []);
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <span>{count} </span>
      <div>
        <button onClick={Decrement} className="bg-red-500 px-2 py-2 my-2">
          Decreiemnt
        </button>
        <button onClick={Increment} className="bg-green-500 px-2 py-2 my-2">
          Increment
        </button>
      </div>
      <span>Dboule DATA {DobuleData} </span>
      <ExpensiveTask />
    </div>
  );
};

export default Page;
