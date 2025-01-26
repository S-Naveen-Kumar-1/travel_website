import React, { useState } from "react";

const BookingForm = ({ group, onClose, isOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    // Name validation: Should not be empty and should not contain numbers or special characters
    if (!name) {
      newErrors.name = "Full Name is required";
    } else if (/[^a-zA-Z\s]/.test(name)) {
      newErrors.name = "Full Name should only contain letters and spaces";
    }

    // Email validation: Should be a valid email format
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email is required";
    }

    // Phone validation: Should only contain numbers and be exactly 10 digits
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Travel Date validation: Should not be empty
    if (!travelDate) {
      newErrors.travelDate = "Travel Date is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Submit the form if no errors
    alert(`Booking details for ${group.groupName}: ${name}, ${email}, ${phone}, ${message}, Travel Date: ${travelDate}, WhatsApp Updates: ${whatsappUpdates}`);
    onClose(); // Close the form after submission
  };

  return (
    <div
      className={`fixed top-[100px] rounded-[20px] p-4 right-0 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-full sm:w-96 md:w-[400px]`}
    >
      <div className="bg-white w-full p-6 transform transition-all duration-500 ease-in-out">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Book Group: {group.groupName}</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="relative mb-6">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-3 text-gray-600 text-sm transition-all duration-200 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-[0.1rem] peer-focus:text-sm peer-focus:text-blue-600"
            >
              Full Name
            </label>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-3 text-gray-600 text-sm transition-all duration-200 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-[0.1rem]  peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="relative mb-6">
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} // Allow only numeric input
              className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute left-3 -top-3 text-gray-600 text-sm transition-all duration-200 ease-in-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-[0.1rem]  peer-focus:text-sm peer-focus:text-blue-600"
            >
              Phone Number
            </label>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Travel Date */}
          <div className="relative mb-6">
            <input
              type="date"
              id="travelDate"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
           
            {errors.travelDate && <p className="text-red-500 text-sm">{errors.travelDate}</p>}
          </div>

          {/* WhatsApp Updates Checkbox */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={whatsappUpdates}
                onChange={(e) => setWhatsappUpdates(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm font-semibold text-gray-700">
                I want to receive updates via WhatsApp
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
