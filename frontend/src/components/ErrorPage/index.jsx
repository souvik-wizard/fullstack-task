// NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
