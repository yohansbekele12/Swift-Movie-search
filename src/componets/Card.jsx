import React, { useState } from "react";

const Card = ({ title, description, rating, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm transition-all duration-300 hover:shadow-xl">
      <img
        src={imageUrl || "https://via.placeholder.com/400x225"}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
            {rating}/10
          </span>
        </div>

        <p
          className={`text-gray-600 text-sm ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
