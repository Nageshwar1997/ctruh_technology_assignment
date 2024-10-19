import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { cuisineData, restaurantsData } from "../data/data";

const Home = () => {
  const [currentCuisine, setCurrentCuisine] = useState(null);

  const handleCuisineClick = (id) => {
    setCurrentCuisine(id);
  };

  const filteredRestaurants = currentCuisine
    ? restaurantsData.filter(
        (restaurant) => restaurant.cuisine_id === currentCuisine
      )
    : [];

  const currentCuisineData = cuisineData.find(
    (cuisine) => cuisine.id === currentCuisine
  );

  return (
    <div className="border w-full h-screen">
      <div className="flex flex-col items-center h-full px-4 sm:px-8 md:w-3/4 lg:w-2/3 mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Food Ordering App</h1>
        <p className="text-lg sm:text-xl font-semibold">Select your Cuisine:</p>
        <div className="flex flex-wrap justify-center gap-4 w-full cursor-pointer">
          {cuisineData.map((cuisine) => (
            <div
              onClick={() => handleCuisineClick(cuisine.id)}
              key={cuisine.id}
              className="bg-[#EF4444] text-white rounded-md px-4 py-2 text-lg cursor-pointer"
            >
              {cuisine.name}
            </div>
          ))}
        </div>

        {filteredRestaurants.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              {currentCuisineData ? currentCuisineData.name : ""} Restaurants:
            </h2>
            <div className="flex flex-wrap justify-center gap-4 w-full mt-4">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="border rounded-md p-4 cursor-pointer hover:shadow-lg transition"
                >

                  <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                  <p>{restaurant.address}</p>
                  <p>{restaurant.phone}</p>
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <button className="mt-2 bg-red-500 text-white rounded-md px-2 py-1 hover:bg-red-600 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optionally show a message if no restaurants are found */}
        {currentCuisine && filteredRestaurants.length === 0 && (
          <div className="mt-8">
            <p className="text-lg font-semibold">
              No restaurants found for this cuisine.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
