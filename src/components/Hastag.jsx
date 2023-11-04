import React from "react";

const Hastag = ({ hastag }) => {
  return (
    <div className="bg-gray-800   text-white cursor-pointer rounded-lg text-sm p-3  h-auto  flex justify-center items-center  whitespace-nowrap scrollbar-hide ">
      <span>{hastag}</span>
    </div>
  );
};

export default Hastag;
