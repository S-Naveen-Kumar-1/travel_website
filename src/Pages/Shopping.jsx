import React, { useState } from "react";
import Footer from "../components/Footer";
import saffronImage from '../../src/assets/shopping/safroon.jpeg';
import Almonds from '../../src/assets/shopping/Almonds.jpeg';
import Anjoor from '../../src/assets/shopping/anjoor.jpeg';
import Raisins from '../../src/assets/shopping/raisins.jpeg';
import Walnut from '../../src/assets/shopping/walnut.jpeg';
import driedKiwi from '../../src/assets/shopping/driedKiwi.jpeg';
import pista from '../../src/assets/shopping/pista.jpeg';
import Shilajit from '../../src/assets/shopping/Shilajit.jpeg';
import Cart from "../components/Cart";
import { MdOutlineShoppingCart } from "react-icons/md";

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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_TDNe0UJnTKJYMgeMe2oQIOMUrTKVSk4uA&s",
    description: "Traditional Kashmiri kehwa tea mix.",
  },
  {
    id: 5,
    name: "Shirmal Bread",
    category: "Bakery",
    price: 150,
    unit: "per piece",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6e7DqeyS8z8bZDOzP6QJfu0dhaPUaUinzQ&s",
    description: "Soft and delicious Kashmiri shirmal bread.",
  },
  {
    id: 19,
    name: "Kashmiri Shilajit",
    category: "Health Supplements",
    price: 1000,
    unit: "per 10 grams",
    imageUrl: "https://via.placeholder.com/200?text=Shilajit", // Replace with actual image URL if available
    description: "Pure and natural Kashmiri Shilajit, known for its health benefits.",
    path:Shilajit

  },
  {
    id: 6,
    name: "Kashmiri Tandoori Roti",
    category: "Bakery",
    price: 50,
    unit: "per piece",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS9FyIG0G7IKlyljCAG4gI5hJ8jat8yMjsQ&s",
    description: "Soft and fluffy tandoori roti, perfect with curries.",
  
  },
  {
    id: 7,
    name: "Kashmiri Kulcha",
    category: "Bakery",
    price: 100,
    unit: "per piece",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQLKm6rahJROq6nhsmWypypOjJbTPPVqsug&s",
    description:
      "A type of leavened bread, crispy and perfect for pairing with stews.",
  },
  {
    id: 8,
    name: "Kashmiri Phirni",
    category: "Desserts",
    price: 150,
    unit: "per serving",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVjNL2wnesUI67BX9KFY3MPVXzRkF8v6jKg&s",
    description: "A creamy rice pudding flavored with cardamom and saffron.",
  },
  // Additional Beverages
  {
    id: 9,
    name: "Kashmiri Noon Chai",
    category: "Beverages",
    price: 150,
    unit: "per cup",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqpVi-3dU-bhSVjmWGU2GWijbeNBMQnchQw&s",
    description: "A salty pink tea, traditionally served in Kashmir.",
  },
  {
    id: 10,
    name: "Kashmiri Rose Sherbet",
    category: "Beverages",
    price: 120,
    unit: "per bottle",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfgNCvNgnTDGBEI7zNUFwVV4-kdIippGPjw&s",
    description: "A refreshing and aromatic rose-based drink.",
  },
 
  // Additional Dry Fruits
  {
    id: 12,
    name: "Kashmiri Dried Apricots",
    category: "Dry Fruits",
    price: 500,
    unit: "per kg",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjfpHsbDJ89EDQXmSTAdMIRNQDX43UCzsrg&s",
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTeFALaca0uR7pSu7DF4-q1DOA73QbEiaJQ&s",
    description: "Premium Kashmiri cashews, rich and buttery.",
  },
  // Additional Bakery Items
  {
    id: 15,
    name: "Kashmiri Sheermal",
    category: "Bakery",
    price: 120,
    unit: "per piece",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZnzG5sNNLg1y5eKSU7HFwBzYcS17NdpYew&s",
    description:
      "A soft, sweet bread, traditionally served with Kashmiri dishes.",
  },
  {
    id: 16,
    name: "Kashmiri Bakarkhani",
    category: "Bakery",
    price: 100,
    unit: "per piece",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILLxngWfi269kxojVmQzebIOffIcc2qbG3Q&s",
    description: "A crispy, layered bread, often served with tea.",
  },
  {
    id: 17,
    name: "Dried Kiwi",
    category: "Dry Fruits",
    price: 550,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/200?text=Dried+Kiwi", 
    description: "Sweet and tangy dried kiwi, a healthy and delicious snack.",
    path:driedKiwi,

  },
  {
    id: 18,
    name: "Pista",
    category: "Dry Fruits",
    price: 600,
    unit: "per kg",
    imageUrl: "https://via.placeholder.com/200?text=Pista", 
    description: "Premium quality pistachios, crunchy and rich in flavor.",
    path:pista,

  },

];

const categories = [
  { name: "All", imageUrl: "https://via.placeholder.com/50?text=All" },
  {
    name: "Dry Fruits",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzATw3m0CM6USV8PkHuACjioMo7jPM88oR0g&s",
  },
  { name: "Spices", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtE0K1aSU2wKTQ30aRByFwY9WHFeZZc91IQ&s" },
  {
    name: "Beverages",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvLIG5GBe1PT2psfMHFvCGw6HhZd60J96EQ&s",
  },
  { name: "Bakery", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNSG8hFcA-LpQHyMPiYBEmUc3PC21mbhwMg&s" },
  {
    name: "Health Supplements",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHIj0lPRMTipJCc17vDnWDD04K3wtISKRsA&s", 
  },
];



const ShoppingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("none");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id)
    );
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-6 text-center shadow-lg relative">
        <h1 className="text-4xl font-bold">Kashmiri Food Shop</h1>
        <p className="text-lg mt-2">Explore the authentic flavors of Kashmir</p>
     
<button
  className="absolute top-6 right-6 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
  onClick={() => setIsCartOpen(!isCartOpen)}
>
  <MdOutlineShoppingCart className="h-6 w-6 mr-2" /> {/* Icon with margin-right */}
{cart.length>0&&  <span className="text-lg absolute top-0 right-2 font-bold">
    {cart.reduce((total, item) => total + item.quantity, 0)}
  </span> }
</button>
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
        <div className="w-full sm:w-3/4 p-6 max-h-screen overflow-y-auto">
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
                >
                  <img
                    src={item.path || item.imageUrl}
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
                    <button
                      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No items found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity} 
        setCart={setCart}
      />

      <Footer />
    </div>
  );
};

export default ShoppingPage;
