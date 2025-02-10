import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("UseEffect First");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect second");
  });
  useEffect(() => {
    console.log("UseEffect third");
  });
  return <div>UseLayoutEffect</div>;
};

export default UseLayoutEffect;
