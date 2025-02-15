import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import packages from "../data/shopping/packages.json";
import {
  FaCalendarAlt,
  FaBed,
  FaShuttleVan,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaRoute,
  FaTint,
  FaTshirt,
  FaUserShield,
  FaSocks,
  FaUmbrella,
  FaHiking,
  FaFirstAid,
  FaSun,
  FaLightbulb,
} from "react-icons/fa";
import Footer from "../components/Footer";
import ItinerarySection from "../components/ItinerarySection";

const PackageDetails = () => {
  const { packageId, subPackageId } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isAutoSlide, setIsAutoSlide] = useState(true); // Flag to control auto-sliding
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
    const packageData = packages[packageId];
    if (packageData) {
      const subPackage = packageData.find((pkg) => pkg.id === subPackageId);
      setPackageDetails(subPackage);
      setImages(subPackage?.images || []); // Set images array for the package
    }
  }, [packageId, subPackageId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAutoSlide && images.length > 0) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000); // Change image every 3 seconds
    return () => clearTimeout(timer); // Cleanup timeout on component unmount or when switching slides
  }, [currentImageIndex, isAutoSlide, images]);

  if (!packageDetails) {
    return <div className="text-center text-xl text-gray-700">Loading...</div>;
  }
  const handleBookNowClick = (subPkg) => {
    setIsBookingFormVisible(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormVisible(false);
  };
  return (
    <div className="package-details py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-8">
          {packageDetails.name} {packageDetails.days}D / {packageDetails.night}N
        </h2>

        <div className="flex items-center space-x-4 mb-6 justify-center">
          <p className="text-2xl font-semibold text-purple-700">Price: </p>
          <p className="text-xl text-gray-800">
            ₹{packageDetails.price} Onwards
          </p>
        </div>
        {/* Book Now Button */}
        <button
          className="bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-purple-800 transition duration-300 mb-8"
          onClick={handleBookNowClick}
        >
          Book Now
        </button>
      </div>

      {/* Full-Width Image Slider */}
      {images.length > 0 && (
        <div className="relative mb-8 w-full">
          <img
            src={images[currentImageIndex]}
            alt={packageDetails.name}
            className="w-[80%] m-auto object-cover h-[300px] xl:h-[500px] rounded-lg shadow-lg" // Ensuring full width with rounded corners and shadow for a clean look
          />
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          {/* Package Details */}
          <p className="text-lg text-gray-700 mb-4">
            {packageDetails.detailedDescription}
          </p>

          <div className="space-y-6">
            {/* Package Information Section */}
            <div className="flex items-center space-x-4 mb-6">
              <FaMapMarkerAlt className="text-purple-700 text-2xl" />
              <p className="text-gray-800 text-xl">
                {packageDetails.description}
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <FaCalendarAlt className="text-purple-700 text-2xl" />
              <p className="text-gray-800 text-xl">
                {packageDetails.days} Days / {packageDetails.night} Nights
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <FaBed className="text-purple-700 text-2xl" />
              <p className="text-gray-800 text-xl">
                Accommodation: 3-Star Hotels/Houseboats
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <FaShuttleVan className="text-purple-700 text-2xl" />
              <p className="text-gray-800 text-xl">Transportation Included</p>
            </div>

            {/* Price Section */}

            {/* Itinerary Section */}
            <ItinerarySection itinerary={packageDetails.itinerary} />

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Inclusions
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageDetails.inclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 text-lg"
                  >
                    <FaCheckCircle className="text-green-600 text-xl mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Section */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Exclusions
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageDetails.exclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 text-lg"
                  >
                    <FaTimesCircle className="text-red-600 text-xl mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Essentials to Carry Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Important Things to Carry
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
                <li className="flex items-center">
                  <FaHiking className="text-purple-700 mr-2" /> A rucksack bag
                  and a day pack
                </li>
                <li className="flex items-center">
                  <FaTint className="text-purple-700 mr-2" /> 3-litre water
                  bladder or water bottle
                </li>
                <li className="flex items-center">
                  <FaTshirt className="text-purple-700 mr-2" /> Sun cap, woolen
                  cap, UV protected sunglasses
                </li>
                <li className="flex items-center">
                  <FaUserShield className="text-purple-700 mr-2" /> 1 cotton
                  long sleeves, 2 short sleeve t-shirts
                </li>
                <li className="flex items-center">
                  <FaUserShield className="text-purple-700 mr-2" /> 1 fleece
                  jacket, 1 thick down jacket, gloves
                </li>
                <li className="flex items-center">
                  <FaUserShield className="text-purple-700 mr-2" /> 2 long pants
                  (trek pants and cargo pants preferred)
                </li>
                <li className="flex items-center">
                  <FaSocks className="text-purple-700 mr-2" /> 4 sets of
                  undergarments, 2 pairs of socks
                </li>
                <li className="flex items-center">
                  <FaUmbrella className="text-purple-700 mr-2" /> Small towel,
                  rain jacket or poncho
                </li>
                <li className="flex items-center">
                  <FaHiking className="text-purple-700 mr-2" /> Waterproof
                  hiking boots, flip-flops/sandals
                </li>
                <li className="flex items-center">
                  <FaFirstAid className="text-purple-700 mr-2" /> Glucose
                  powder, medicines for headaches, altitude sickness
                </li>
                <li className="flex items-center">
                  <FaFirstAid className="text-purple-700 mr-2" /> Dettol,
                  bandages, cotton
                </li>
                <li className="flex items-center">
                  <FaSun className="text-purple-700 mr-2" /> Sunscreen (minimum
                  SPF40), lip balm, cold creams, body spray
                </li>
                <li className="flex items-center">
                  <FaLightbulb className="text-purple-700 mr-2" /> LED torch
                  light
                </li>
              </ul>
            </div>
            {/* Cancellation Policy */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Cancellation Policy
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-800 text-lg">
                  If a client cancels their booking 40 days or more prior to the
                  tour start date, a full refund of the deposit will be issued.
                </li>
                <li className="text-gray-800 text-lg">
                  If a client cancels their booking between 20 and 29 days prior
                  to the tour start date, 50% of the deposit will be refunded.
                </li>
                <li className="text-gray-800 text-lg">
                  If a client cancels their booking less than 15 days prior to
                  the tour start date, no refund will be issued.
                </li>
                <li className="text-gray-800 text-lg">
                  In the event that we have to cancel a tour due to
                  circumstances beyond our control (such as natural disasters,
                  political unrest, or terrorist activities), we will offer the
                  client the option to reschedule the tour or receive a full
                  refund of all monies paid.
                </li>
              </ul>
            </div>
            {/* More Info Section */}
            <div className="flex items-center space-x-2">
              <FaInfoCircle className="text-purple-700 text-2xl" />
              <p className="text-gray-800 text-lg">
                For more information, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Form Slide In */}
      {isBookingFormVisible && (
        <div
          className="fixed top-0 right-0 w-full md:w-1/3 bg-white p-8 shadow-xl z-50 transform transition-transform duration-500 ease-in-out"
          style={{
            transform: isBookingFormVisible
              ? "translateX(0)"
              : "translateX(100%)",
          }}
        >
          <h3 className="text-2xl font-bold text-center mb-4">Booking Form</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Any special request?"
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg"
              type="submit"
            >
              Submit Booking
            </button>
          </form>
          <button
            onClick={closeBookingForm}
            className="absolute top-2 right-2 text-xl text-red-600"
          >
            &times;
          </button>
        </div>
      )}
      <Footer className="w-full mt-12" />
    </div>
  );
};

export default PackageDetails;
