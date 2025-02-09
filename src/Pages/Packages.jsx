import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Package from "../../src/assets/package.png"
import BookingForm from "../components/PackageBookingForm";
import PackageData  from "../data/shopping/packages.json"
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState(PackageData);
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null); 
  const navigate = useNavigate();

  const filteredPackages = packages.filter((pkg) => {
    const price = parseInt(pkg.price.replace("₹", "").replace(",", ""));
    const pricePerPerson = price / pkg.people;
    return (
      (destination === "" || pkg.destination.toLowerCase().includes(destination.toLowerCase())) &&
      (numDays === 0 || pkg.days === numDays) &&
      (numPeople === 1 || pkg.people >= numPeople) &&
      pricePerPerson >= priceRange[0] && pricePerPerson <= priceRange[1]
    );
  });

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleNumDaysChange = (e) => {
    setNumDays(Number(e.target.value));
  };

  const handleNumPeopleChange = (e) => {
    setNumPeople(Number(e.target.value));
  };

  const handleBookPackage = (pkg) => {
    setSelectedPackage(pkg);
    setIsFormOpen(true);
  }

const handleViewDetails = (pkg) => {
    navigate(`/package-details/${pkg.id}`);
}

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center min-h-[600px]"
        style={{
            backgroundImage: `url(${Package})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      >
        {/* Filters Form */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 bg-white max-w-3xl w-full rounded-lg p-4 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Book Your Kashmir Package
          </h2>

          <div className="flex flex-wrap gap-4 justify-between">
            <div className="flex-1">
              <label htmlFor="num-days" className="block text-lg text-gray-600">
                Number of Days
              </label>
              <select
                id="num-days"
                value={numDays}
                onChange={handleNumDaysChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              >
                <option value={0}>Any</option>
                <option value={5}>5 Days</option>
                <option value={7}>7 Days</option>
                <option value={10}>10 Days</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="num-people" className="block text-lg text-gray-600">
                Number of People
              </label>
              <input
                type="number"
                id="num-people"
                value={numPeople}
                onChange={handleNumPeopleChange}
                min="1"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Search Packages
            </button>
          </div>
        </div>
      </div>

      {/* Package Listing */}
      <div className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Kashmir Packages
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
                  data-aos="fade-up"
                >
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800">{pkg.title}</h3>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                    <ul className="mt-4 text-sm text-gray-600">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xl font-semibold text-gray-800">
                        {pkg.price}
                      </span>
                      <button onClick={() => handleBookPackage(pkg)} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        Book Now
                      </button>
                    </div>
                    <div className="mt-4">
                      <button onClick={() => handleViewDetails(pkg)} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-lg text-gray-600">
                No packages found based on your filter criteria.
              </div>
            )}
          </div>
        </div>
      </div>

      <BookingForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        selectedPackage={selectedPackage}
      />
    </div>
  );
};

export default Packages;
