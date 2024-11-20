import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import DisplayCards from "../../components/DisplayCards";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="w-full flex flex-col min-h-screen">
      <SearchBar handleSearch={handleSearch} />
      <DisplayCards searchQuery={searchQuery} />
    </div>
  );
};

export default SearchComponent;
