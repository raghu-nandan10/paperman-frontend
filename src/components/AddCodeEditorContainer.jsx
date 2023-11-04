import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import CodeEditor from "./CodeEditor";
import { useRef } from "react";

const AddCodeEditor = ({
  id,

  ic,
  subTopicArray,
  setSubTopicArray,
}) => {
  const editorRef = useRef();
  const [copy, setCopy] = useState("copy");
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState("");

  const handleCode = (codeString, i) => {
    const temp = subTopicArray[id].content[i];
    console.log(temp);
    const tempData = temp?.data;
    if (tempData == null) {
      console.log("no data object now creating..");
      subTopicArray[id].content[i] = {
        ...temp,
        data: { language: "", code: codeString },
      };
    } else {
      console.log("data object is already there so im gonna copy..");
      subTopicArray[id].content[i] = {
        ...temp,
        data: { ...tempData, code: codeString },
      };
    }

    setSubTopicArray(subTopicArray);
    console.log(subTopicArray);
  };

  const handleLanguage = (lang, i) => {
    setLanguage(lang);
    const temp = subTopicArray[id].content[i];
    const tempData = temp.data;
    console.log(tempData);
    subTopicArray[id].content[i] = {
      ...temp,
      data: { ...tempData, language: lang },
    };

    setSubTopicArray(subTopicArray);
    console.log(subTopicArray);
  };

  const handleCopyClick = () => {
    setCopy("copied!");
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Code copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy code to clipboard:", error);
      });
    setTimeout(() => {
      setCopy("copy");
    }, 3000);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "black", // Customize the background color
      borderColor: "teal", // Customize the border color
      boxShadow: "0 0 0 1px teal", // Customize the box shadow
      width: "85vw`",
      height: "50px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "white",

      // Add any other styles you want to customize the text color
    }),
    option: (provided, state) => ({
      ...provided,
      background: "black", // Customize the background color of the selected option
      color: "white", // Customize the text color of the selected option
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "black",
      // Add any other styles you want to customize the option container
    }),
  };

  const options = [
    { value: "javascript", label: "javascript" },
    { value: "java", label: "java" },
    { value: "javascript", label: "react.js" },
    { value: "css", label: "css" },
    { value: "html", label: "html" },
    { value: "json", label: "json" },
    { value: "python", label: "python" },
    { value: "sql", label: "SQL" },
    { value: "xml", label: "XML" },
    { value: "typescript", label: "Typescript" },
    { value: "plaintext", label: "Text" },
  ];
  return (
    <div className=" flex  flex-col justify-center items-center gap-2   ">
      <div className="w-[90%] mt-6 text-2xl flex gap-1 font-semibold">
        Code <div className="text-teal-600 ">Editor</div>
      </div>
      <div className="flex gap-2 w-[93%]  items-center justify-between ">
        <div className="p-4 w-[30%] flex gap-2">
          Select the <div className="text-teal-600">language</div>
        </div>
        <div className="w-[60%]">
          <CreatableSelect
            isClearable
            options={options}
            defaultInputValue={
              subTopicArray[id].content[ic].data.language || "javascript"
            }
            className="w-[85%]"
            classNamePrefix="react-select"
            styles={customStyles}
            onChange={(lang) => {
              handleLanguage(lang?.value ? lang.value : "javascript", ic);
            }}
          />
        </div>
      </div>
      <div ref={editorRef} className="w-[90%] ">
        <div className="bg-gray-700 w-full flex justify-end p-1">
          <span
            className="p-1 text-sm cursor-pointer"
            onClick={handleCopyClick}
          >
            {copy}
          </span>
        </div>
        <CodeEditor
          handleCode={handleCode}
          code={code}
          setCode={setCode}
          subTopicArray={subTopicArray}
          language={language}
          id={id}
          ic={ic}
        />
      </div>
    </div>
  );
};

export default AddCodeEditor;
