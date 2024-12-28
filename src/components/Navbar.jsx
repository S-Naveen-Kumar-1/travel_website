import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const heroHeight = document.getElementById("hero")?.clientHeight || 0;

    if (window.scrollY >= heroHeight - 100) {
      setIsScrolledPastHero(true);
    } else {
      setIsScrolledPastHero(false);
    }
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  bg-black bg-opacity-90 shadow-md p-[20px]`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-2xl lg:text-3xl font-bold text-orange-500 font-poppins cursor-pointer">
          Hamsafran Travels
        </h1>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden text-3xl text-orange-500 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu */}
        <div
          className={`md:flex md:items-center md:gap-6 fixed md:static top-0 right-0 left-0 bg-gray-800 md:bg-transparent w-full md:w-auto h-screen md:h-auto transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {/* Menu Items */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-gray-200 hover:text-orange-500 py-4 md:py-0 text-center md:text-left text-xl md:text-2xl lg:text-3xl cursor-pointer ${
                isActive ? "text-orange-500" : "text-gray-200"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-destinations"
            className={({ isActive }) =>
              `block text-gray-200 hover:text-orange-500 py-4 md:py-0 text-center md:text-left text-lg md:text-xl lg:text-2xl cursor-pointer ${
                isActive ? "text-orange-500" : "text-gray-200"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </NavLink>
        
          <NavLink
            to="/all-hotels"
            className={({ isActive }) =>
              `block text-gray-200 hover:text-orange-500 py-4 md:py-0 text-center md:text-left text-lg md:text-xl lg:text-2xl cursor-pointer ${
                isActive ? "text-orange-500" : "text-gray-200"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Hotels
          </NavLink>
          <NavLink
            to="/all-packages"
            className={({ isActive }) =>
              `block text-gray-200 hover:text-orange-500 py-4 md:py-0 text-center md:text-left text-lg md:text-xl lg:text-2xl cursor-pointer ${
                isActive ? "text-orange-500" : "text-gray-200"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Packages
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
