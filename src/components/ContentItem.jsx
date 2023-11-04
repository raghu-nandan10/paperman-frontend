import React, { useState } from "react";
import ContentButton from "./ContentButton";
import SubTopicAccordian from "./SubTopicAccordian";
const ContentItem = ({
  subTopicArray,
  setSubTopicArray,
  deleteSubTopic,
  id,
}) => {
  const [openContent, setOpenContent] = useState(false);
  const handleOpenContent = () => {
    setOpenContent(!openContent);
  };

  return (
    <>
      <ContentButton
        id={id}
        deleteSubTopic={deleteSubTopic}
        openContent={openContent}
        handleOpenContent={handleOpenContent}
      />
      {openContent && (
        <SubTopicAccordian
          id={id}
          key={id * 45}
          subTopicArray={subTopicArray}
          setSubTopicArray={setSubTopicArray}
        />
      )}
    </>
  );
};

export default ContentItem;
