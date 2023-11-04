import React from "react";

import { FiUser } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
const HomeCard = ({ object }) => {
  let { caption, user, timestamp, thumbnail, views } = object;
  return (
    <div className="bg-gray-800 text-white flex  flex-col w-[95%] overflow-hidden  p-2 rounded-xl cursor-pointer group transition-all duration-200 ease-in-out">
      <img src={thumbnail} className="aspect-video" />
      <div className="flex flex-col gap-3 p-3">
        <span className="text-teal-400 text-2xl group-hover:text-white truncate font-bold">
          {caption}
        </span>
        <span className="text-base flex gap-2">
          <FiUser
            size={25}
            color="cyan"
            className="bg-gray-900 rounded-full "
          />
          <span className="flex gap-1">
            <span> {user} </span>
            <MdVerified size={25} className="py-1" />
          </span>
        </span>
        <div className="flex gap-2 text-sm ">
          <span>{views} views</span> <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
