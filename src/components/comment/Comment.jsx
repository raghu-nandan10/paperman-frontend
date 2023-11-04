import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Comment.css";
import img from "../../img/profile.png";
import { useState } from "react";

import ReplySection from "../replysection/ReplySection";

const Comment = ({ id, userName, time, comment, likeCount, replies }) => {
  const [isLike, setIsLike] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const handleReply = () => {
    setOpenReply(!openReply);
  };
  return (
    <>
      <div className="comment-container">
        <div className="user-profile">
          <img src={img} alt="profile" width={50} height={50} />
        </div>
        <div className="comment-content" id={id}>
          <div className="user-name">
            {userName} . <span className="time">{time}</span>
          </div>
          <div className="comment-con">{comment}</div>
          <div className="comment-interaction">
            <div className="reply" onClick={handleReply}>
              Reply
            </div>
            <div className="like">
              <div>{likeCount}</div>
              <div onClick={handleLike}>
                {isLike ? (
                  <AiFillHeart id={id} size={"20px"} />
                ) : (
                  <AiOutlineHeart size={"20px"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReplySection replies={replies} openReply={openReply} />
    </>
  );
};

export default Comment;
