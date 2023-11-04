import React from "react";
import { AiFillFolderAdd } from "react-icons/ai";
const AddContentButton = ({ handleAddContent }) => {
  return (
    <div
      className="w-[100%] flex  justify-center items-center "
      onClick={handleAddContent}
    >
      <div className="p-2 mt-8   w-[90%]  text-purpleCustom  flex gap-2 items-center  border-purpleCustom border-2 cursor-pointer">
        <AiFillFolderAdd size={40} />
        <div>Subtopic</div>
      </div>
    </div>
  );
};

export default AddContentButton;
