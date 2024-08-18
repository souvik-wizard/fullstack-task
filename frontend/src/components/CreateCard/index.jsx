import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { DataContext } from "../../contexts/DataContext.jsx"; // Import DataContext
import PrimaryButton from "../PrimaryButton/index.js";

const CreateCard = ({ onSuccess }) => {
  const { addCard } = useContext(DataContext); // Use context
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors = { title: "", description: "" };

    if (!title) {
      newErrors.title = "Title is required";
      formIsValid = false;
    }

    if (!description) {
      newErrors.description = "Description is required";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await addCard({ title, description }); // Use context to add card
      toast.success("Card added successfully!");
      onSuccess(false); // Close the modal or perform any other action
    } catch (err) {
      console.error(err);
      toast.error("Failed to add card.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg text-black">
      <h2 className="text-2xl font-semibold mb-4">Create a card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-10"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          label={isSubmitting ? "Submitting..." : "Submit"}
          className="w-full text-white"
        />
      </form>
    </div>
  );
};

export default CreateCard;
