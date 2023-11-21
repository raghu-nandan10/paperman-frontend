import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UsePost from "../hooks/UsePost";
import UseFetch from "../hooks/UseFetch";
import RecentBlogCard from "../components/RecentBlogCard";

import { config } from "../config";
import Loading from "../components/Loading";
const BlogsWithHastag = () => {
  const { hastag } = useParams();
  console.log(hastag);
  const { data, loading, error } = UseFetch(
    `${config.domain}/blog/hashtag/${hastag}`
  );

  return (
    <div className="  bg-black  w-[100vw] flex justify-center items-center  ">
      <div className=" w-[85%] flex flex-col ">
        <div className="w-full mt-10 flex gap-5 flex-col ">
          <h1 className="text-white text-4xl font-normal">Blogs</h1>
          <div className=" text-blue-600">/{hastag}</div>
        </div>
        <div className=" grid  py-4 gap-8    lg:grid-cols-3 md:grid-cols-2 grid-cols-1  mt-10  justify-items-center md:justify-items-start">
          {!data.data && <Loading />}
          {data?.data?.map((item, index) => {
            return <RecentBlogCard object={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsWithHastag;
