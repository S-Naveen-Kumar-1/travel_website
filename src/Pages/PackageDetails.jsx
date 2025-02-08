import React from 'react';
import { useParams } from 'react-router-dom';
import PackageData from '../data/shopping/packages.json';

const PackageDetails = () => {
  const { id } = useParams(); // Retrieve the package id from the URL
  const selectedPackage = PackageData.find(pkg => pkg.id === parseInt(id));

  if (!selectedPackage) {
    return <div className="text-center text-xl font-semibold py-10">Package not found.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Main Package Image with Hover Effect */}
        <img
          src={selectedPackage.viewDetails.images[0]}
          alt={selectedPackage.title}
          className="w-full h-96 object-cover rounded-t-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
        />
        <div className="p-8 space-y-8 bg-white">

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-6 text-left">{selectedPackage.title}</h1>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">{selectedPackage.viewDetails.detailedDescription}</p>

          {/* Price and Booking Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
            <span className="text-4xl font-semibold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {selectedPackage.price}
            </span>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Book Now
            </button>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-3xl font-semibold text-blue-800 mb-4 text-left">Features:</h3>
            <ul className="text-gray-600 space-y-4">
              {selectedPackage.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="text-3xl font-semibold text-purple-800 mb-4 text-left">Itinerary:</h3>
            <ul className="text-gray-600 space-y-4">
              {selectedPackage.viewDetails.itinerary.map((day, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                  </svg>
                  <span className="text-lg">{day}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusions */}
          <div>
            <h3 className="text-3xl font-semibold text-green-800 mb-4 text-left">Inclusions:</h3>
            <ul className="text-gray-600 space-y-4">
              {selectedPackage.viewDetails.inclusions.map((inclusion, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <h3 className="text-3xl font-semibold text-red-800 mb-4 text-left">Exclusions:</h3>
            <ul className="text-gray-600 space-y-4">
              {selectedPackage.viewDetails.exclusions.map((exclusion, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-lg">{exclusion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel Details */}
          <div>
            <h3 className="text-3xl font-semibold text-blue-800 mb-4 text-left">Hotel Details:</h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>{selectedPackage.viewDetails.hotelDetails.name}</strong> (Rating: {selectedPackage.viewDetails.hotelDetails.rating} stars)
            </p>
            <ul className="text-gray-600 space-y-4">
              {selectedPackage.viewDetails.hotelDetails.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-left">Cancellation Policy:</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              You can cancel your booking up to 7 days before the start date for a full refund. Cancellations made within 7 days of the start date will incur a 50% cancellation fee. No refunds will be issued for cancellations made within 24 hours of the start date.
            </p>
          </div>

          {/* Customer Reviews */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-left">Customer Reviews:</h3>
            <div className="space-y-6">
              {selectedPackage.viewDetails.customerReviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <p className="font-semibold text-gray-800">{review.reviewer}</p>
                  <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
