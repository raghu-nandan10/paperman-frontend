import React from "react";

const BlogTitle = ({ blogData }) => {
  return (
    <div className=" p-4 flex  justify-between  items-center bg-[#232323] text-4xl font-thin  text-white ">
      <div> {blogData?.title}</div>
      <div className=" text-base text-center cursor-pointer">
        ~ {blogData.username}
      </div>
    </div>
  );
};

export default BlogTitle;
