import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-white rounded-lg p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We are a leading travel agency dedicated to providing the best travel experiences to our customers. Our goal is to help you explore beautiful destinations with the utmost comfort and convenience.
        </p>
        <Link to="/about-us" className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
