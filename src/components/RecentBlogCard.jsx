import React from "react";
import { FiUser } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const RecentBlogCard = ({ object }) => {
  const timeDiff = new Date() - new Date(object.updatedAt);
  const inSeconds = Math.floor(timeDiff / (1000 * 60));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog/" + object._id);
  };

  let { title, username, thumbnail } = object;
  //bg-gradient-to-l from-[#9a999933] via-black to-[#8b8b8b33]
  return (
    <div
      onClick={() => {
        handleClick(object);
      }}
      className=" w-full   bg-zinc-900   text-white flex gap-3 flex-col  md:w-[320px] flex-shrink-0  hover:scale-105    p-3 rounded-xl cursor-pointer group  transition-all duration-200 ease-in-out"
    >
      <img src={thumbnail} className="aspect-video" />
      <div className="flex flex-col gap-3">
        <span className=" text-xl group-hover:text-white font-thin truncate   ">
          {title}
        </span>
        <span className="text-base flex gap-2">
          <FiUser
            size={25}
            color="white"
            className="bg-gray-900 rounded-full "
          />
          <span className="flex  justify-between font-thin">
            <div className=" flex gap-1">
              <span> {username} </span>
              <MdVerified size={25} color="orange" className="py-1" />
            </div>

            <span className=" text-orange-300 ">{inSeconds}m</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default RecentBlogCard;
