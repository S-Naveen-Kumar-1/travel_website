import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/HamsafranLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: false });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // **Reinitialize AOS to trigger animations every time menu opens**
    if (!isOpen) {
      setTimeout(() => AOS.refreshHard(), 50);
    }
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

          {/* Toggle Button (Mobile) */}
          <div
            className="md:hidden text-3xl text-white cursor-pointer z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Menu (Forces re-render when isOpen changes) */}
          <div
            key={isOpen} // This forces re-mount of the menu when toggled
            className={`fixed md:static top-0 right-0 w-3/4 md:w-auto h-screen md:h-auto bg-[#012a5e] md:bg-transparent transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            } shadow-lg md:shadow-none flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-0`}
          >
            {/* Menu Items (Sequential Animation) */}
            {[
              { path: "/", name: "Home" },
              { path: "/all-destinations", name: "Destinations" },
              { path: "/all-hotels", name: "Hotels" },
              { path: "/all-packages", name: "Packages" },
              { path: "/shopping", name: "Shopping" },
            ].map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block text-white hover:text-[#facc15] py-4 md:py-0 text-center md:text-left text-lg md:text-xl lg:text-2xl cursor-pointer transition-all duration-300 ${
                    isActive ? "text-[#facc15]" : "text-white"
                  }`
                }
                data-aos="fade-up"
                data-aos-delay={index * 300} // One-by-one animation
                data-aos-duration="600"
                data-aos-anchor-placement="top-bottom"
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
