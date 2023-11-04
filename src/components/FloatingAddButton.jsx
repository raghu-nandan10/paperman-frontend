import React from "react";
import { BsPlus } from "react-icons/bs";
const FloatingAddButton = ({ handleBlogSlide }) => {
  return (
    <div
      onClick={handleBlogSlide}
      className="rounded-full scrollbar-hide  p-4 flex justify-center fixed bottom-0 right-1 z-10 cursor-pointer hover:bg-blue-500 items-center bg-blue-600  shadow-2xl   w-[70px] h-[70px] text-black   "
    >
      <BsPlus size={30} />
    </div>
  );
};

export default FloatingAddButton;
