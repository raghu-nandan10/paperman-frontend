import { React, useEffect, useState } from "react";
import axios from "axios";
import "./BlogPage.css";
import ReadOnlyDescription from "../../components/ReadOnlyDescription";
import CommentContainer from "../../components/commentcontainer/CommentContainer";
import BlogTitle from "../../components/blogtitle/BlogTitle";
import ReadOnlyEditor from "../../components/readonlyeditor/ReadOnlyEditor";
import ReadOnlyTags from "../../components/ReadOnlyTags";
import { useParams } from "react-router-dom";
import { config } from "../../config";

const Blogpage = () => {
  const [openComment, setOpenComment] = useState(true);
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
    <div className=" relative w-full">
      <BlogTitle blogData={blogData} />
      <div className="blog-container font-normal flex flex-col  ">
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
      <CommentContainer
        openComment={openComment}
        setOpenComment={setOpenComment}
      />
    </div>
  );
};

export default Blogpage;
