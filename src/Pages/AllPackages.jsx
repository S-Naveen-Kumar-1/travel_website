import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { FaCalendarAlt } from "react-icons/fa";

const packages = {
  kashmir: [
    {
      id: "the-nomads-quest",
      name: "The Nomads Quest (nirvana)",
      days: 9,
      night: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfw78Ij9h_fLWmsw2Csp3e-YuaTO2dytoOIw&s",
      description: "Experience the beauty of the valleys and lakes of Kashmir.",
    },
    {
      id: "green-escape",
      name: "Green Escape",
      days: 5,
      night: 4,
      image:
        "data:image/jpeg;base64,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",
      description:
        "Enjoy thrilling treks in the stunning landscapes of Kashmir.",
    },
    {
      id: "winter-twilight-kashmir",
      name: "Winter Twilight Kashmir",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB0_bRHQciVrQQxNTD2_xZ2mkzRSE4HFtfg&s",
      description: "Explore Kashmir in winter with snow-covered beauty.",
    },
    {
      id: "honeymoon-special",
      name: "Honeymoon Special",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJWdum-VMFYuHlpPvAx0c6x1vV7zcaMCQjA&s",
      description: "Perfect for couples looking for a scenic retreat.",
    },
    {
      id: "thrill-trek-escape",
      name: "Thrill Trek Escape",
      days: 8,
      night: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznmN2O5cre6gkzHH5BU2XLxi0N4WVCWjYUQ&s",
      description: "Discover the rich traditions and culture of Kashmir.",
    },
  ],
  jammu: [
    {
      id: "jammu-spiritual-journey",
      name: "Jammu Spiritual Journey",
      days: 6,
      night: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTDrysXTivln1ZbF6x8sIaZbFzhpPaYYOdw&s",
      description: "A divine pilgrimage to Vaishno Devi and other sacred sites in Jammu."
    },
    {
      id: "jammu-nature-retreat",
      name: "Jammu Nature Retreat",
      days: 6,
      night: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6p2jDPuUzSu4nN-iYXX2dVYE0VI1qJPh_w&s",
      description: "Immerse yourself in the lush greenery and serene landscapes of Jammu."
    },
    {
      id: "jammu-historic-tour",
      name: "Jammu Historic Tour",
      days: 6,
      night: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DnAxBrCH3yVuvtovrsbTTT705-cUKPx4zQ&s",
      description: "Step back in time with visits to forts, palaces, and historical landmarks."
    },
    {
      id: "jammu-wildlife-expedition",
      name: "Jammu Wildlife Expedition",
      days: 6,
      night: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdTRHC9ATA0dNaLxZwj5pPAZcyFYHZ97LFA&s",
      description: "Explore Jammu’s wildlife sanctuaries and encounter exotic flora and fauna."
    },
    {
      id: "jammu-adventure-escapade",
      name: "Jammu Adventure Escapade",
      days: 6,
      night: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ85plN0jPWC9aHD0pIl5_4r0Q6h0aBeOsw&s",
      description: "Experience the thrill of trekking, paragliding, and river rafting in Jammu."
    }
  ],

  ladakh: [
    {
      id: "ladakh-adventure-expedition",
      name: "Ladakh Adventure Expedition",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhJyrjph0JEfRLj_U1l7T0e_k20ISqbpi-g&s",
      description: "An adrenaline-filled trip through the mountains of Ladakh.",
    },
    {
      id: "ladakh-motorcycle-tour",
      name: "Ladakh Motorcycle Tour",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwu0-mW0zyevnecu0MMIp-Y7XZwokQi1_qw&s",
      description: "A thrilling ride through the rugged terrains of Ladakh.",
    },
    {
      id: "leh-ladakh-cultural-tour",
      name: "Leh-Ladakh Cultural Tour",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAs-iXXnX3KYSWqvCl8hVIjqjA6ztDQFtMQ&s",
      description:
        "Immerse yourself in the rich heritage and traditions of Ladakh.",
    },
    {
      id: "frozen-river-trek",
      name: "Frozen River Trek",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvG_Wq6wjYg-hCQeVeTtQ-d45WjyzUlSTVA&s",
      description:
        "Walk over the frozen Zanskar River on this unforgettable trek.",
    },
    {
      id: "ladakh-scenic-retreat",
      name: "Ladakh Scenic Retreat",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nBkLhFVZWNp-rpimnVwmVLrxgFePJkKVOg&s",
      description:
        "Enjoy a peaceful retreat in the breathtaking landscapes of Ladakh.",
    },
  ],
};

const AllPackages = () => {
  const [selectedDestination, setSelectedDestination] = useState("kashmir");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const handleFilterChange = (destination) => {
    setSelectedDestination(destination);
  };

  const filteredPackages = packages[selectedDestination] || [];

  const handleSubPackageClick = (subPackageId) => {
    navigate(`/packages/${selectedDestination}/${subPackageId}`);
  };

  return (
    <div className="mx-auto py-16">
      <h2
        className="text-5xl font-bold text-purple-800 mb-12 text-center"
        data-aos="fade-up"
      >
        {`${
          selectedDestination.charAt(0).toUpperCase() +
          selectedDestination.slice(1)
        } Packages`}
      </h2>

      {/* Filter Sidebar */}
      <div className="flex justify-center mb-12 flex-wrap">
        <div className="flex space-x-4 md:space-x-6">
          <button
            className={`text-lg px-6 py-2 rounded-lg ${
              selectedDestination === "kashmir"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-800"
            } transition duration-300`}
            onClick={() => handleFilterChange("kashmir")}
          >
            Kashmir
          </button>
          <button
            className={`text-lg px-6 py-2 rounded-lg ${
              selectedDestination === "jammu"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-800"
            } transition duration-300`}
            onClick={() => handleFilterChange("jammu")}
          >
            Jammu
          </button>
          <button
            className={`text-lg px-6 py-2 rounded-lg ${
              selectedDestination === "ladakh"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-800"
            } transition duration-300`}
            onClick={() => handleFilterChange("ladakh")}
          >
            Ladakh
          </button>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6">
        {filteredPackages.map((subPkg) => (
          <div
            key={subPkg.id}
            className="bg-white shadow-2xl rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
          >
            <img
              src={subPkg.image}
              alt={subPkg.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-900 mb-3">
                {subPkg.name}{" "}
              </h3>
              <div className="flex items-center gap-3 m-auto justify-center mb-3">
                <FaCalendarAlt className="text-purple-700 text-2xl" />
                <p className="text-2xl md:text-3xl font-semibold text-purple-900 ">
                  {subPkg.days}D / {subPkg.night}N{" "}
                </p>
              </div>
              <p className="text-gray-800 mb-6 text-sm md:text-base">
                {subPkg.description}
              </p>
              <button
                className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:from-green-700 hover:to-blue-600 hover:shadow-2xl text-sm md:text-lg"
                onClick={() => handleSubPackageClick(subPkg.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer className="w-full mt-12" />
    </div>
  );
};

export default AllPackages;
