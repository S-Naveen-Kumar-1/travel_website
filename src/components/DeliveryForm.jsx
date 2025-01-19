import React, { useState } from "react";
import PaymentMethods from "./PaymentMethods";

const DeliveryForm = ({ onSubmit }) => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    whatsapp: false, // Added field for WhatsApp opt-in
    paymentMethod: "", // New field for payment method
  });
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMethod: "", // New error field for payment method
  });
  const [isPaymentStep, setIsPaymentStep] = useState(false); // State to toggle between delivery details and payment method

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Clear the error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Allow only numeric values
    if (/^[0-9]*$/.test(value)) {
      setDeliveryDetails((prevDetails) => ({
        ...prevDetails,
        phone: value,
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      whatsapp: checked,
    }));
  };

  const handlePaymentChange = (e) => {
    const { value } = e.target;
    setDeliveryDetails((prevDetails) => ({
      ...prevDetails,
      paymentMethod: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!deliveryDetails.name) {
      newErrors.name = "Full name is required.";
    }

    // Address validation
    if (!deliveryDetails.address) {
      newErrors.address = "Address is required.";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!deliveryDetails.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(deliveryDetails.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Payment method validation
    if (!deliveryDetails.paymentMethod && isPaymentStep) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isPaymentStep) {
        // If we're on the payment step, submit the order
        onSubmit(deliveryDetails);
      } else {
        // Otherwise, move to the payment step
        setIsPaymentStep(true);
      }
    }
  };

  return (
    <div className="p-4 border-t">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {isPaymentStep ? "Select Payment Method" : "Enter Delivery Details"}
      </h3>
      <form onSubmit={handleSubmit}>
        {!isPaymentStep ? (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={deliveryDetails.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={deliveryDetails.address}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={deliveryDetails.phone}
                onChange={handlePhoneChange} // Custom phone change handler
                required
                maxLength="10" // Restrict to 10 digits
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={deliveryDetails.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="whatsapp"
                  checked={deliveryDetails.whatsapp}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-green-500"
                />
                <span className="ml-2 text-sm font-semibold text-gray-700">
                  I want to receive updates via WhatsApp
                </span>
              </label>
            </div>
          </>
        ) : (
          <>
           <PaymentMethods/>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-bold transition duration-200"
        >
          {isPaymentStep ? "Confirm Order" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
