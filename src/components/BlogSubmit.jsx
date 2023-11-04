import React from "react";
import Loading from "./Loading";
import { AiFillSave } from "react-icons/ai";
const BlogSubmit = ({ handleSubmit, loading }) => {
  return (
    <div className="w-full flex justify-center items-center mt-8   ">
      <div
        className={` border-2 border-teal-600 p-2 text-teal-600  flex gap-2 items-center   cursor-pointer  text-center ${
          loading ? "rounded-full w-auto" : "w-[90%] "
        } `}
        onClick={handleSubmit}
      >
        <AiFillSave size={40} />
        <div>Post</div>
      </div>
    </div>
  );
};

export default BlogSubmit;
