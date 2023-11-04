import React, { useState } from "react";

const DescArea = () => {
  const [desc, setDesc] = useState("");
  const handleChange = (e) => {
    const formattedContent = e.target.value.replace(
      /\*\*(.*?)\*\*/g,
      "<strong>$1</strong>"
    );
    e.target.value = formattedContent;
  };
  return (
    <div className="w-[100%] p-4 flex justify-center items-center ">
      <textarea
        className="bg-gray-800 resize-y no-resize-symbol  rounded-3xl p-4 w-[90%] outline-none text-2xl h-[400px] "
        placeholder="Explanation"
        onChange={handleChange}
      />
    </div>
  );
};

export default DescArea;
