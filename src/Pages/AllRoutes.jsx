import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { AllBlogs } from "./AllBlogs";
import Hotels from "./Hotels";
import Destinations from "./Destinations";
import Packages from "./Packages";
import FoodItems from "./Shopping";
import BlogListing from "./BlogsListing";
import BlogView from "../components/BlogView";
import Admin from "./Admin";
import PackageDetails from "./PackageDetails";
import AboutUs from "./AboutUs";
import SubPackages from "./SubPackages";
import AllPackages from "./AllPackages";
import CreateBlog from "./CreateBlog";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/all-blogs" element={<AllBlogs />}></Route>
      <Route path="/all-hotels" element={<Hotels />}></Route>
      <Route path="/all-destinations" element={<Destinations />}></Route>
      <Route path="/all-packages" element={<AllPackages />}></Route>
      <Route path="/shopping" element={<FoodItems />}></Route>
      <Route path="/blogs" element={<BlogListing />}></Route>
      <Route path="/admin-hamsafran" element={<Admin />} />
      {/* <Route path="/package-details/:id" element={<PackageDetails />} /> */}
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/packages/:packageId" element={<SubPackages />} />
      <Route
        path="/packages/:packageId/:subPackageId"
        element={<PackageDetails />}
      />
      <Route path="/create-blog" element={<CreateBlog />} />
    </Routes>
  );
};
