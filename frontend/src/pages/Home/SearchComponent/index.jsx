import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  const filteredData = (data || []).filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 items-center justify-center py-20 bg-[#DADBF0]">
        <h1 className="lg:text-6xl text-4xl">How can we help?</h1>
        <input
          type="text"
          placeholder="Search"
          className="lg:w-1/4 w-3/4 p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div
        className={`${
          filteredData.length === 0 ? "md:grid-cols-1" : "md:grid-cols-2"
        } grid grid-cols-1 lg:gap-12 gap-8  lg:p-12 p-8 place-items-center `}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              onClick={() => {
                navigate(`/cards/${item.title}`);
              }}
              key={item.id}
              className=" lg:w-[400px] w-full border rounded-xl shadow bg-[#F4F6F8] cursor-pointer"
            >
              <h3 className="text-lg font-bold text-gray-800 border-b px-4 pt-4 pb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 px-4 pt-1 pb-6 break-all">
                {item.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
