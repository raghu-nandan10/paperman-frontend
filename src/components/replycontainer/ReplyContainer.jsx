import { useState } from "react";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import img from "../../img/profile.png";

import "./ReplyContainer.css";

const ReplyContainer = ({id,name,time,reply,likeCount,handleLikes}) => {
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <div id={id} className="reply-container">
        <div className="user-profile">
          <img src={img} alt="profile" width={50} height={50} />
        </div>
        <div className="reply-content">
          <div className="user-name">
            {name} <span className="time">{time}</span>
          </div>
          <div className="reply-con">
            <div>{reply}</div>
            <div className="like-container">
              <div>{likeCount}</div>
              <div  onClick={()=>{handleLikes(id)
              handleLike()}}>
                {isLike ? (
                  <AiFillHeart size={"20px"}  />
                ) : (
                  <AiOutlineHeart size={"20px"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReplyContainer;
