import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelForm from "./HotelForm";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa"; // Import React Icons
import { Base_Url } from "../../config";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [editingHotel, setEditingHotel] = useState(null);

  // API Base URL

  // Fetch hotels from the API
  const fetchHotels = async () => {
    try {
      const response = await axios.get(`${Base_Url}/hotels`);
      console.log(response.data, "Fetched Hotels");
      setHotels(response.data.data); // Assuming your response has a `data` key
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  // Add or update hotel
  const handleFormSubmit = async (hotelData) => {
    console.log(hotelData, editingHotel);
    try {
      if (editingHotel) {
        // Update existing hotel
        await axios.put(`${Base_Url}/hotels/${editingHotel._id}`, hotelData);
        setHotels((prev) =>
          prev.map((hotel) =>
            hotel._id === editingHotel._id ? { ...hotel, ...hotelData } : hotel // Corrected here
          )
        );
        setEditingHotel(null);
      } else {
        // Add new hotel
        const response = await axios.post(`${Base_Url}/hotels`, hotelData);
        setHotels((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.error("Error saving hotel:", error);
    }
  };

  // Delete hotel
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Base_Url}/hotels/${id}`);
      setHotels((prev) => prev.filter((hotel) => hotel._id !== id)); // Use _id instead of id
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  // Handle edit
  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Hotels</h1>

      <HotelForm onSubmit={handleFormSubmit} initialData={editingHotel} />

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Hotel List</h2>
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel._id} className="mb-2 flex justify-between items-center">
              <div>
                <strong>{hotel.name}</strong> - ₹{hotel.price}/night -{" "}
                {hotel.destination}
              </div>
              <div className="flex space-x-2">
                {/* Edit Icon */}
                <button
                  onClick={() => handleEdit(hotel)}
                  className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  <FaPencilAlt className="w-5 h-5" />
                </button>
                {/* Delete Icon */}
                <button
                  onClick={() => handleDelete(hotel._id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrashAlt className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hotel;
