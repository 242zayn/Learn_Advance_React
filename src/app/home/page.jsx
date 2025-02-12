"use client";

import UseFetchApi from "@/components/useFetchApi";
import { toggleTheme } from "@/features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  console.log(theme);
  const {data,loading,error,fethApi}=UseFetchApi('https://fakestoreapi.com/products')
  console.log( "dfdf",data)

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
