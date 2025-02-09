/* eslint-disable react/display-name */
"use client";
import React, { memo } from "react";

const ExpensiveTask = memo(({ count }) => {
  console.log("inside Expensive task");
  return <div>ExpensiveTask and count is {count} </div>;
});

export default ExpensiveTask;
