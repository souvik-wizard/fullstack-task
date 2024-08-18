import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PrimaryButton from "../../components/PrimaryButton/index.js";

const CardDetails = () => {
  const { title } = useParams();
  const [card, setCard] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cards`);
        const foundCard = response.data.cards.find(
          (item) => item.title.toLowerCase() === title.toLowerCase()
        );
        if (foundCard) {
          setCard(foundCard);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error(err);
        setNotFound(true); // Handle error by setting not found
      }
    };

    fetchCard();
  }, [title]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg border shadow">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Card Not Found
          </h2>
          <p>The card with the title "{title}" does not exist.</p>
          <PrimaryButton
            onClick={() => navigate("/")}
            label="Go Back"
            className={" text-white mt-4 "}
          />
        </div>
      </div>
    );
  }

  if (!card) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto p-6 bg-white border rounded-xl shadow lg:w-[400px] w-full">
        <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
