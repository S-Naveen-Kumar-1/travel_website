import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFzcLa3pjlUioZve0jUE7jzhpj8pblhm9xQ&s",
      description:
        "Enjoy thrilling treks in the stunning landscapes of Kashmir.",
    },
    {
      id: "winter-twilight-kashmir",
      name: "Winter Twilight Kashmir",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoKm0cmhMFLMN7o44d9h-dykRW3VoaoXYcg&s",
      description: "Explore Kashmir in winter with snow-covered beauty.",
    },
    {
      id: "honeymoon-special",
      name: "Honeymoon Special",
      days: 6,
      night: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTu6Ozy9TQwNeQ_kfsVQ-23-u373eY-ShRIA&s",
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

const packageNames = {
  kashmir: "Kashmir",
  jammu: "Jammu",
  ladakh: "Ladakh",
};

const SubPackages = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const subPackages = packages[packageId] || [];
  const packageName = packageNames[packageId] || "Destination"; // Default name if not found

  const handleSubPackageClick = (subPackageId) => {
    navigate(`/packages/${packageId}/${subPackageId}`);
  };

  return (
    <div className="mx-auto py-16 ">
      <h2
        className="text-5xl font-bold text-purple-800 mb-12 text-center"
        data-aos="fade-up"
      >
        {packageName} Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6">
        {subPackages.map((subPkg) => (
          <div
            key={subPkg.id}
            className="bg-white shadow-2xl rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            onClick={() => handleSubPackageClick(subPkg.id)}
          >
            <img
              src={subPkg.image}
              alt={subPkg.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-purple-900 mb-3">
                {subPkg.name}
              </h3>
              <p className="text-gray-800 mb-6">{subPkg.description}</p>
              <button className="bg-gradient-to-r from-green-600 to-blue-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:from-green-700 hover:to-blue-600 hover:shadow-2xl">
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

export default SubPackages;
