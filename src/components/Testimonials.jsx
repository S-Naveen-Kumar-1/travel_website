import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <Section>
      {/* <h2>What Our Customers Say</h2>
      <Testimonial>
        <p>"Amazing service! My vacation was perfect."</p>
        <span>- Sarah</span>
      </Testimonial>
      <Testimonial>
        <p>"Great deals and excellent support."</p>
        <span>- John</span>
      </Testimonial> */}
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }
`;

const Testimonial = styled.div`
  margin-bottom: 1.5rem;

  p {
    font-style: italic;
  }

  span {
    display: block;
    margin-top: 0.5rem;
  }
`;
