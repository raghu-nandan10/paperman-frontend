import { React, useState } from "react";

import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const BlogOptions = ({ setOpenComment }) => {
  const [isLike, setIsLike] = useState(false);
  const handleComment = () => {
    setOpenComment(false);
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div id="options" className="options">
      <div className="icons" onClick={handleLike}>
        {isLike ? (
          <AiFillLike
            size={"20px"}
            className=" text-blue-600"
            color="#2563eb"
          />
        ) : (
          <AiOutlineLike
            size={"20px"}
            className="text-blue-600"
            color="#2563eb"
          />
        )}
      </div>
      <div className="icons" onClick={handleComment}>
        <BiCommentDetail size={"20px"} color="#2563eb" />
      </div>
    </div>
  );
};

export default BlogOptions;
