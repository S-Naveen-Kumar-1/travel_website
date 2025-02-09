import React from "react";
import Destinations from "../components/Destinations";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import AboutUs from "../components/AboutUs";
import PaymentDetails from "../components/PaymentDetails";
import PackagesHomePage from "../components/PackageInfoHome";

const Home = () => {
  return (
    <>
      <Hero />
      <PackagesHomePage/>
      <Destinations />
      <Blogs />
      <AboutUs />
      <PaymentDetails/>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
