import React from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
const ReadOnlyTags = ({ blogData }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full     text-sm text-white scrollbar-hide   ">
      <div className=" w-full flex justify-center overflow-x-scroll items-center p-4 gap-2">
        {blogData?.hastags?.map((item) => {
          return (
            <span
              onClick={() => {
                navigate(`/blog/hastag/${item}`);
              }}
              className=" p-3  hover:bg-blue-500 hover:scale-105 transition-all   duration-100 ease-out bg-blue-600 rounded-3xl cursor-pointer"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ReadOnlyTags;
