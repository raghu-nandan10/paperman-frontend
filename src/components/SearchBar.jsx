import React from "react";

const SearchBar = () => {
  const handleChange = () => {};
  return (
    <input
      className="md:w-[25%] w-[100%]  bg-gray-800 p-3 rounded-xl outline-none text-lg  "
      placeholder="Search something.."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
