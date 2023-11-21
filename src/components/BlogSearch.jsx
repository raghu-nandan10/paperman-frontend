import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import TestCredentials from "./TestCredentials";
import UseFetch from "../hooks/UseFetch";
import { config } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BlogSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      fetchData();
    } else {
      setData([]);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${config.domain}/blog/search/${query}`, {
        withCredentials: true,
      });
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex mt-[30px] w-full relative flex-col justify-center items-center font-thin">
      <div className="w-[60%] justify-center items-center  bg-zinc-900 text-2xl text-black  flex gap-1 min-w-[320px]   p-4">
        <input
          placeholder="Search Blogs"
          onChange={handleSearchChange}
          className="outline-none bg-inherit text-inherit  text-zinc-300 w-[96%] pl-2  "
        />
        <GoSearch className=" w-[4%] min-w-[25px] text-zinc-300  " size={30} />
      </div>
      {data.map((item) => {
        return (
          <div
            onClick={() => {
              navigate("/blog/" + item._id);
            }}
            className="w-[60%]   bg-zinc-900 text-2xl gap-2 cursor-pointer absolute top-14 p-2 flex  min-w-[380px] text-white  "
          >
            <div className="w-[50px] h-[50px] flx ml-4">
              <img
                src={
                  item.thumbnail ||
                  "https://dpcpa.com/app/uploads/2015/01/thumbnail-default.jpg"
                }
              />
            </div>
            <div className="flx">
              <span className=" flx text-lg">{item.title}</span>
            </div>
          </div>
        );
      })}

      <div className=" lg:hidden mt-10 ">
        <TestCredentials />
      </div>
    </div>
  );
};

export default BlogSearch;
