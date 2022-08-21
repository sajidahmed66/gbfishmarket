import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import Home from ".//Home/Home";

import AboutUs from "./AboutUs/AboutUs";
// about-us nested route components
import AboutDetails from "./AboutUs/components/Deatils";
import History from "./AboutUs/components/History";
import MessageFromCEO from "./AboutUs/components/MessageFromCEO";
import CompanyPhilosophy from "./AboutUs/components/CompanyPhilosophy";
import Teams from "./AboutUs/components/Teams";
//products nested route components
import Products from "./Products/Products";
import ProductList from "./Products/nestedComponent/ProductList";
import ProductDetails from "./Products/nestedComponent/ProductsDetails";
import FilteredProducts from "./Products/nestedComponent/FilteredProducts";
// import FilteredProducts
import ContactUs from "./ContactUs/ContactUS";
import NotFound404 from "./404/NotFound404";
import Login from "./admin/LogIn";

import ProtectedRoute from "./ProtectedRoutes/ProtectedRoutes";
import "tw-elements"; // remove this and check if it has ant breaking changes in the app.
import AdminProducts from "./admin/AdminProducts";
import AdminClients from "./admin/AdminClients";
import AdminCompany from "./admin/AdminCompany";
import AdminContactInbox from "./admin/AdminContactInbox";
import LogoChange from "./admin/nestedComponents/LogoChange";
import AdminBanner from "./admin/nestedComponents/AdminBanner";
// import AdminAboutUs from "./admin/nestedComponents/AdminAboutUs";
import AdminAnnouncement from "./admin/nestedComponents/AdminAnnouncement";
// import AdminAdvance from "./admin/nestedComponents/AdminAdvance";
import DetailsProducts from "./admin/nestedComponents/Products/DetailsProducts";
import AllProducts from "./admin/nestedComponents/Products/AllProducts";
import AddProduct from "./admin/nestedComponents/Products/AddProduct";
import EditProduct from "./admin/nestedComponents/Products/EditProduct";
import FeatureProduct from "./admin/nestedComponents/Products/FeatureProduct";
import AllClients from "./admin/nestedComponents/Clients/AllClients";
import EditClient from "./admin/nestedComponents/Clients/EditClients";
import ClientProducts from "./admin/nestedComponents/Clients/ClientProducts";
import AddClient from "./admin/nestedComponents/Clients/AddClient";
import ClientDetails from "./admin/nestedComponents/Clients/ClientDetails";
import AllAnncouncements from "./admin/nestedComponents/Announcements/AllAnncouncements";
import AddAnnouncement from "./admin/nestedComponents/Announcements/AddAnnouncement";
import AnnouncementDetails from "./admin/nestedComponents/Announcements/AnnouncementDetails";
import EditAnnouncement from "./admin/nestedComponents/Announcements/EditAnnouncement";
const LazyAdminLayout = lazy(() => import("./admin/layout/AdminLayout"));
const LazyAdminDashboard = lazy(() => import("./admin/AdminDashboard"));

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about-us" element={<AboutUs />}>
        <Route index element={<AboutDetails />} />
        <Route path="history" element={<History />} />
        <Route path="message-from-ceo" element={<MessageFromCEO />} />
        <Route path="company-philosophy" element={<CompanyPhilosophy />} />
        <Route path="teams" element={<Teams />} />
      </Route>
      <Route path="products" element={<Products />}>
        <Route index element={<ProductList />} />
        <Route path="category/:categoryId" element={<FilteredProducts />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
      </Route>
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
          {/* <Route path="about-us" element={<AdminAboutUs />} /> */}
          <Route path="announcement" element={<AdminAnnouncement />}>
            <Route index element={<AllAnncouncements />} />
            <Route path="add-announcement" element={<AddAnnouncement />} />
            <Route path="details/:id" element={<AnnouncementDetails />} />
            <Route path="edit/:id" element={<EditAnnouncement />} />
          </Route>
          {/* <Route path="advanced-setteing" element={<AdminAdvance />} /> */}
        </Route>
        <Route path="products" element={<AdminProducts />}>
          <Route index element={<AllProducts />} />
          <Route path="add" element={<AddProduct />} />
        </Route>
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="products/details/:id" element={<DetailsProducts />} />
        <Route path="clients" element={<AdminClients />}>
          <Route index element={<AllClients />} />
          <Route path="add-client" element={<AddClient />} />
          <Route path="products-of-client" element={<ClientProducts />} />
        </Route>
        <Route path="clients/edit/:id" element={<EditClient />} />
        <Route path="clients/details/:id" element={<ClientDetails />} />
        <Route path="company" element={<AdminCompany />} />
        <Route path="inbox" element={<AdminContactInbox />} />
      </Route>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Main;

/*
          
           I’m Vengeance
            |\_|\
            | a_a\
            | | "]
        ____| '-\___
        /.----.___.-'\
        //        _    \
    //   .-. (~v~) /|
    |'|  /\:  .--  / \
    // |-/  \_/____/\/~|
    |/  \ |  []_|_|_] \ |
    | \  | \ |___   _\ ]_}
    | |  '-' /   '.'  |
    | |     /    /|:  | 
    | |     |   / |:  /\
    | |     /  /  |  /  \
    | |    |  /  /  |    \
    \ |    |/\/  |/|/\    \
    \|\ |\|  |  | / /\/\__\
    \ \| | /   | |__
        / |   |____)
        |_/ -->

*/
