import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/HumsafranLogo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 left-0 w-full z-50 bg-[#012a5e] shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Hamsafran Travels Logo" className="h-12 w-auto md:h-16" />
          </NavLink>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="md:hidden text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Menu */}
          <div
            className={`md:flex md:items-center md:gap-6 fixed md:static top-0 right-0 left-0 bg-[#012a5e] md:bg-transparent w-full md:w-auto h-screen md:h-auto transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }`}
          >
            {/* Menu Items */}
            {[
              { path: "/", name: "Home" },
              { path: "/all-destinations", name: "Destinations" },
              { path: "/all-hotels", name: "Hotels" },
              { path: "/all-packages", name: "Packages" },
              { path: "/shopping", name: "Shopping" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block text-white hover:text-[#facc15] py-4 md:py-0 text-center md:text-left text-lg md:text-xl lg:text-2xl cursor-pointer ${
                    isActive ? "text-[#facc15]" : "text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
