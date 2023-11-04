import React, { useState } from "react";
import "./Input.css";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Input = ({ label, id, name, handleFormDataChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" flex flex-col gap-2 mb-3">
      <div className="input-container">
        <div className="input-section">
          <label className="label">{label}</label>
          {id !== "password" ? (
            <input
              className="form-input"
              name={name}
              id={id}
              onChange={handleFormDataChange}
            />
          ) : (
            <input
              className="form-input"
              id={label}
              name={name}
              onChange={handleFormDataChange}
              type={showPassword ? "text" : "password"}
            />
          )}
        </div>
        <div className="form-icon">
          {(id === "fn" || id === "ln") && (
            <BsFillPersonVcardFill size={"20px"} />
          )}
          {id === "email" && <MdEmail size={"22px"} />}
          {id === "id" && <BsFillPersonFill size={"22px"} />}
          {id === "password" && (
            <AiFillEye
              size={"22px"}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          )}
        </div>
      </div>
      {id != "ln" && (
        <span className=" text-red-500 text-sm font-normal">{error}</span>
      )}
    </div>
  );
};

export default Input;
