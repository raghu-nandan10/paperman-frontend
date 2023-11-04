import React, { useState } from "react";
import AddCodeEditorContainer from "./AddCodeEditorContainer";
import DescriptionWithCode from "./DescriptionWithCode";
import SubTopicTitle from "./SubTopicTitle";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineDescription, MdSouth } from "react-icons/md";
import { convertToRaw } from "draft-js";
const SubTopicAccordian = ({ subTopicArray, id, setSubTopicArray }) => {
  const [index, setIndex] = useState(0);

  const handleIndexArray = (type) => {
    if (type == "description") {
      subTopicArray[id].content[index] = {
        kind: type,
        data: {
          description: {
            blocks: [
              {
                key: "3eesq",
                text: "write here",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [
                  {
                    offset: 19,
                    length: 6,
                  },
                  {
                    offset: 25,
                    length: 5,
                    style: "ITALIC",
                  },
                  {
                    offset: 30,
                    length: 8,
                    style: "UNDERLINE",
                  },
                ],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          },
        },
      };
    } else {
      subTopicArray[id].content[index] = { kind: type, data: {} };
    }

    setSubTopicArray(subTopicArray);
    setIndex(index + 1);
  };

  const handleSubTopicTitle = (e, i) => {
    const updatedTitle = e.target.value;

    // Update the title in the specific subTopicArray element
    const updatedSubTopicArray = [...subTopicArray];
    updatedSubTopicArray[i].title = updatedTitle;

    // Update the state using the updated array
    setSubTopicArray(updatedSubTopicArray);
  };

  const handleDescription = (desc, i) => {
    const temp = subTopicArray[id].content[i];
    subTopicArray[id].content[i] = {
      ...temp,
      data: { description: JSON.stringify(convertToRaw(desc)) },
    };
    setSubTopicArray(subTopicArray);
    console.log(subTopicArray);
  };
  console.log(id + 1 + " is id");
  return (
    <div className="w-[98%] flex gap-2 flex-col ">
      <SubTopicTitle
        subTopicArray={subTopicArray}
        handleSubTopicTitle={handleSubTopicTitle}
        id={id}
      />
      {subTopicArray[id].content.map((object, i) => {
        console.log(id);
        return (
          <>
            {subTopicArray[id]?.content[i]?.kind == "codeBlock" &&
            subTopicArray[id].content[i].kind != null ? (
              <AddCodeEditorContainer
                key={i * 11}
                subTopicArray={subTopicArray}
                setSubTopicArray={setSubTopicArray}
                id={id}
                ic={i}
              />
            ) : (
              <DescriptionWithCode
                key={i * 10}
                handleDescription={handleDescription}
                subTopicArray={subTopicArray}
                setSubTopicArray={setSubTopicArray}
                id={id}
                ic={i}
              />
            )}
          </>
        );
      })}

      <div className="flex  top-2 right-2  gap-5 mt-10 justify-center">
        <div
          className="cursor-pointer bg-teal-600 p-2 text-black flex justify-center items-center "
          onClick={() => handleIndexArray("codeBlock")}
        >
          <BsCodeSlash color="black" />
        </div>
        <div
          className="cursor-pointer bg-teal-600 p-2 text-black flex justify-center items-center "
          onClick={() => handleIndexArray("description")}
        >
          <MdOutlineDescription color="black" />
        </div>
      </div>
    </div>
  );
};

export default SubTopicAccordian;
