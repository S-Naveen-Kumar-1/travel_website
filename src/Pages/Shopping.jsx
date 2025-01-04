import React, { useState } from "react";
import Footer from "../components/Footer";
import saffronImage from '../../src/assets/shopping/safroon.jpeg';
import Almonds from '../../src/assets/shopping/Almonds.jpeg';
import Anjoor from '../../src/assets/shopping/anjoor.jpeg';
import Raisins from '../../src/assets/shopping/raisins.jpeg';
import Walnut from '../../src/assets/shopping/walnut.jpeg';

const foodItems = [
  {
    id: 1,
    name: "Kashmiri Saffron",
    category: "Spices",
    price: 500,
    unit: "per gram",
    imageUrl: "https://via.placeholder.com/200?text=Saffron",
    path:saffronImage,
    description: "Premium Kashmiri saffron with a rich aroma and color.",
  },
  {
    id: 2,
    name: "Walnuts",
    category: "Dry Fruits",
    price: 300,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/200?text=Walnuts",
    path:Walnut,
    description: "Fresh and crunchy Kashmiri walnuts.",
  },
  {
    id: 3,
    name: "Almonds",
    category: "Dry Fruits",
    price: 400,
    unit: "per kg",
    path:Almonds,
    imageUrl: "https://via.placeholder.com/200?text=Almonds",
    description: "High-quality Kashmiri almonds.",
  },
  {
    id: 4,
    name: "Kashmiri Kehwa",
    category: "Beverages",
    price: 200,
    unit: "per pack",
    imageUrl: "https://via.placeholder.com/200?text=Kehwa",
    description: "Traditional Kashmiri kehwa tea mix.",
  },
  {
    id: 5,
    name: "Shirmal Bread",
    category: "Bakery",
    price: 150,
    unit: "per piece",
    imageUrl: "https://via.placeholder.com/200?text=Shirmal",
    description: "Soft and delicious Kashmiri shirmal bread.",
  },
  {
    id: 6,
    name: "Kashmiri Tandoori Roti",
    category: "Bakery",
    price: 50,
    unit: "per piece",
    imageUrl: "https://via.placeholder.com/200?text=Tandoori+Roti",
    description: "Soft and fluffy tandoori roti, perfect with curries.",
  },
  {
    id: 7,
    name: "Kashmiri Kulcha",
    category: "Bakery",
    price: 100,
    unit: "per piece",
    imageUrl: "https://via.placeholder.com/200?text=Kulcha",
    description:
      "A type of leavened bread, crispy and perfect for pairing with stews.",
  },
  {
    id: 8,
    name: "Kashmiri Phirni",
    category: "Desserts",
    price: 150,
    unit: "per serving",
    imageUrl: "https://via.placeholder.com/200?text=Phirni",
    description: "A creamy rice pudding flavored with cardamom and saffron.",
  },
  // Additional Beverages
  {
    id: 9,
    name: "Kashmiri Noon Chai",
    category: "Beverages",
    price: 150,
    unit: "per cup",
    imageUrl: "https://via.placeholder.com/200?text=Noon+Chai",
    description: "A salty pink tea, traditionally served in Kashmir.",
  },
  {
    id: 10,
    name: "Kashmiri Rose Sherbet",
    category: "Beverages",
    price: 120,
    unit: "per bottle",
    imageUrl: "https://via.placeholder.com/200?text=Rose+Sherbet",
    description: "A refreshing and aromatic rose-based drink.",
  },
  {
    id: 11,
    name: "Kashmiri Pomegranate Juice",
    category: "Beverages",
    price: 180,
    unit: "per bottle",
    imageUrl: "https://via.placeholder.com/200?text=Pomegranate+Juice",
    description: "Fresh and tangy pomegranate juice, a Kashmiri specialty.",
  },
  // Additional Dry Fruits
  {
    id: 12,
    name: "Kashmiri Dried Apricots",
    category: "Dry Fruits",
    price: 500,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/200?text=Dried+Apricots",
    description: "Sweet and tart dried apricots from the valleys of Kashmir.",
  },
  {
    id: 13,
    name: "Kashmiri Raisins",
    category: "Dry Fruits",
    price: 350,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/200?text=Raisins",
    path:Raisins,
    description: "Plump and juicy raisins grown in the Kashmir valley.",
  },
  {
    id: 14,
    name: "Kashmiri Cashews",
    category: "Dry Fruits",
    price: 600,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/200?text=Cashews",
    description: "Premium Kashmiri cashews, rich and buttery.",
  },
  // Additional Bakery Items
  {
    id: 15,
    name: "Kashmiri Sheermal",
    category: "Bakery",
    price: 120,
    unit: "per piece",
    imageUrl: "https://via.placeholder.com/200?text=Sheermal",
    description:
      "A soft, sweet bread, traditionally served with Kashmiri dishes.",
  },
  {
    id: 16,
    name: "Kashmiri Bakarkhani",
    category: "Bakery",
    price: 100,
    unit: "per piece",
    imageUrl: "https://via.placeholder.com/200?text=Bakarkhani",
    description: "A crispy, layered bread, often served with tea.",
  },
  {
    id: 17,
    name: "Kashmiri Methi Kebab",
    category: "Bakery",
    price: 250,
    unit: "per pack",
    imageUrl: "https://via.placeholder.com/200?text=Methi+Kebab",
    description: "A savory, spiced bread made with fenugreek leaves.",
  },
];

