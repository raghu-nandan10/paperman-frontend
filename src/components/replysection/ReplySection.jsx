import React from "react";

import { BsArrowReturnRight } from "react-icons/bs";

import "./ReplySection.css";
import ReplyContainer from "../replycontainer/ReplyContainer";

const ReplySection = ({ replies, openReply }) => {
  const handleLikes = (id) => {
    console.log(id);
    replies.map((item) => {
      if (item.id === id) {
      }
      return 0;
    });
  };

  return (
    <div className={`reply-area ${!openReply && "hide-reply"}`}>
      <div className="right-arrow">
        <BsArrowReturnRight color="white" size="30px" fontWeight={"500"} />
      </div>
      <div className={`reply-section ${!openReply && "hide-reply"}`}>
        <div className="reply-input-container">
          <input type="text" className="reply-input" placeholder="Reply" />
          <button className="reply-button">Send</button>
        </div>
        {replies.map((item, index) => (
          <ReplyContainer
            handleLikes={handleLikes}
            id={item.id}
            key={index}
            name={item.name}
            reply={item.reply}
            likeCount={item.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ReplySection;
