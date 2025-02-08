import React, { useState, useEffect } from "react";

const ShoppingItemForm = ({ onSubmit, initialData = null }) => {
  const categories = [
    "Dry Fruits",
    "Spices",
    "Beverages",
    "Bakery",
    "Health Supplements",
  ];

  const unitOptions = [
    "Per Grams",
    "Per Kg",
    "Per Piece",
    "Per Bottle",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    unit: "",
    customUnit: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        category: initialData.category || "",
        price: initialData.price || "",
        unit: initialData.unit || "",
        customUnit: initialData.unit && !unitOptions.includes(initialData.unit) ? initialData.unit : "",
        imageUrl: initialData.imageUrl || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      unit: formData.unit === "Other" ? formData.customUnit : formData.unit,
    };
    onSubmit(finalData);
    setFormData({
      name: "",
      category: "",
      price: "",
      unit: "",
      customUnit: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add/Edit Shopping Item
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
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
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (₹)
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Unit
          </label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Unit</option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {formData.unit === "Other" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custom Unit
            </label>
            <input
              type="text"
              name="customUnit"
              value={formData.customUnit}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter custom unit"
              required
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
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

export default ShoppingItemForm;
