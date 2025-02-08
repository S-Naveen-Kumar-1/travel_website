import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import ShoppingItemForm from "./ShoppingItemForm";
import { Base_Url } from "../../config";

const ShoppingAdmin = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  // Fetch shopping items from API
  const fetchItems = async () => {
    try {
      const response = await axios.get(`${Base_Url}/shoppingItems`);
      setItems(response.data.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Handle add or update item
  const handleFormSubmit = async (itemData) => {
    try {
      if (editingItem) {
        // Update existing item
        await axios.put(`${Base_Url}/shoppingItems/${editingItem._id}`, itemData);
        setItems((prev) =>
          prev.map((item) =>
            item._id === editingItem._id ? { ...item, ...itemData } : item
          )
        );
        setEditingItem(null);
      } else {
        // Add new item
        const response = await axios.post(`${Base_Url}/shoppingItems`, itemData);
        setItems((prev) => [...prev, response.data.data]);
      }
    } catch (error) {
      console.error("Error saving item:", error);
    }
  };

  // Handle delete item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Base_Url}/shoppingItems/${id}`);
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Handle edit item
  const handleEdit = (item) => {
    setEditingItem(item);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Shopping Items</h1>
      <ShoppingItemForm onSubmit={handleFormSubmit} initialData={editingItem} />
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-2">Item List</h2>
        <ul>
          {items.map((item) => (
            <li key={item._id} className="mb-2 flex justify-between items-center">
              <div>
                <strong>{item.name}</strong> - ₹{item.price} ({item.unit}) - {item.category}
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(item)} className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  <FaPencilAlt className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(item._id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                  <FaTrashAlt className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingAdmin;
