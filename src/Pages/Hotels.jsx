import React, { useState, useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS styles
import Footer from "../components/Footer";
import BookingForm from "../components/HotelBookingForm";

const hotels = [
  {
    id: 1,
    name: "Eden Resorts & Spa",
    images: [
      "https://edenresorts.in/wp-content/uploads/2023/12/36000013.webp",
      "https://edenresorts.in/wp-content/uploads/2023/12/36000064.webp",
      "https://edenresorts.in/wp-content/uploads/2023/12/36000011.webp",
      "https://edenresorts.in/wp-content/uploads/2023/12/36000009.webp",
      "https://edenresorts.in/wp-content/uploads/2023/12/36000001.webp",
      "https://edenresorts.in/wp-content/uploads/2023/12/36000010.webp"
    ],
    price: "₹7,500/night",
    features: ["Spa Services", "Lake View", "Free Parking"],
    destination: "Pahalgam",
  },
  {
    id: 2,
    name: "Green Top Resort",
    images: [
      "http://greentopresortpahalgam.com/wp-content/uploads/2022/05/green-top-resort-28-1-340x240.jpg",
      "http://greentopresortpahalgam.com/wp-content/uploads/2022/05/green-top-resort-4-340x240.jpg",
      "http://greentopresortpahalgam.com/wp-content/uploads/2022/05/green-top-resort-16-340x240.jpg",
      "http://greentopresortpahalgam.com/wp-content/uploads/2022/05/green-to-resort-pahalgam-17-340x240.jpg",
      "http://greentopresortpahalgam.com/wp-content/uploads/2022/05/green-top-resort-7-340x240.jpg",
      "http://greentopresortpahalgam.com/wp-content/uploads/2022/05/green-top-resort-28-1-340x240.jpg"
    ],
    price: "₹6,500/night",
    features: ["Spa Services", "Lake View", "Free Parking"],
    destination: "Pahalgam",
  },
  {
    id: 3,
    name: "The Chinar Resort & Spa, Pahalgam",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMFxzP9GBpatiE3wYcf5jRKfHBxH_daNwYw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5rdTyb5FYfPWQ1-LSXzXmtYWuqQlYXfVGg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJu3QOY2dRYgv9VNapr2DlOZJy2qbizggUvQ&s",
    ],
    price: "₹5,000/night",
    features: ["Free WiFi", "Mountain View", "Breakfast Included"],
    destination: "Gulmarg",
  },
 

  {
    id: 4,
    name: "Kashmir Heritage Hotel",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dPLUI__a6JaSAc0O3FETjkSHcKxZXS3kXA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OWSCC_Kq9xhif_Mfzo-nm9xd6TjLlZfThQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIRdqhquXhBb6FW5eVeguwFxhQUJuIcLgTA&s",
    ],
    price: "₹5,500/night",
    features: ["Free Parking", "Restaurant", "Mountain View"],
    destination: "Srinagar",
  },
  {
    id: 5,
    name: "Kashmir Mahal Resorts",
    images: [
      "https://images.jdmagicbox.com/comp/srinagar/t1/9999px194.x194.151104143034.n1t1/catalogue/impex-hill-resorts-nishat-srinagar-hotels-90fgl.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFcp9F6kUp150tDtTu9JHlkDwFxR2UoiBbQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Xa6tkh0vacGGUf8SfFEviQMOQKmiLjQiFQ&s",
    ],
    price: "₹6,800/night",
    features: ["Free Parking", "Restaurant", "Mountain View"],
    destination: "Srinagar",
  },

  {
    id: 6,
    name: "Hotel Mirage",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzp_0BPpA78L2VS_qF9OJo_qTNHjSTy1Nd1w&s",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f4/03/ff/main-view.jpg?w=1200&h=-1&s=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KdFCT_hteYJKTsILMbeK204rfS1RMY5m7Q&s",
    ],
    price: "₹4,000/night",
    features: ["Pet Friendly", "Garden View", "Restaurant"],
    destination: "Srinagar",
  },
];
const Hotels = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const [destination, setDestination] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [imageIndexes, setImageIndexes] = useState({}); // Store image index for each hotel

  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel);
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

  // Function to change image index for a specific hotel
  const changeImageIndex = (hotelId, direction) => {
    setImageIndexes((prevIndexes) => {
      const currentIndex = prevIndexes[hotelId] || 0;
      const hotel = hotels.find((hotel) => hotel.id === hotelId);
      const totalImages = hotel.images.length;

      let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      if (newIndex >= totalImages) newIndex = 0;
      if (newIndex < 0) newIndex = totalImages - 1;

      return {
        ...prevIndexes,
        [hotelId]: newIndex,
      };
    });
  };

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
              filteredHotels.map((hotel) => {
                const currentImageIndex = imageIndexes[hotel.id] || 0;

                return (
                  <div
                    key={hotel.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    data-aos="fade-up" // Apply AOS fade-up animation
                  >
                    <div className="relative">
                      <img
                        src={hotel.images[currentImageIndex]}
                        alt={hotel.name}
                        className="w-full h-64 object-cover"
                      />

                      {/* Custom Prev and Next Buttons in Flex */}
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between px-4">
                        <button
                          onClick={() => changeImageIndex(hotel.id, 'prev')}
                          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900"
                        >
                          &#8592;
                        </button>
                        <button
                          onClick={() => changeImageIndex(hotel.id, 'next')}
                          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900"
                        >
                          &#8594;
                        </button>
                      </div>
                    </div>
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
                        onClick={() => handleBookNowClick(hotel)}
                        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                );
              })
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
