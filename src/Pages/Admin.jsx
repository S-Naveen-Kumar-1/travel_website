import React, { useState } from "react";
import Hotel from "../components/admin/Hotel";
import AdminShoppingPanel from "../components/admin/ShoppingItems";
import Login from "../components/admin/Login";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Hotels");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "Hotels":
        return <Hotel />;
      case "Destinations":
        return <div>Manage Destinations</div>;
      case "Packages":
        return <div>Manage Packages</div>;
      case "Shopping":
        return <AdminShoppingPanel />;
      default:
        return <div>Welcome to the Admin Panel</div>;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen">
    
      <div
        className={`w-1/4 md:w-1/6 bg-gray-800 text-white flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "hidden lg:block" : "hidden lg:block"
        }`}
      >
        <div className="p-4 text-xl font-bold border-b border-gray-700 flex justify-between items-center">
          Admin Panel
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Open"}
          </button>
        </div>
        <ul className="flex-grow">
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${
              selectedSection === "Hotels" ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelectedSection("Hotels")}
          >
            Hotels
          </li>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${
              selectedSection === "Destinations" ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelectedSection("Destinations")}
          >
            Destinations
          </li>
          <li
            className={`p-4 cursor-pointer hover:bg-gray-700 ${
              selectedSection === "Shopping" ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelectedSection("Shopping")}
          >
            Shopping List
          </li>
        </ul>
        <div className="p-4 border-t border-gray-700 text-sm">
          © 2025 Admin Panel
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 overflow-auto">
        {/* Mobile Navigation */}
        <div className="lg:hidden flex flex-wrap justify-between bg-gray-800 text-white">
          <button
            className={`sm:w-auto px-4 py-2 ${
              selectedSection === "Hotels" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedSection("Hotels")}
          >
            Hotels
          </button>
          <button
            className={`sm:w-auto px-4 py-2 ${
              selectedSection === "Destinations"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedSection("Destinations")}
          >
            Destinations
          </button>
          <button
            className={`sm:w-auto px-4 py-2 ${
              selectedSection === "Packages"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedSection("Packages")}
          >
            Packages
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
