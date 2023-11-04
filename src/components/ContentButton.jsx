import React from "react";
import { AiOutlineDown, AiOutlineRight, AiFillDelete } from "react-icons/ai";
const ContentButton = ({
  id,
  openContent,
  handleOpenContent,
  deleteSubTopic,
}) => {
  return (
    <div
      className="bg-gray-900 p-5 text-teal-600 items-center cursor-pointer flex justify-between w-[90%] "
      onClick={handleOpenContent}
    >
      <div className="flex gap-1 text-purpleCustom ">
        <div>SubTopic</div>
        <div className="text-white"> #{id + 1}</div>
      </div>
      <div className=" flex justify-between items-center gap-4">
        <AiFillDelete
          size={25}
          onClick={() => {
            deleteSubTopic(id);
          }}
        />{" "}
        {openContent ? <AiOutlineDown /> : <AiOutlineRight />}
      </div>
    </div>
  );
};

export default ContentButton;
