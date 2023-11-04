import React, { useRef, useEffect } from "react";
import HomeCard from "./HomeCard";
import RecentBlogCard from "./RecentBlogCard";
import { config } from "../config";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import UseFetch from "../hooks/UseFetch";
import Loader from "./Loader";
const RecentContent = () => {
  const { data, loading, error } = UseFetch(`${config.domain}/blog/all`);
  const scrollBar = useRef();
  const handleScrollRight = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft + 340;
  };
  const handleScrollLeft = () => {
    scrollBar.current.scrollLeft = scrollBar.current.scrollLeft - 340;
  };

  // useEffect(() => {
  //   let prevScrollValue = 0;
  //   const scrollAmount = 335;
  //   const interval = setInterval(() => {
  //     const currentScrollAmount = scrollBar.current.scrollLeft + scrollAmount;
  //     if (prevScrollValue === currentScrollAmount) {
  //       scrollBar.current.scrollLeft = 0;
  //     } else {
  //       scrollBar.current.scrollLeft += scrollAmount;
  //     }
  //     prevScrollValue = currentScrollAmount;
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

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
          {data.data?.map((item, index) => {
            return loading ? (
              <Loader />
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
