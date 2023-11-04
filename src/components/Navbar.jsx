import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import {Link} from "react-router-dom"; 

const Navbar = ({ handleDropDown, drop }) => {
  return (
    <div className="w-full overflow-hidden   bg-black text-white gap-4  flex flex-col  md:flex-row  justify-between items-center p-4 ">
      <div className="w-[100%] md:w-[10%] flx justify-between  gap-4 text-2xl p-2">
        {/* <GiPaperArrow size="20" /> */}
        <div className="flex ">
          <div>Paper</div> <div className="  text-teal-600">Man</div>
        </div>
        <div className=" sm:hidden ">
          <RxHamburgerMenu size={30} onClick={handleDropDown} />
        </div>
      </div>
      {drop && <DropDown />}

      <div className="hidden  md:w-[35%] w-[100%] md:flex  items-center   justify-between text-sm   p-2    ">
        <div className="bg-teal-600 rounded-xl p-3 cursor-pointer w-[30%] text-center">
          EXPLORE
        </div>
        <div className="rounded-xl p-3 hover:bg-gray-900 cursor-pointer  w-[30%]  text-center ">
          <Link to={"../blog"}>BLOGS</Link>
        </div>
        <div className="rounded-xl p-3  hover:bg-gray-900 cursor-pointer  w-[30%]  text-center ">
          NEWS
        </div>
      </div>
      <SearchBar />
      <div className="hidden md:w-[20%] md:flex w-[100%]  md:justify-evenly justify-between cursor-pointer text-sm ">
        <div className="p-3 bg-teal-600 rounded-md md:w-[40%] w-[30%]  text-center ">
        <Link to="../login">Login</Link>
        </div>
        <div className="p-3 bg-teal-600 rounded-md md:w-[40%] w-[30%]  text-center ">
        <Link to="../signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
