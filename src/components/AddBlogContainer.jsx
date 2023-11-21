import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import BlogTitle from "./BlogTitle";
import { MdAddCircle } from "react-icons/md";
import Editor from "./Editor";
import { AiTwotoneDelete } from "react-icons/ai";
import CodeEditorWithLanguage from "./CodeEditorWithLanguage";
import { BiCodeAlt } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { config } from "../config";
import { BiSolidCloudUpload } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import Thumbnail from "./Thumbnail";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import TagSelector from "./TagSelector";
import { useNavigate } from "react-router-dom";
import Sugesstion from "./Sugesstion";
import Loading from "./Loading";
const AddBlogContainer = ({ setAddBlog, addBlog }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogObject, setBlogObject] = useState({
    title: "",
    thumbnail: "",
    hastags: [],
    content,
  });

  const [index, setIndex] = useState(content.length);
  const [options, setOptions] = useState(true);
  const handleOptions = () => {
    setOptions(!options);
  };
  const handleAddItems = (kind) => {
    if (
      content.length > 0 &&
      content[content.length - 1]?.kind === "editor" &&
      kind === "editor"
    ) {
      return;
    }
    const updatedContent = [...content];
    const tempObject = updatedContent[content.length];
    if (kind == "codeEditor") {
      updatedContent[content.length] = {
        ...tempObject,
        kind: kind,
        lang: "javascript",
        data: "",
      };
    } else {
      updatedContent[content.length] = { ...tempObject, kind: kind };
    }

    setContent(updatedContent);
    blogObject.content = updatedContent;
    setBlogObject(blogObject);
    // setIndex(index + 1);
    setOptions(false);
  };
  const handleDeleteItems = (id) => {
    const filteredItems = content.filter((item, i) => {
      return i != id;
    });
    setContent(filteredItems);
    blogObject.content = filteredItems;
    setBlogObject(blogObject);
  };

  const handleEditorContent = (html, index) => {
    const tempObject = content[index];
    content[index] = { ...tempObject, data: html };
    const updatedContent = [...content];
    setContent(updatedContent);
    blogObject.content = content;
    setBlogObject(blogObject);
  };

  const handleLanguageChange = (event, i) => {
    const updatedContent = [...content];
    updatedContent[i].lang = event.target.value;
    setContent(updatedContent);
    blogObject.content = content;
    setBlogObject(blogObject);
  };

  const handleCodeEditor = (code, i) => {
    const updatedContent = [...content];
    updatedContent[i].data = code;
    setContent(updatedContent);
    blogObject.content = updatedContent;
    setBlogObject(blogObject);
  };

  const handleTitle = (e) => {
    blogObject.title = e.target.value;
    setBlogObject(blogObject);
  };
  const handleSuccessToast = (message) => {
    toast.success("Uploaded Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleFailedToast = (message) => {
    toast.error(<div className="text-base">{message}</div>, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${config.domain}/blog/save`, blogObject, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.success) {
        console.log(res.data);
        handleSuccessToast(res.data.message);
        navigate(`/blog/${res.data.id}`);
      } else {
        toast.error(
          <div className=" font-thin text-sm">{res.data.message}</div>,
          {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.log(error);
      handleFailedToast("Couldn't upload your blog..");
    }
    setLoading(false);
  };

  return (
    <div
      className={`bg-black overflow-y-scroll font-customFont    w-full flex justify-center items-center  scrollbar-hide flex-col  text-white fixed  top-0   transition-all duration-200 ease-out ${
        addBlog ? "translate-y-0 z-10" : "translate-y-full z-0"
      }`}
    >
      <CgClose
        className="absolute top-[45px] right-[30px] "
        onClick={() => {
          setAddBlog(false);
        }}
      />
      <div className=" h-[100vh] w-full overflow-scroll scrollbar-hide  flex flex-col items-center   ">
        <Sugesstion />
        <BlogTitle handleTitle={handleTitle} />
        <Thumbnail blogObject={blogObject} setBlogObject={setBlogObject} />
        <TagSelector blogObject={blogObject} setBlogObject={setBlogObject} />
        {content.map((item, i) => {
          return item?.kind === "editor" ? (
            <div className="relative ">
              <Editor
                content={content}
                key={index}
                index={i}
                handleEditorContent={handleEditorContent}
              />
              <div
                className="absolute top-[18px] md:top-[70px] text-white right-4 md:-right-10 hover:text-red-600 cursor-pointer "
                onClick={() => handleDeleteItems(i)}
              >
                <AiTwotoneDelete size={25} />
              </div>
            </div>
          ) : (
            <div className="relative w-[90%] ">
              <CodeEditorWithLanguage
                key={index}
                content={content}
                index={i}
                handleCodeEditor={handleCodeEditor}
                handleLanguageChange={handleLanguageChange}
              />
              <div
                className="absolute top-10 z-10 right-8 md:-right-10 hover:text-red-600 cursor-pointer"
                onClick={() => handleDeleteItems(i)}
              >
                <AiTwotoneDelete size={25} />
              </div>
            </div>
          );
        })}
        {/* content addition */}
        <div className="cursor-pointer w-[90%] flex relative mt-20">
          <MdAddCircle size={30} onClick={handleOptions} />
          {options && (
            <div className="flex ml-4 gap-6 w-[100px]">
              <div
                className="hover:text-gray-500 cursor-pointer flex justify-center items-center"
                onClick={() => handleAddItems("editor")}
              >
                <TfiWrite size={20} />
              </div>
              <div
                className="hover:text-gray-500 cursor-pointer flex justify-center items-center"
                onClick={() => handleAddItems("codeEditor")}
              >
                <BiCodeAlt size={28} />
              </div>
            </div>
          )}
        </div>
        <div className=" flex   transform -translate-y-[50%] rounded-lg  justify-center  items-center gap-5 bottom-0 absolute right-8   flex-col">
          {/* <div className="flex gap-2 p-2  rounded-lg items-center  justify-center cursor-pointer ">
            <AiFillEye color="gray" size={28} />
          </div> */}
          <div
            onClick={handleSubmit}
            className="flex gap-2 bg-gray-900   p-3 rounded-full items-center justify-center cursor-pointer "
          >
            <BiSolidCloudUpload size={40} color="white" />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {loading && (
          <div>
            <Loading />
            <div>Uploading...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlogContainer;
