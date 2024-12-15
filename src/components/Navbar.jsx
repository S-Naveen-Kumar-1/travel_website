import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav $isScrolledPastHero={isScrolledPastHero}>
      <Logo>Hamsafran Travels</Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu $isOpen={isOpen}>
        <ScrollLink to="home" smooth={true} duration={800}>
          <MenuItem>Home</MenuItem>
        </ScrollLink>
        <ScrollLink to="destinations" smooth={true} duration={800}>
          <MenuItem>Destinations</MenuItem>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={800}>
          <MenuItem>About</MenuItem>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={800}>
          <MenuItem>Contact</MenuItem>
        </ScrollLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

// Styled Components

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ $isScrolledPastHero }) =>
    $isScrolledPastHero ? "rgba(0, 0, 0, 0.9)" : "transparent"};
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: ${({ $isScrolledPastHero }) =>
    $isScrolledPastHero ? "0 4px 6px rgba(0, 0, 0, 0.3)" : "none"};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #ff5733;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  color: #ff5733;
  cursor: pointer;
  margin-right: 30px;


  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-right: 100px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    background-color: #1e293b;
    width: 100%;
    height: 100vh;
    justify-content: center;
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 1001;
  }
`;

const MenuItem = styled.div`
  color: #f1f5f9;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff5733;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;
