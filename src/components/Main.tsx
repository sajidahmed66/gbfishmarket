import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
// import ContactUs from './ContactUs/ContactUs';4
import Products from "./Products/Products";
import Home from ".//Home/Home";
import ContactUs from "./ContactUs/ContactUS";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="products" element={<Products />} />
      <Route path="contactus" element={<ContactUs />} />
      {/* <Route path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Main;
