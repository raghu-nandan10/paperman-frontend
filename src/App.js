import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/Home";
import Blogpage from "./pages/blog-page/Blogpage";

import "./App.css";

import "./App.css";
import BlogsWithHastag from "./pages/BlogsWithHastag";
import { useState, createContext } from "react";
export const BlogToggleContext = createContext();
function App() {
  const [addBlog, setAddBlog] = useState(false);
  return (
    <BlogToggleContext.Provider value={{ setAddBlog, addBlog }}>
      <div className="bg-black   text-xl overflow-hidden ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog/:id" element={<Blogpage />} />
            <Route path="/blog/hastag/:hastag" element={<BlogsWithHastag />} />
          </Routes>
        </BrowserRouter>
      </div>
    </BlogToggleContext.Provider>
  );
}

export default App;
