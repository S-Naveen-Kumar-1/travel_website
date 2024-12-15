import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Destinations = () => {
  const [focusedIndex, setFocusedIndex] = useState(1); // Set the default focused card
  const [currentIndex, setCurrentIndex] = useState(0); // Set the current index for the displayed set of cards

  // Add 5 destination places
  const destinations = [
    {
      name: "Dal Lake",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMYNDzdv2hYnJoDKt0ltCIQQgLLJ7W_39cq_bCj=w1080-h624-n-k-no",
      description:
        "A stunning freshwater lake in Srinagar, known for its houseboats and Shikara rides.",
    },
    {
      name: "Gulmarg",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMYNDzdv2hYnJoDKt0ltCIQQgLLJ7W_39cq_bCj=w1080-h624-n-k-no",
      description:
        "A famous ski resort in Kashmir, known for its snowy landscapes and ski slopes.",
    },
    {
      name: "Sonamarg",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMYNDzdv2hYnJoDKt0ltCIQQgLLJ7W_39cq_bCj=w1080-h624-n-k-no",
      description:
        "A valley located in the Indian-administered region of Jammu and Kashmir, known for its glaciers and scenic views.",
    },
    {
      name: "Pahalgam",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMYNDzdv2hYnJoDKt0ltCIQQgLLJ7W_39cq_bCj=w1080-h624-n-k-no",
      description:
        "A beautiful town located in the Anantnag district, known for its lush meadows and scenic views.",
    },
    {
      name: "Nubra Valley",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMYNDzdv2hYnJoDKt0ltCIQQgLLJ7W_39cq_bCj=w1080-h624-n-k-no",
      description:
        "A valley known for its sand dunes, monasteries, and picturesque landscapes.",
    },
  ];

  // Navigate left
  const moveLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 3 : prev - 1
    );
  };

  // Navigate right
  const moveRight = () => {
    setCurrentIndex((prev) =>
      prev === destinations.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <Section>
      <h2>Featured Destinations</h2>
      <SliderWrapper>
        <SliderButton onClick={moveLeft}>
          <FaChevronLeft />
        </SliderButton>
        <Grid>
          {destinations
            .slice(currentIndex, currentIndex + 3) // Show three images at a time
            .map((dest, index) => (
              <Card
                key={index}
                $isFocused={index === focusedIndex}
                onMouseEnter={() => setFocusedIndex(index)}
                onMouseLeave={() => setFocusedIndex(null)}
              >
                <img src={dest.image} alt={dest.name} />
                <div className={index === focusedIndex ? "overlay" : ""}>
                  {index === focusedIndex && <p>{dest.description}</p>}
                </div>
                <Name>{dest.name}</Name>
              </Card>
            ))}
        </Grid>
        <SliderButton onClick={moveRight}>
          <FaChevronRight />
        </SliderButton>
      </SliderWrapper>
    </Section>
  );
};

export default Destinations;

const Section = styled.section`
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  width: 100%;
`;

const SliderButton = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  background: none;
  border: 2px solid #007bff;
  color: #007bff;
  cursor: pointer;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr); /* Default to 3 images per row */
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Show 1 image per row on mobile */
    gap: 0.5rem;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: opacity 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Name = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1.25rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  border-radius: 5px;
  width: 90%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
