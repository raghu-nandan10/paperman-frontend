import React, { useState } from "react";

import Comment from "../comment/Comment";
import { MdClose } from "react-icons/md";

import "./CommentContainer.css";

const CommentContainer = ({ openComment, setOpenComment }) => {
  let comment = [
    {
      id: 1,
      profileUrl: "",
      userName: "Dhanush",
      time: "10 mins ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      isLike: true,
      likeCount: 123,
      replies: [
        {
          id: 1,
          name: "Sam",
          time: "11 months ago",
          reply: "Hey you are doing great",
          isLike: true,
          likeCount: 25,
        },
        {
          id: 2,
          name: "Peter",
          time: "2 years ago",
          reply: "Thanks",
          isLike: true,
          likeCount: 2,
        },
      ],
    },
    {
      id: 2,
      profileUrl: "",
      userName: "Karthik",
      time: "20 hrs ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      isLike: false,
      likeCount: 12,
      replies: [
        {
          id: 1,
          name: "Sam",
          time: "11 months ago",
          reply: "Hey you are doing great",
          isLike: true,
          likeCount: 25,
        },
        {
          id: 2,
          name: "Peter",
          time: "2 years ago",
          reply: "Thanks",
          isLike: true,
          likeCount: 2,
        },
      ],
    },
    {
      id: 3,
      profileUrl: "",
      userName: "Ragu",
      time: "3 days ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      isLike: true,
      likeCount: "3.4K",
      replies: [
        {
          id: 1,
          name: "Sam",
          time: "11 months ago",
          reply: "Hey you are doing great",
          isLike: true,
          likeCount: 25,
        },
        {
          id: 2,
          name: "Peter",
          time: "2 years ago",
          reply: "Thanks",
          isLike: true,
          likeCount: 2,
        },
      ],
    },
    {
      id: 4,
      profileUrl: "",
      userName: "Nandhan",
      time: "5 months ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolores consequatur facere enim suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      isLike: false,
      likeCount: 13,
      replies: [
        {
          id: 1,
          name: "Sam",
          time: "11 months ago",
          reply: "Hey you are doing great",
          isLike: true,
          likeCount: 25,
        },
        {
          id: 2,
          name: "Peter",
          time: "2 years ago",
          reply: "Thanks",
          isLike: true,
          likeCount: 2,
        },
      ],
    },
  ];

  const [comments, setComments] = useState(comment);
  const [userComment, setUserComment] = useState("");

  const handleComment = () => {
    setOpenComment(true);
  };

  const handleSubmit = () => {
    console.log(userComment);
    comment = [
      {
        id: 5,
        profileUrl: "",
        userName: "Current user",
        time: "Just now",
        comment: userComment,
        isLike: false,
        likeCount: 0,
        replies: [],
      },
      ...comments,
    ];
    setComments(comment);
    setUserComment("");
  };
  return (
    <div id="comments" className={`comments ${!openComment && "hide"}`}>
      <div className="comment-title">
        <h1 className="title-name">Comments</h1>
        <div className="icons" onClick={handleComment}>
          <MdClose color="rgb(217, 217, 217)" size={"20px"} />
        </div>
      </div>
      <div className="comment-add">
        <textarea
          className="comment-box"
          placeholder="Add comment"
          value={userComment}
          onInput={(e) => setUserComment(e.target.value)}
        />
        <div className="comment-button-container">
          <button className="comment-button">Cancel</button>
          <button className="comment-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      {comments.map((item, index) => {
        return (
          <Comment
            id={item.id}
            key={index}
            userName={item.userName}
            time={item.time}
            comment={item.comment}
            isLike={item.isLike}
            likeCount={item.likeCount}
            replies={item.replies}
          />
        );
      })}
    </div>
  );
};

export default CommentContainer;
