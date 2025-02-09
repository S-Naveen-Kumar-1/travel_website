import React from 'react';
import QR from "../../src/assets/QRCode.png";

const PaymentDetails = () => {
  return (
    <div className="container mx-auto ">
      <div className="bg-white shadow-xl rounded-lg ">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Payment Details</h2>
        
        {/* Bank Transfer Details */}
        <div className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Bank Transfer</h3>
          <p className="text-lg text-gray-700">You can make payments directly to our bank account using the following details:</p>
          <ul className="mt-4 text-lg text-gray-600">
            <li><strong>Bank Name:</strong> ABC Bank</li>
            <li><strong>Account Name:</strong> Hamsafran Travels</li>
            <li><strong>Account Number:</strong> 1234567890</li>
            <li><strong>IFSC Code:</strong> ABCD0123456</li>
            <li><strong>Branch:</strong> Srinagar, Kashmir</li>
          </ul>
        </div>
        
        {/* UPI Payment Details */}
        <div className="mb-8 bg-green-50 p-6 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">UPI Payment</h3>
          <p className="text-lg text-gray-700">For instant payments, you can use UPI:</p>
          <ul className="mt-4 text-lg text-gray-600">
            <li><strong>UPI ID:</strong> hamsafran@upi</li>
            <li><strong>QR Code:</strong> (Scan below to pay)</li>
          </ul>
          <img src={QR} alt="UPI QR Code" className="mt-4 w-40 h-40 m-auto" />
        </div>
        
        {/* Payment Terms and Conditions */}
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Payment Terms & Conditions</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>A minimum of <strong>30% of the total amount</strong> must be paid at the time of booking to confirm the reservation.</li>
            <li>The remaining <strong>70% must be paid on the second day</strong> of the trip.</li>
            <li>All payments should be made through the provided bank details or UPI ID.</li>
            <li>Refunds are subject to our cancellation policy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
