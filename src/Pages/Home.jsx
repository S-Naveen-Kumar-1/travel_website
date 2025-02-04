import React from 'react';
import Destinations from '../components/Destinations';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <>
    
      <Hero />
      <Destinations />
      <BookingForm />
      <Blogs/>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
