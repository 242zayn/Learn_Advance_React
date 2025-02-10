"use client";
import ContextCounter from "@/context/CounterContext";
import React, { useContext } from "react";

const HighOrderFuction = (OldFunction) => {
  // const handleData = () => {
  //   // setData(!data);
  //   console.log("This is handleData in Worker function");
  // };
  const WorkerFuction = (props) => {
    const { bgTolgo } = useContext(ContextCounter);
    return (
      <OldFunction
        {...props}
        ExtraFeture="Ye ki secret information hai"
        onClick={bgTolgo}
      />
    );
  };
  return WorkerFuction;
};

const OldFunction = ({ name, age, ExtraFeture, onClick }) => {
  return (
    <div>
      Hello {name} kya aap ki age {age} <span>{ExtraFeture} </span>
      <button onClick={onClick}>handleMode</button>
    </div>
  );
};

const EnhenceComponent = HighOrderFuction(OldFunction);

const HOC1 = () => {
  const { bgColor } = useContext(ContextCounter);
  return (
    <div className={` ${bgColor ? "bg-white" : "bg-red-600"} `}>
      This is HOC Component
      <EnhenceComponent ogColor={bgColor} name={"Sarvesh"} age={23} />
    </div>
  );
};

export default HOC1;
