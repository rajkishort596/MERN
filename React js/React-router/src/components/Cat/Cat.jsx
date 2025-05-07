import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Cat = () => {
  const cats = useLoaderData(); // now an array
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 cursor-pointer">
      {cats.map((cat, index) => (
        <Link
          to={`/cats/${cat.breeds[0]?.id}`}
          key={index}
          className="bg-white shadow-md rounded-xl p-4 w-80 hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {cat.breeds[0]?.name || "Unknown Breed"}
          </h2>
          <img
            src={cat.url}
            alt="cat"
            className="w-full h-72 object-cover rounded-md mb-3 "
          />
          <p className="text-gray-600 text-sm">
            {cat.breeds[0]?.description?.split(".")[0] + "." ||
              "No description available."}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default Cat;

// catLoader.js
export const catLoader = async () => {
  const API_KEY = import.meta.env.VITE_CAT_API_KEY;
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to load cat data");
  }

  return response.json(); // Now returns an array
};
