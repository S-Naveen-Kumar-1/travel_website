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
  FaRoute, // Icon for itinerary
} from "react-icons/fa"; // Additional icons for inclusions/exclusions
import Footer from "../components/Footer";

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
          {packageDetails.name}
        </h2>
        <div className="flex items-center space-x-4 mb-6 justify-center">
          <p className="text-2xl font-semibold text-purple-700">Price: </p>
          <p className="text-xl text-gray-800">₹{packageDetails.price} Onwards</p>
        </div>
        {/* Book Now Button */}
        <button className="bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-purple-800 transition duration-300 mb-8" onClick={handleBookNowClick}>
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
              <p className="text-gray-800 text-xl">{packageDetails.description}</p>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <FaCalendarAlt className="text-purple-700 text-2xl" />
              <p className="text-gray-800 text-xl">{packageDetails.itinerary.length} Days</p>
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
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Itinerary
              </h3>
              <ul className="list-disc pl-6">
                {packageDetails.itinerary.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-800 mb-2">
                    <FaRoute className="text-purple-700 text-xl mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions Section with Icons */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Inclusions
              </h3>
              <ul className="space-y-4">
                {packageDetails.inclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 text-lg"
                  >
                    <FaCheckCircle className="text-green-600 text-xl mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Section with Icons */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Exclusions
              </h3>
              <ul className="space-y-4">
                {packageDetails.exclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 text-lg"
                  >
                    <FaTimesCircle className="text-red-600 text-xl mr-2" />
                    {item}
                  </li>
                ))}
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
        <div className="fixed top-0 right-0 w-full md:w-1/3 bg-white p-8 shadow-xl z-50 transform transition-transform duration-500 ease-in-out" style={{ transform: isBookingFormVisible ? 'translateX(0)' : 'translateX(100%)' }}>
          <h3 className="text-2xl font-bold text-center mb-4">Booking Form</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your full name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter your phone number" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Any special request?" />
            </div>
            <button className="w-full bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg" type="submit">
              Submit Booking
            </button>
          </form>
          <button onClick={closeBookingForm} className="absolute top-2 right-2 text-xl text-red-600">&times;</button>
        </div>
      )}
      <Footer className="w-full mt-12" />
    </div>
  );
};

export default PackageDetails;
