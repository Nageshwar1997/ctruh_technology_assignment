import { useParams, useNavigate } from "react-router-dom";
import { restaurantsData } from "../data/data";
import { useState } from "react";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurantsData.find((res) => res.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);

  const [review, setReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    restaurantsData.find((res) => res.id === parseInt(id)).ratings.push(review);
    setReview({ name: "", rating: 0, comment: "" });
    setShowModal(false)
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
      <p className="text-lg mb-2">Address: {restaurant.address}</p>
      <p className="text-lg mb-4">
        Average Rating: {restaurant.averageRating} ★
      </p>

      <h3 className="text-2xl font-semibold mb-2">Menu:</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {restaurant.menu.map((item) => (
          <li
            key={item.name}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              className="w-20 h-20 mb-2 rounded"
              src={item.imgSrc}
              alt={item.name}
            />
            <h4 className="font-medium">{item.name}</h4>
            <p className="text-lg">${item.price}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-2">Reviews:</h3>
      <div className="space-y-4 mb-6">
        {restaurant.ratings.map((rating) => (
          <div key={rating.revName}>
            <div className="border rounded-lg p-4 shadow flex justify-between items-center">
              <div>
                <p className="font-medium">{rating.revName}</p>
                <p>{rating.comment}</p>
                <p className="text-yellow-500">{rating.rating}/5 ★</p>
              </div>
              <div>
                <img
                  src={rating.pp}
                  alt={rating.revName}
                  className="w-14 rounded-lg h-14 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
      >
        Add Review
      </button>

      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add a Review</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="rating">
                  Rating:
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={review.rating}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                >
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  value={review.name}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                  placeholder="Write your name here..."
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="comment">
                  Comment:
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={review.comment}
                  onChange={handleInputChange}
                  className="border rounded w-full p-2"
                  rows="4"
                  placeholder="Write your review here..."
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
