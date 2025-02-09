import React, { memo } from "react";

const UseCallback = ({ names, callFun }) => {
  console.log("inside callback");
  return <div>UseCallback name is {names} </div>;
};

export default memo(UseCallback);
