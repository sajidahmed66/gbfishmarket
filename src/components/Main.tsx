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
import DetailsProducts from "./admin/nestedComponents/Products/DetailsProducts";
import AllProducts from "./admin/nestedComponents/Products/AllProducts";
import AddProduct from "./admin/nestedComponents/Products/AddProduct";
import EditProduct from "./admin/nestedComponents/Products/EditProduct";
import FeatureProduct from "./admin/nestedComponents/Products/FeatureProduct";
import AllClients from "./admin/nestedComponents/Clients/AllClients";
import EditClient from "./admin/nestedComponents/Clients/EditClients";
import ClientProducts from "./admin/nestedComponents/Clients/ClientProducts";
import AddClient from "./admin/nestedComponents/Clients/AddClient";
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
      {/* admin routes */}
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
        <Route path="products" element={<AdminProducts />}>
          <Route index element={<AllProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="feature-in-discover" element={<FeatureProduct />} />
        </Route>
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="products/details/:id" element={<DetailsProducts />} />
        <Route path="clients" element={<AdminClients />}>
          <Route index element={<AllClients />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="products-of-client" element={<ClientProducts />} />
        </Route>
        <Route path="clients/edit/:id" element={<EditClient />} />
        {/* <Route path="clients/details/:id" element={<ClientDetails />} /> */}
        <Route path="company" element={<AdminCompany />} />
        <Route path="inbox" element={<AdminContactInbox />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Main;
