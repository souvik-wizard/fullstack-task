import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DisplayCards = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cards");
        setData(response.data.cards);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [data]);

  const filteredData = (data || []).filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="text-4xl font-semibold mx-auto my-6">
        Total Number of cards: {filteredData?.length}
      </h1>
      <div
        className={`${
          filteredData.length === 0 ? "md:grid-cols-1" : "md:grid-cols-2"
        } grid grid-cols-1 lg:gap-12 gap-8  lg:p-12 p-8 place-items-center lg:w-8/12 mx-auto`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              onClick={() => {
                const encodedTitle = encodeURIComponent(item.title);
                navigate(`/cards/${encodedTitle}`);
              }}
              key={item.id}
              className=" lg:w-[400px] h-full w-full border rounded-xl shadow bg-[#F4F6F8] cursor-pointer"
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
          <p className="text-gray-500 text-lg mt-20">No results found.</p>
        )}
      </div>
    </>
  );
};

export default DisplayCards;
