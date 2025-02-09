"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    option: "",
    selectOption: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const sumbitHndler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={sumbitHndler} className=" flex flex-col">
        <input
          className=" my-3 bg-black text-white border border-white rounded-md pl-2 "
          placeholder="Enter you name"
          type="text"
          name="name"
          id=""
          onChange={changeHandler}
          value={formData.name}
        />
        <input
          className=" my-3 bg-black text-white border border-white rounded-md pl-2 "
          placeholder="Enter you email"
          type="email"
          name="email"
          id=""
          value={formData.email}
          onChange={changeHandler}
        />
        <input
          className=" my-3 bg-black text-white border border-white rounded-md pl-2 "
          placeholder="Enter you pass"
          type="password"
          name="password"
          id=""
          value={formData.password}
          onChange={changeHandler}
        />
        {/* <input
          type="radio"
          name="option"
          value="option1"
          checked={formData.option == "option1"}
          onChange={changeHandler}
          id=""
        />

        <input
          type="radio"
          name="option"
          value="option2"
          checked={formData.option == "option2"}
          onChange={changeHandler}
          id=""
        />
        <input
          type="radio"
          name="option"
          value="option3"
          checked={formData.option == "option3"}
          onChange={changeHandler}
          id=""
        /> */}

        <select
          value={formData.selectOption}
          onChange={changeHandler}
          name="selectOption"
          className="my-2 p-2 bg-black text-white border border-gray-500 rounded"
        >
          <option value="">Select option</option>
          <option value="sport">sport</option>
          <option value="Reading">Reading</option>
          <option value="Writing">Writing</option>
          <optgroup label="Programing langauge">
            <option value="JS">JS</option>
            <option value="JAVA">JAVA</option>
            <option value="PYTHON">PYTHON</option>
          </optgroup>
        </select>

        <button className=" bg-green-500 py-2 my-3 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
