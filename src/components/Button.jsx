import React from "react";

const Button = ({ onClick ,bg_color }) => {
  return (
    <button
      onClick={onClick}
      className={` px-10 ${bg_color} py-2 my-3 rounded-lg `}
    >
      Submit
    </button>
  );
};

export default Button;
