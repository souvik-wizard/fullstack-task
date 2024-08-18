import axios from "axios";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const CreateCard = () => {
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
      await axios.post("http://localhost:5000/api/cards", {
        title,
        description,
      });
      toast.success("Submitted successfully!");
      setTitle("");
      setDescription("");
      setErrors({ title: "", description: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
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

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </div>
  );
};

export default CreateCard;
