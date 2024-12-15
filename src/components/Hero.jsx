import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroSection>
        <Content>
          <Title>Explore the Beauty of Kashmir</Title>
          <Description>
            Discover breathtaking landscapes, serene lakes, and pristine meadows.
          </Description>
        </Content>

        {/* Search Input Box at the bottom */}
        <SearchBox>
          <SearchInput>
            <Dropdown>
              <option value="">Select Destination</option>
              <option value="Srinagar">Srinagar</option>
              <option value="Gulmarg">Gulmarg</option>
              <option value="Pahalgam">Pahalgam</option>
              <option value="Leh">Leh</option>
            </Dropdown>
            <DateInput type="date" />
            <NumberInput type="number" min="1" max="10" placeholder="Number of Persons" />
            <SearchButton>Book</SearchButton>
          </SearchInput>
        </SearchBox>
      </HeroSection>
    </HeroContainer>
  );
};

export default Hero;

// Styled Components

const HeroContainer = styled.div`
  position: relative;
  height: 100vh; /* Full screen */
  overflow: hidden;
  background-image: url('https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQD4_UDQcdSgY1XdUJSqfHKkI4WJsYSPaJdIkJuoXoL1gNOO6d0yMwTap3-yUnWX3QdUIo70rjUbVIqYqdqViJaHVgleZsaP62lAOcwUA');
  background-size: cover;
  background-position: center;
`;

const HeroSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically centers content */
  align-items: center; /* Horizontally centers content */
  color: #fff;
  text-align: center;
  padding: 2rem;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  margin-bottom: 3rem; /* Space for the search box */
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 5rem; /* Increase space for mobile */
  }

  @media (max-width: 425px) {
    margin-bottom: 6rem; /* Increase space for very small screens */
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 3rem; /* Add extra space below the text */
  }

  @media (max-width: 425px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
    margin-bottom: 4rem; /* Increase space for very small screens */
  }
`;

const SearchBox = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    bottom: 2rem; /* Adjust bottom position for mobile */
  }

  @media (max-width: 425px) {
    bottom: 0.25rem; /* Further reduce bottom for very small screens */
  }
`;

const SearchInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Dropdown = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 100%; /* Ensure full width on mobile */
  }
`;

const DateInput = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 100%; /* Ensure full width on mobile */
  }
`;

const NumberInput = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 100%; /* Ensure full width on mobile */
  }
`;

const SearchButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  background-color: #4f89e3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a70c4;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`;
