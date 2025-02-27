import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // If using react-icons

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace the number below with your own WhatsApp number
    const phoneNumber = '1234567890'; // Add your phone number
    const message = 'Hello, I have a query about the Travel Packages!';
    const whatsappURL = `https://wa.me/${+919596319497}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
      style={{ zIndex: 1000 }}
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
