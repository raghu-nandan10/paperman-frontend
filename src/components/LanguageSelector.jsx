import React, { useState } from "react";

const LanguageSelector = ({ handleLanguageChange, index, content }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const options = [
    "javascript",
    "java",
    "react.js",
    "html",
    "css",
    "xml",
    "c++",
    "c",
    "text",
  ];

  return (
    <div className="w-[100%]  z-10 my-5   ">
      <select
        value={content[index]?.lang}
        onChange={(e) => handleLanguageChange(e, index)}
        className=" bg-zinc-900 p-4  rounded-3xl w-full outline-none  "
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
  );
};

export default LanguageSelector;
