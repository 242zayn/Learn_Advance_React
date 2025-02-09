"use client";
import Form from "@/components/Form";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <Form />
    </div>
  );
};

export default Page;
