import React from "react";
import { MdConstruction } from "react-icons/md";
import { CgClose } from "react-icons/cg";
const Info = ({ handleClose }) => {
  return (
    <div className="bg-blue-600 text-white  text-sm  flex justify-center items-center  ">
      <div className="flex gap-2  text-center">
        Under development <MdConstruction size={18} />
      </div>
      <CgClose
        className="absolute left-2 cursor-pointer  "
        onClick={handleClose}
      />
    </div>
  );
};

export default Info;
