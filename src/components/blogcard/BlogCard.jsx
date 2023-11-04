import React from "react";

import "./BlogCard.css";

import { BiSolidLike } from "react-icons/bi";

const BlogCard = ({ cardData }) => {
  const calculateTime = (timestamp) => {
    const currentTime = new Date().getTime();

    var seconds = Math.floor((currentTime - timestamp) / 1000);

    if (seconds < 60) {
      return seconds + " seconds ago";
    }

    var minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return minutes + " minutes ago";
    }

    var hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return hours + " hours ago";
    }

    var days = Math.floor(hours / 24);
    if (days < 365) {
      return days + " days ago";
    }

    var years = Math.floor(days / 365);
    return years + " years ago";
  };
  return (
    <div className="blog-card-container" id={cardData.id}>
      <div className="blog-card-top-container">
        <img
          className="blog-card-image"
          src={cardData.thumbnail}
          alt="Thumbnail"
        />
        <div className="blog-card-title">{cardData.caption}</div>
        <div className="blog-card-user">{cardData.user}</div>
      </div>
      <div className="blog-card-bottom-container">
        <div className="blog-card-like-container">
          <BiSolidLike size={"15px"} />
          <div className="blog-card-likes">{cardData.views}</div>
        </div>
        <div className="blog-card-timestamp">
          {calculateTime(cardData.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
