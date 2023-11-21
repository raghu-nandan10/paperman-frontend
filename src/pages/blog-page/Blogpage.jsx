import { React, useEffect, useState } from "react";
import axios from "axios";
import "./BlogPage.css";
import ReadOnlyDescription from "../../components/ReadOnlyDescription";

import BlogTitle from "../../components/blogtitle/BlogTitle";
import ReadOnlyEditor from "../../components/readonlyeditor/ReadOnlyEditor";
import ReadOnlyTags from "../../components/ReadOnlyTags";
import { useParams } from "react-router-dom";
import { config } from "../../config";
import Loading from "../../components/Loading";

const Blogpage = () => {
  const [blogData, setBlogData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${config.domain}/blog/find/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setBlogData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <>
      {!blogData ? (
        <Loading size={200} />
      ) : (
        <div className=" relative w-full ">
          <BlogTitle blogData={blogData} />
          <div className="blog-container font-medium  flex flex-col  ">
            <ReadOnlyTags blogData={blogData} />
            <div className="w-full  ">
              {blogData?.content?.map((item, index) => {
                return item.kind == "codeEditor" ? (
                  <ReadOnlyEditor language={item.lang} code={item.data} />
                ) : (
                  <ReadOnlyDescription value={item.data} />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blogpage;
