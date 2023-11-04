import React, { useState } from "react";
import ContentButton from "./ContentButton";
import SubTopicAccordian from "./SubTopicAccordian";
import ContentItem from "./ContentItem";

const Content = ({
  subTopicIndex,

  subTopicArray,
  setSubTopicArray,
  setSubTopicIndex,
}) => {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState("");
  const deleteSubTopic = (index) => {
    if (index >= 1) {
      const tempSubTopicIndex = subTopicIndex.filter((obj, indexOfItem) => {
        return index != indexOfItem;
      });
      const tempSubTopicArray = subTopicArray.filter((obj, indexOfItem) => {
        console.log(index + " " + indexOfItem);
        return index != indexOfItem;
      });
      setSubTopicArray(tempSubTopicArray);
      setSubTopicIndex(tempSubTopicIndex);
    }
  };
  return (
    <div className="w-[100%] flex gap-2 justify-center items-center flex-col">
      {subTopicIndex.map((id, index) => {
        return (
          <ContentItem
            id={index}
            code={code}
            key={id * 123}
            setCode={setCode}
            language={language}
            subTopicIndex={subTopicIndex}
            subTopicArray={subTopicArray}
            setSubTopicArray={setSubTopicArray}
            setLanguage={setLanguage}
            deleteSubTopic={deleteSubTopic}
          />
        );
      })}
    </div>
  );
};

export default Content;
