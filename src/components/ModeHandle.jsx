import ContextCounter from "@/context/CounterContext";
import React, { useContext, useState } from "react";

const ModeHandle = () => {
  const { bgColor, bgTolgo } = useContext(ContextCounter);
  const [data, setData] = useState(false);
  console.log(data)
  const handleData = () => {
    setData(!data);
  
  };
  return (
    <div>
      <button onClick={handleData}>BG Change</button>
    </div>
  );
};

export default ModeHandle;
