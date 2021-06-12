import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import NavBar from "./Navbar";
import Header from "./Header";
import Products from "./Products";
import Brands from "./Brands";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Products />
      <Brands />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
