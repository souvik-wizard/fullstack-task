// CardDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CardDetails = () => {
  const { title } = useParams(); // Get title from URL
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

        console.log(foundCard);

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
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Card Not Found</h2>
        <p>The card with the title "{title}" does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!card) return <div>Loading...</div>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
};

export default CardDetails;
