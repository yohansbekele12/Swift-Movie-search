import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card.jsx";
import Navbar from "../componets/Navbar.jsx";

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ... rest of your state and functions ...

  return (
    <>
      <div className="relative min-h-screen bg-black">
        <Navbar />
        <main className="pt-16">
          <div className="min-h-screen bg-gradient-to-b from-black/70 to-black/70 bg-[url('/images/movie-background.jpg')] bg-center bg-cover">
            <div className="flex flex-col items-center justify-center pt-20 px-4">
              <h1 className="text-5xl font-bold text-white mb-8 text-center">
                Find Your Next Favorite Movie
              </h1>
              <div className="w-full max-w-2xl flex gap-3 px-4 mb-12">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Search for movies..."
                  className="flex-1 p-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Error Message */}
              {error && <div className="text-red-500 mb-4">{error}</div>}

              {/* Loading State */}
              {loading && <div className="text-white text-xl">Loading...</div>}

              {/* Movie Cards Grid */}
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {movies.map((movie) => (
                    <Card
                      key={movie.id}
                      title={movie.title}
                      description={movie.description}
                      rating={movie.rating}
                      imageUrl={movie.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MovieSearch;
