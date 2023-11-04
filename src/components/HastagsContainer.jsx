import React from "react";
import Hastags from "./Hastags";
import { AiTwotoneFire } from "react-icons/ai";
const HastagsContainer = () => {
  return (
    <div className="w-[100%] flx flex-col gap-8  mb-8">
      <div className="w-[100%] flx">
        <h1 className="text-white flex gap-2">
          <span>Trending Searches</span>
        </h1>
      </div>
      <Hastags />
    </div>
  );
};

export default HastagsContainer;
