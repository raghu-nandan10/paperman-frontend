import React from "react";

const DropDown = () => {
  return (
    <div className="w-full flex flex-col gap-1 p-2 text-base md:hidden">
      <div className="p-2 text-teal-500  rounded-xl hover:bg-gray-900 cursor-pointer  w-[100%]  text-center ">
        Explore
      </div>
      <div className="p-2 text-teal-500  rounded-xl hover:bg-gray-900 cursor-pointer  w-[100%]  text-center">
        Blog
      </div>
      <div className="p-2 text-teal-500  rounded-xl hover:bg-gray-900 cursor-pointer  w-[100%]  text-center">
        News
      </div>
      <div className="flex justify-between mt-4  ">
        <div className="bg-teal-600 rounded-xl p-2 cursor-pointer w-[30%] text-center">
          Login
        </div>
        <div className="bg-teal-600 rounded-xl p-2 cursor-pointer w-[30%] text-center">
          Signup
        </div>
      </div>
    </div>
  );
};

export default DropDown;
