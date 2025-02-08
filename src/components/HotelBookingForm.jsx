import React, { useState } from 'react';

const BookingForm = ({ isOpen, onClose, selectedHotel }) => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  // State for validation errors
  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: '',
  });

  // Validation function
  const validateForm = () => {
    const errors = {
      email: '',
      phone: '',
    };

    // Email validation
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === '');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful form submission
      alert('Booking Successful!');
      console.log('Form submitted successfully!');

      // Optionally, close the form
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-[50px] rounded-[20px] p-4 right-0 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-80 sm:w-96 md:w-[400px]`}
      onClick={onClose}
    >
      <div
        className={`fixed top-[50px] rounded-[20px] p-4 right-0 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-80 sm:w-96 md:w-[400px]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Book Your Stay</h2>

        {/* Hotel Info */}
        {selectedHotel && (
          <div className="mb-6 px-4">
            <h3 className="text-xl font-semibold text-gray-800">{selectedHotel.name}</h3>
            <p className="text-gray-600">{selectedHotel.destination}</p>
            <p className="text-lg font-bold text-blue-600">{selectedHotel.price}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 pb-6">
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg text-gray-600">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
          </div>

          {/* WhatsApp Updates Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="whatsapp-updates"
              checked={whatsappUpdates}
              onChange={() => setWhatsappUpdates(!whatsappUpdates)}
              className="mr-2"
            />
            <label htmlFor="whatsapp-updates" className="text-sm text-gray-600">
              I would like to receive updates via WhatsApp
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
