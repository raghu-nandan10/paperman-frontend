import React, { useEffect, useState } from "react";

const SubTopicTitle = ({ handleSubTopicTitle, id, subTopicArray }) => {
  return (
    <div className="w-[100%] flx p-4 text-xl mt-3">
      <input
        className="p-4 text-purpleCustom  border-2 border-purpleCustom outline-none w-[93%] bg-black  "
        placeholder="Topic"
        name="topic"
        value={subTopicArray[id]?.title}
        onChange={(e) => {
          handleSubTopicTitle(e, id);
        }}
      />
    </div>
  );
};

export default SubTopicTitle;
