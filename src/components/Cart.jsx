import React, { useState } from "react";
import DeliveryForm from "./DeliveryForm"; // Import the DeliveryForm component

const Cart = ({ cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity,setCart }) => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle between cart and form
  const [orderDetails, setOrderDetails] = useState(null); // State to store order details

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleFormSubmit = (details) => {
    setOrderDetails(details);
    alert("Order placed successfully!");
    setIsFormVisible(false);
    setIsCartOpen(false)
    setCart([])
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(true); 
  };

  const handleCloseCart=()=>{
    setIsCartOpen(false)
    setIsFormVisible(false);
  }
  return (
    <div
      className={`fixed top-[100px] right-0 bg-white shadow-lg transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-80`}
    >
      {/* Cart Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <button
          className="text-red-500 font-bold hover:text-red-600"
          onClick={handleCloseCart}
        >
          Close
        </button>
      </div>

      {/* Conditional Rendering of Cart Items or Delivery Form */}
      {isFormVisible ? (
        <DeliveryForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.path || item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <span className="text-lg font-semibold">-</span>
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <span className="text-lg font-semibold">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="text-red-500 font-bold hover:text-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Checkout Section */}
      {!isFormVisible && cart.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg text-gray-800">Total:</span>
            <span className="font-bold text-lg text-green-600">₹{calculateTotal()}</span>
          </div>
          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 font-bold transition duration-200"
            onClick={toggleFormVisibility} // Toggle visibility when clicking Buy Now
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
