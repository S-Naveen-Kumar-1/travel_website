import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const packages = [
  {
    id: 'kashmir',
    title: 'Kashmir',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0k1bkYPZaSAzIcY16WheuD_1GovkGdoWww&s',
    description: 'Explore the beauty of Kashmir with our special travel packages.',
  },
  {
    id: 'jammu',
    title: 'Jammu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrytvLpDBdvTA1cNxA0DN19JEKeJfr4aA_gw&s',
    description: 'Experience the spiritual and natural wonders of Jammu.',
  },
  {
    id: 'ladakh',
    title: 'Ladakh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFQaMw7QEOxTMhfZ4VAjo-RzlAVVAZ9VyMQ&s',
    description: 'Embark on an adventure to the stunning landscapes of Ladakh.',
  },
];

const PackagesHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePackageClick = (id) => {
    navigate(`/packages/${id}`);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-5xl font-bold text-purple-800 mb-12 text-center" data-aos="fade-up">Popular Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-gray-100 shadow-2xl rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            onClick={() => handlePackageClick(pkg.id)}
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-72 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-purple-900 mb-3">{pkg.title}</h3>
              <p className="text-gray-800 mb-6">{pkg.description}</p>
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-teal-600 hover:shadow-2xl">
                View Packages
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesHomePage;
