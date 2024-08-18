import React, { createContext, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cards");
      setData(response.data.cards);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  console.log(data);

  React.useEffect(() => {
    fetchData();
  }, []);

  const addCard = async (newCard) => {
    try {
      await axios.post("http://localhost:5000/api/cards", newCard);
      fetchData();
    } catch (error) {
      console.error("Failed to add card:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, addCard }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
