import React, { useState, useEffect } from "react";

const HotelForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    images: [],
    price: "",
    features: [],
    destination: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        images: initialData.images || [],
        price: initialData.price || "",
        features: initialData.features || [],
        destination: initialData.destination || "",
      });
    } else {
      setFormData({
        name: "",
        images: [],
        price: "",
        features: [],
        destination: "",
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (name, index, value) => {
    setFormData((prev) => {
      const updatedArray = [...prev[name]];
      updatedArray[index] = value;
      return { ...prev, [name]: updatedArray };
    });
  };

  const handleAddItem = (name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: [...prev[name], ""],
    }));
  };

  const handleRemoveItem = (name, index) => {
    setFormData((prev) => {
      const updatedArray = [...prev[name]];
      updatedArray.splice(index, 1);
      return { ...prev, [name]: updatedArray };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      images: [],
      price: "",
      features: [],
      destination: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add/Edit Hotel
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hotel Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (per night in ₹)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Images
        </label>
        {formData.images.map((image, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={image}
              onChange={(e) =>
                handleArrayChange("images", index, e.target.value)
              }
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveItem("images", index)}
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("images")}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
        >
          Add Image
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Features
        </label>
        {formData.features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={feature}
              onChange={(e) =>
                handleArrayChange("features", index, e.target.value)
              }
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter feature"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveItem("features", index)}
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddItem("features")}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
        >
          Add Feature
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Destination
        </label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default HotelForm;
