import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center py-20 bg-[#DADBF0]">
      <h1 className="lg:text-6xl text-4xl">How can we help?</h1>
      <input
        type="text"
        placeholder="Search"
        className="lg:w-1/4 w-3/4 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
