"use client";
import React from "react";

const Props = ({ name, AlertFun }) => {
  const PropsAlert = () => {
    alert("KA ho");
  };
  return (
    <div>
      <h1> my name is {name}</h1>
      <button onClick={() => AlertFun(PropsAlert)}>Click</button>
    </div>
  );
};

export default Props;
