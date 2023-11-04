import React, { useContext, useState } from "react";

import RecentContent from "../components/RecentContent";

import FloatingAddButton from "../components/FloatingAddButton";
import AddBlogContainer from "../components/AddBlogContainer";
import BlogSearch from "../components/BlogSearch";
import NavbarNew from "../components/NavbarNew";
import axios from "axios";
import Slogan from "../components/Slogan";
import Info from "../components/Info";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { BlogToggleContext } from "../App";
import TestCredentials from "../components/TestCredentials";
import { config } from "../config";

const Home = () => {
  const { setAddBlog, addBlog } = useContext(BlogToggleContext);
  const [drop, setDrop] = useState(true);
  const [info, setInfo] = useState(true);
  const [items, Setitems] = useState(0);

  const navigate = useNavigate();

  const handleBlogSlide = async () => {
    if (!addBlog) {
      try {
        const res = await axios.post(
          `${config.domain}/auth/validate`,
          {
            access_token: "get it from the cookie",
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);
        console.log("heheheheheh");
        if (res.data.success) {
          navigate("/");
          setAddBlog(false);
        } else {
          navigate("/login");
          setAddBlog(false);
        }
      } catch (error) {
        console.log(error);

        console.log("hitting...");
        navigate("/login");
        setAddBlog(false);
      }
    }
  };
  const handleDropDown = () => {
    setDrop(!drop);
  };
  const handleClose = () => {
    setInfo(false);
  };
  return (
    <div className=" bg-black m-0 h-max p-0   relative font-customFont   ">
      {info && <Info handleClose={handleClose} />}
      <NavbarNew />
      <Slogan />
      <BlogSearch />
      <RecentContent />
      <FloatingAddButton handleBlogSlide={handleBlogSlide} />
      <AddBlogContainer addBlog={addBlog} setAddBlog={setAddBlog} />

      <div className="hidden  right-10 top-28 absolute lg:block">
        <TestCredentials />
      </div>
    </div>
  );
};

export default Home;
