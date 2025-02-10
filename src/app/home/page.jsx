"use client";

import { toggleTheme } from "@/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);

  return (
    <div
      className={` h-screen flex flex-col justify-center items-center ${
        theme == "dark" ? "bg-white" : "bg-black"
      } ${theme == "dark" ? "text-black" : "text-white"}   `}
    >
      <button className="border" onClick={() => dispatch(toggleTheme())}>
        Mode Change
      </button>
    </div>
  );
};

export default Page;
