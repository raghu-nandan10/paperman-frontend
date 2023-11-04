import React from "react";
import { AiFillMobile } from "react-icons/ai";
const Suggestion = () => {
  return (
    <div className="w-full text-sm text-center p-2 bg-blue-600 text-white  flx gap-2 ">
      <div>We suggest not to use small screen for Content Creation</div>
      <AiFillMobile size={20} />
    </div>
  );
};

export default Suggestion;
