import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Products from "./Products/Products";
import Home from ".//Home/Home";
import ContactUs from "./ContactUs/ContactUS";
import NotFound404 from "./404/NotFound404";
import Login from "./admin/LogIn";
import AdminDashBoard from "./admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";
import "tw-elements";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="products" element={<Products />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <AdminDashBoard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Main;
