'use client'
import { useState } from "react";


const CustomHook = (intialValue=0) => {
  const [count, setCount] = useState(intialValue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(intialValue);
  };

  return { count, increment, decrement, reset };
}

export default CustomHook
