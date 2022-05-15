import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Products from "./Products/Products";
import Home from ".//Home/Home";
import ContactUs from "./ContactUs/ContactUS";
import NotFound404 from "./404/NotFound404";
import Login from "./admin/LogIn";

import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";
import "tw-elements";
import AdminProducts from "./admin/AdminProducts";
import AdminClients from "./admin/AdminClients";
import AdminCompany from "./admin/AdminCompany";
import AdminContactInbox from "./admin/AdminContactInbox";
import LogoChange from "./admin/nestedComponents/LogoChange";
import AdminBanner from "./admin/nestedComponents/AdminBanner";
import AdminAboutUs from "./admin/nestedComponents/AdminAboutUs";
import AdminAnnouncement from "./admin/nestedComponents/AdminAnnouncement";
import AdminAdvance from "./admin/nestedComponents/AdminAdvance";
const LazyAdminLayout = lazy(() => import("./admin/layout/AdminLayout"));
const LazyAdminDashboard = lazy(() => import("./admin/AdminDashboard"));

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
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAdminLayout />
            </Suspense>
          </ProtectedRoute>
        }
      >
        <Route
          // path="/admin"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAdminDashboard />
            </Suspense>
          }
        >
          <Route index element={<LogoChange />} />
          <Route path="banner" element={<AdminBanner />} />
          <Route path="about-us" element={<AdminAboutUs />} />
          <Route path="announcement" element={<AdminAnnouncement />} />
          <Route path="advanced-setteing" element={<AdminAdvance />} />
        </Route>
        <Route path="products" element={<AdminProducts />} />
        <Route path="clients" element={<AdminClients />} />
        <Route path="company" element={<AdminCompany />} />
        <Route path="inbox" element={<AdminContactInbox />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Main;
