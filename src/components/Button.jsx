import React from "react";

const Button = ({ submit }) => {
  return (
    <button
      onClick={submit}
      className=" px-10 bg-green-500 py-2 my-3 rounded-lg"
    >
      Submit
    </button>
  );
};

export default Button;
