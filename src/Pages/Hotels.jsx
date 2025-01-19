import React, { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS styles
import Footer from "../components/Footer";
import BookingForm from "../components/HotelBookingForm";

const hotels = [
  {
    id: 1,
    name: "Hotel Ash vale",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/8b/3a/cc/front-view-of-hotel.jpg?w=500&h=-1&s=1",
    price: "₹5,000/night",
    features: ["Free WiFi", "Mountain View", "Breakfast Included"],
    destination: "Gulmarg",
  },
  {
    id: 2,
    name: "Kashmir Valley Resort",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCWVNZEyln4HPSqdnYlA7Y9LZY4ziX4x1_A&s",
    price: "₹7,500/night",
    features: ["Spa Services", "Lake View", "Free Parking"],
    destination: "Kashmir",
  },
  {
    id: 3,
    name: "Hotel Mirage",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxg-9NG3NB_cgWtzfoceol51OQwP5TuAJCw&s",
    price: "₹4,000/night",
    features: ["Pet Friendly", "Garden View", "Restaurant"],
    destination: "Srinagar",
  },
  {
    id: 4,
    name: "Snowy Peaks Inn",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4vY131dhJKtAdr460sQ7FI3KXPBI0GHW4Q&s",
    price: "₹6,000/night",
    features: ["Ski Access", "Heated Rooms", "Bar"],
    destination: "Pahalgam",
  },
  {
    id: 5,
    name: "Kashmir Heritage Hotel",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuM60W9H2Up5Z4yKUvY3NkNiD1haD-3TNRA&s",
    price: "₹5,500/night",
    features: ["Free Parking", "Restaurant", "Mountain View"],
    destination: "Kupwara",
  },
  {
    id: 6,
    name: "Betaab Valley Retreat",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/1d/52/94/mirage-front-view.jpg?w=500&h=500&s=1",
    price: "₹6,800/night",
    features: ["Mountain View", "Free Breakfast", "Restaurant"],
    destination: "Betaab Valley",
  },
];

const Hotels = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const [destination, setDestination] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null); 

  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel)
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run the animation only once
    });
  }, []);

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleNumPersonsChange = (e) => {
    setNumPersons(Number(e.target.value));
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  // Filter hotels based on destination
  const filteredHotels = hotels.filter((hotel) =>
    hotel.destination.toLowerCase().includes(destination.toLowerCase())
  );

  // Get unique destinations from the hotels data
  const uniqueDestinations = Array.from(
    new Set(hotels.map((hotel) => hotel.destination))
  );

  return (
    <div>
      {/* Banner Section with Form on Top */}
      <div
        className="relative bg-cover bg-center min-h-[600px]"
        style={{
          backgroundImage:
            'url("https://cdn6.agoda.net/images/mvc/default/background_image/geo/2203_deluxe_01.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Check-In/Check-Out Form on Top of Banner */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 bg-white max-w-3xl w-full rounded-[20px] p-4">
          <div className="rounded-[20px] p-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              Book Your Stay
            </h2>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              {/* Check-in */}
              <div className="flex-1 mb-4 sm:mb-0">
                <label
                  htmlFor="check-in"
                  className="block text-lg text-gray-600"
                >
                  Check-in
                </label>
                <input
                  type="date"
                  id="check-in"
                  value={checkIn}
                  onChange={handleCheckInChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
              {/* Check-out */}
              <div className="flex-1 mb-4 sm:mb-0">
                <label
                  htmlFor="check-out"
                  className="block text-lg text-gray-600"
                >
                  Check-out
                </label>
                <input
                  type="date"
                  id="check-out"
                  value={checkOut}
                  onChange={handleCheckOutChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
              {/* Number of persons */}
              <div className="flex-1 mb-4 sm:mb-0">
                <label
                  htmlFor="num-persons"
                  className="block text-lg text-gray-600"
                >
                  Number of Persons
                </label>
                <input
                  type="number"
                  id="num-persons"
                  value={numPersons}
                  onChange={handleNumPersonsChange}
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
            </div>

            {/* Destination Filter */}
            <div className="mt-6">
              <label
                htmlFor="destination"
                className="block text-lg text-gray-600"
              >
                Select Destination
              </label>
              <select
                id="destination"
                value={destination}
                onChange={handleDestinationChange}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              >
                <option value="">Select a destination</option>
                {uniqueDestinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Listing Section */}
      <div className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Hotels in {destination || "Kashmir"}
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  data-aos="fade-up" // Apply AOS fade-up animation
                >
                  <img
                    src={hotel.imageUrl}
                    alt={hotel.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {hotel.name}
                    </h3>
                    <p className="text-xl font-bold text-blue-600 mt-2">
                      {hotel.price}
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      {hotel.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-2">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={()=>handleBookNowClick(hotel)}
                      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No hotels found for this destination.
              </p>
            )}
          </div>
        </div>
      </div>
      <BookingForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        selectedHotel={selectedHotel}
     
      />
      <Footer />
    </div>
  );
};

export default Hotels;
