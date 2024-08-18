// NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/index.js";

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
        <PrimaryButton
          onClick={() => navigate("/")}
          label="Go Back Home"
          className="mt-6 text-white"
        />
      </div>
    </div>
  );
};

export default NotFound;
