import React, { useState } from "react";

const PaymentMethods = ({ onPaymentSuccess, onPaymentFailure }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDummyPayment = (method) => {
    setIsProcessing(true);

    // Simulate a payment process (Success after 2 seconds)
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% chance of success
      setIsProcessing(false);

      if (isSuccess) {
        alert(`Payment successful using ${method}`);
        onPaymentSuccess({ method });
      } else {
        alert(`Payment failed using ${method}`);
        onPaymentFailure();
      }
    }, 2000); // Simulate payment processing delay
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Payment Method</h3>
      <div className="mb-4">
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 font-bold transition duration-200"
          onClick={() => handleDummyPayment("Dummy Credit Card")}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay with Dummy Credit Card"}
        </button>
      </div>
      <div className="mb-4">
        <button
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 font-bold transition duration-200"
          onClick={() => handleDummyPayment("Dummy PayPal")}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay with Dummy PayPal"}
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
