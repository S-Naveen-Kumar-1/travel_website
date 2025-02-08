import React from 'react';
import img1 from "../../src/assets/img1.jpg";
import img2 from "../../src/assets/img2.jpg";
import img3 from "../../src/assets/img3.JPG";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-white p-8 shadow-lg rounded-lg">

        {/* About Us Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>

        {/* Vision Section */}
        <div className="mb-8 bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600">
            Our vision is to be the most trusted and preferred travel agency, providing exceptional and personalized travel experiences that create lifelong memories.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-8 bg-gradient-to-r from-green-200 to-green-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600">
            We are committed to delivering high-quality travel services that meet the diverse needs of our clients. We aim to provide safe, reliable, and unforgettable experiences while maintaining the highest standards of service.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-8 bg-gradient-to-r from-yellow-200 to-yellow-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li><strong>Integrity:</strong> We operate with transparency and honesty in all our dealings.</li>
            <li><strong>Customer-Centric:</strong> Our customers are at the heart of everything we do.</li>
            <li><strong>Excellence:</strong> We strive to exceed expectations with exceptional service.</li>
            <li><strong>Innovation:</strong> We embrace creativity to deliver unique and memorable experiences.</li>
          </ul>
        </div>

        {/* How We Provide Service Section */}
        <div className="mb-8 bg-gradient-to-r from-purple-200 to-purple-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">How We Provide Service</h3>
          <p className="text-lg text-gray-600">
            We focus on providing seamless travel experiences from start to finish. Our expert team works tirelessly to ensure that each journey is customized to meet the unique preferences and needs of our clients.
          </p>
        </div>

        {/* How We Take Care of Customers Section */}
        <div className="mb-8 bg-gradient-to-r from-red-200 to-red-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">How We Take Care of Customers</h3>
          <p className="text-lg text-gray-600">
            We prioritize customer satisfaction by offering round-the-clock support, personalized assistance, and ensuring that each journey is comfortable and stress-free. Our team is always available to address any queries or concerns.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={img1} alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={img2} alt="Gallery 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src={img3} alt="Gallery 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mb-8 bg-gradient-to-r from-teal-200 to-teal-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Additional Information</h3>
          <p className="text-lg text-gray-600">
            We pride ourselves on building long-lasting relationships with our clients. Our team ensures a smooth journey with the highest standards of service.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
