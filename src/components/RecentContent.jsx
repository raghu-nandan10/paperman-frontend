import React, { useRef, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import RecentBlogCard from "./RecentBlogCard";
import { config } from "../config";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import UseFetch from "../hooks/UseFetch";
import Backdrop from "@mui/material/Backdrop";
import Loading from "./Loading";

const RecentContent = () => {
  const { data, loading, error } = UseFetch(`${config.domain}/blog/all`);
  const scrollBar = useRef();
  const handleScrollRight = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft + 340;
  };
  const handleScrollLeft = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft - 340;
  };

  // Example usage

  return (
    <div className="w-[100%] flex flex-col gap-7 mt-10 justify-center items-center overflow-hidden  ">
      <div className="w-[90%]  ">
        <h1 className="text-white text-xl  ">Recent Blogs</h1>
      </div>
      <div className="flex gap-4  w-[100%]   justify-center items-center   ">
        <AiFillLeftCircle color="blue" size={30} onClick={handleScrollLeft} />
        <div
          ref={scrollBar}
          className="w-[100%] p-3    flex    gap-8  overflow-scroll scroll-smooth  scrollbar-hide  "
        >
          {!data.data && (
            <div className="flex flex-col top-1/2  absolute  text-white text-3xl w-[100vw] justify-center items-center">
              <Loading />
              <div>It may take a minute to spin up the backend server...</div>
            </div>
          )}
          {data.data?.map((item, index) => {
            return loading ? (
              "loading"
            ) : (
              <RecentBlogCard object={item} key={index} />
            );
          })}
        </div>
        <AiFillRightCircle color="blue" size={30} onClick={handleScrollRight} />
      </div>
    </div>
  );
};

export default RecentContent;
