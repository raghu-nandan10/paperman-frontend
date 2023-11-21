import React from "react";
import { FiUser } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RecentBlogCard = ({ object }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog/" + object._id);
  };
  function formatUpdatedAt(updatedAt) {
    const now = new Date();
    const updatedDate = new Date(updatedAt);

    const timeDifference = now - updatedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (days < 7) {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else {
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    }
  }

  let { title, username, thumbnail } = object;
  return (
    <div
      onClick={() => {
        handleClick(object);
      }}
      className=" w-full  font-normal  bg-[#141414]   text-white flex gap-3 flex-col  md:w-[320px] flex-shrink-0  hover:scale-105    p-3 rounded-xl cursor-pointer group  transition-all duration-200 ease-in-out"
    >
      <img
        src={
          thumbnail ||
          "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg"
        }
        className="aspect-video"
      />
      <div className="flex flex-col gap-3">
        <span className=" text-xl group-hover:text-white  truncate   ">
          {title}
        </span>
        <span className="text-base flex  justify-between">
          <span className="flex  ">
            <FiUser
              size={25}
              color="white"
              className="bg-gray-900 rounded-full "
            />
            <div className=" flex gap-1 ml-3">
              <span> {username} </span>
              <MdVerified size={25} color="green" className="py-1" />
            </div>
          </span>
          <span className=" text-xs font-normal text-gray-200 mr-1 ">
            {formatUpdatedAt(object.updatedAt)}
          </span>
        </span>
      </div>
    </div>
  );
};

export default RecentBlogCard;
