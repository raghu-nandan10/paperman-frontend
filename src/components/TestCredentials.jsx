import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
const TestCredentials = () => {
  return (
    <div className="flex  w-[250px] text-white gap-4 font-thin flex-col">
      <div className="flex gap-2 text-blue-600">
        Test <div className="text-white font-thin">credentials</div>
      </div>
      <div className="flex flex-col gap-1  text-base">
        <div className=" flex gap-1 items-center">
          <AiTwotoneMail className=" text-blue-600" />
          <label>Email</label>
        </div>

        <input
          value={"test@paperman.com"}
          readOnly
          className="bg-[#232323] text-sm rounded-lg p-3"
        />
      </div>
      <div className="flex flex-col gap-1  text-base">
        <div className=" flex gap-1 items-center">
          <RiLockPasswordFill size={16} className=" text-blue-600" />
          <label>Password</label>
        </div>
        <input
          readOnly
          value={"Test@Paperman2024"}
          className="bg-[#232323] text-sm rounded-lg p-3"
        />
      </div>
    </div>
  );
};

export default TestCredentials;
