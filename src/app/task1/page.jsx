"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Result from "@/components/Result";
import { useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);
  const [res, setRes] = useState("");

  const handleSubmit = (e) => {
    console.log(data);
    setRes(data);
  };
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <Result result={res} />
      <Input
        placeholder="Enter you name"
        vlaue={data}
        handleChange={(e) => setData(e.target.value)}
      />
      <Button submit={handleSubmit} />
    </div>
  );
};

export default Page;
