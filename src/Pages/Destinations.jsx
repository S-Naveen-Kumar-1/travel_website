import React, { useState } from "react";
import destination from "../../src/assets/banner2.webp";
import destinationsData from "../data/shopping/destination.json";
import BookingForm from "../components/DestinationBookingForm";

const Destinations = () => {
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [filters, setFilters] = useState({ place: "", group: "" });
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinationsData);
  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility

  const handleSearch = () => {
    const { place, group } = filters;

    let filtered = destinationsData;

    if (place) {
      filtered = filtered.filter((destination) => destination.place === place);
    }

    if (group) {
      filtered = filtered.map((destination) => ({
        ...destination,
        spotGroups: destination.spotGroups.filter(
          (groupItem) => groupItem.groupName === group
        ),
      }));
    }

    setFilteredDestinations(filtered);
  };

  const handleGroupBooking = (group) => {
    setSelectedGroup(group); // Set the selected group
    setShowForm(true); // Show the booking form
  };

  const closeForm = () => {
    setShowForm(false); // Close the booking form
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center min-h-[500px]"
        style={{
          backgroundImage: `url(${destination})`, // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Explore Kashmir
          </h1>
          <div className="bg-white bg-opacity-80 p-6 rounded-lg flex flex-wrap justify-center items-center gap-6 max-w-4xl w-11/12">
            {/* Destination Select */}
            <div className="w-full sm:w-[200px]">
              <select
                value={filters.place}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, place: e.target.value }))
                }
                className="p-3 text-base border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected>
                  Select Destination
                </option>
                {destinationsData.map((destination) => (
                  <option key={destination.place} value={destination.place}>
                    {destination.place}
                  </option>
                ))}
              </select>
            </div>

            {/* Group Select */}
            <div className="w-full sm:w-[200px]">
              <select
                value={filters.group}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, group: e.target.value }))
                }
                className="p-3 text-base border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected>
                  Select Group
                </option>
                {destinationsData
                  .flatMap((destination) => destination.spotGroups)
                  .map((group) => (
                    <option key={group.groupName} value={group.groupName}>
                      {group.groupName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="w-full sm:w-auto">
              <button
                onClick={handleSearch}
                className="px-6 py-3 text-lg bg-blue-600 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 w-full sm:w-[150px]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="container mx-auto px-4 py-8">
        {filteredDestinations.length === 0 ? (
          <p className="text-xl font-semibold text-center text-red-500">
            No destinations found based on your filters.
          </p>
        ) : (
          filteredDestinations.map((destination) => (
            <div key={destination.place} className="mb-12">
              {destination.spotGroups.length > 0 && (
                <h2 className="text-3xl font-bold mb-6">{destination.place}</h2>
              )}
              <div>
                {destination.spotGroups.length === 0 ? (
                  <p className="text-lg text-center text-gray-600"></p>
                ) : (
                  destination.spotGroups.map((group) => (
                    <div key={group.groupName} className="mb-8">
                      {/* Group Name and Price */}
                      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold">
                          {group.groupName}
                        </h3>
                        <p className="text-lg text-gray-600">{group.price}</p>
                        <button
                          onClick={() => handleGroupBooking(group)}
                          className="px-6 py-2 text-lg bg-green-600 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500 mt-4 sm:mt-0"
                        >
                          Book Now
                        </button>
                      </div>

                      {/* Spots Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.spots.map((spot, index) => (
                          <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                          >
                            <img
                              src={spot.image}
                              alt={spot.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="text-xl font-semibold mb-2">
                                {spot.name}
                              </h3>
                              <p className="text-gray-600 mb-4">
                                {spot.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
      {showForm && (
        <BookingForm
          group={selectedGroup}
          isOpen={showForm}
          onClose={closeForm}
        />
      )}
    </div>
  );
};

export default Destinations;
