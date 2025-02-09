import React from "react";

const Input = ({ placeholder, type, name, handleChange, data }) => {
  return (
    <input
      placeholder={placeholder}
      className=" my-3 bg-black text-white border border-white rounded-md pl-2 "
      type={type}
      name={name}
      value={data}
      onChange={handleChange}
    />
  );
};

export default Input;