const categories = [
  { name: "All", imageUrl: "https://via.placeholder.com/50?text=All" },
  {
    name: "Dry Fruits",
    imageUrl: "https://via.placeholder.com/50?text=Dry+Fruits",
  },
  { name: "Spices", imageUrl: "https://via.placeholder.com/50?text=Spices" },
  {
    name: "Beverages",
    imageUrl: "https://via.placeholder.com/50?text=Beverages",
  },
  { name: "Bakery", imageUrl: "https://via.placeholder.com/50?text=Bakery" },
];

const ShoppingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("none");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredItems = foodItems
    .filter((item) => {
      return (
        (selectedCategory === "All" || item.category === selectedCategory) &&
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortOption === "low-to-high") return a.price - b.price;
      if (sortOption === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-6 text-center shadow-lg relative">
        <h1 className="text-4xl font-bold">Kashmiri Food Shop</h1>
        <p className="text-lg mt-2">Explore the authentic flavors of Kashmir</p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          className="sm:hidden p-4 bg-green-500 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close Categories" : "Open Categories"}
        </button>

        {/* Sidebar */}
        <div
          className={`w-full sm:w-1/4 p-4 bg-white shadow overflow-y-auto sm:block ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category.name}
                className={`flex items-center cursor-pointer p-3 rounded hover:bg-green-100 ${
                  selectedCategory === category.name
                    ? "bg-green-200 font-bold"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category.name);
                  if (isSidebarOpen) setIsSidebarOpen(false); // Close sidebar on category selection
                }}
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-10 h-10 mr-4 rounded-full"
                />
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Section */}
        <div
          className={`w-full sm:w-3/4 p-6 max-h-screen overflow-y-auto ${
            isSidebarOpen ? "sm:w-3/4" : "w-full"
          }`}
        >
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row justify-between mb-6 items-center space-y-4 sm:space-y-0">
            <input
              type="text"
              placeholder="Search for food items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-3 rounded w-full sm:w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="none">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>

          {/* Food Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 relative flex flex-col justify-between"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={item.path|| item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-lg font-semibold mt-2 text-green-600">
                      ₹{item.price} {item.unit}
                    </p>
                  </div>
                  <div className="p-4">
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full">
                      Add to Cart
                    </button>
                  </div>
                  {hoveredItem === item.id && (
                    <div className="absolute top-0 left-0 w-full bg-black bg-opacity-75 text-white p-4 text-sm rounded-t-lg flex justify-center items-center">
                      <p className="text-center">{item.description}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No items found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
