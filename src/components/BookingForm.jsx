import React from 'react';
import styled from 'styled-components';

const BookingForm = () => {
  return (
    <FormSection>
      <h2>Book Your Trip</h2>
      <Form>
        <input type="text" placeholder="Destination" />
        <input type="date" />
        <input type="text" placeholder="Number of People" />
        <button>Submit</button>
      </Form>
    </FormSection>
  );
};

export default BookingForm;

const FormSection = styled.section`
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;

  input, button {
    padding: 0.8rem;
    font-size: 1rem;
  }

  button {
    background-color: #ff5733;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #e64e2d;
    }
  }
`;
