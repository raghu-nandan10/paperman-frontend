import React from "react";
import { PiSubtitlesFill } from "react-icons/pi";
const BlogTitle = ({ handleTitle }) => {
  return (
    <div className="w-[90%]   font-thin  flx text-3xl bg-[#232323]  mt-20    ">
      <input
        type="text"
        placeholder="Give a title"
        className="outline-none  w-[98%] p-4 text-white  bg-inherit rounded-3xl  "
        onChange={handleTitle}
      />
      <PiSubtitlesFill
        className=" text-black w-[15%] md:w-[5%] "
        size={28}
        color="white"
      />
    </div>
  );
};

export default BlogTitle;
