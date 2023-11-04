import React from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
const ReadOnlyTags = ({ blogData }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full    overflow-x-scroll text-sm text-white flex gap-4  ">
      <div className=" flx p-3">
        <span>Tags</span>
      </div>
      <div className=" w-full flex gap-2 p-3 ">
        {blogData?.hastags?.map((item) => {
          return (
            <span
              onClick={() => {
                navigate(`/blog/hastag/${item}`);
              }}
              className=" p-3 hover:bg-blue-500 hover:scale-105 transition-all duration-100 ease-out bg-blue-600 rounded-3xl cursor-pointer"
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
