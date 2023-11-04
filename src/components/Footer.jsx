import React from "react";
import {
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" bg-black text-teal-600  w-full p-10 flex justify-evenly   ">
      <div className="cursor-pointer rounded-full  hover:bg-slate-800 p-2">
        <AiFillInstagram size={40} />
      </div>
      <div className="cursor-pointer rounded-full  hover:bg-slate-800 p-2">
        <AiFillMail size={40} />
      </div>
      <div className="cursor-pointer rounded-full  hover:bg-slate-800 p-2">
        <AiFillTwitterCircle size={40} />
      </div>
      <div className="cursor-pointer rounded-full  hover:bg-slate-800 p-2">
        <AiFillFacebook size={40} />
      </div>
    </div>
  );
};

export default Footer;
