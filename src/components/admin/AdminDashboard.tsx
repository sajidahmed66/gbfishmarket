import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";

const AdminDashBoard = () => {
  const location = useLocation();

  return (
    <Container
      maxWidth="lg"
      className="flex flex-col items-center justify-center"
    >
      <Box>
        <Typography variant="h5">Admin Dashboard</Typography>
        <Typography variant="h6" className="py-4">
          change logo, update banner, edit/lunch announcements, etc.
        </Typography>

        <nav className="mt-4 tab tab-lg tab-full">
          {/* react-routers Navlink sends a active class when the path(to='/...) is selected. so the check i did with location.pathname to send the active class is unnecessary here but  i did to solve a small bug with the index route being always active */}

          <NavLink
            className={
              location.pathname === "/admin" ? "tab-link active" : "tab-link "
            }
            to="/admin/"
          >
            Change logo
          </NavLink>

          <NavLink
            className={
              location.pathname === "/admin/banner"
                ? "tab-link active"
                : "tab-link "
            }
            to="/admin/banner"
          >
            Banner Customaization
          </NavLink>

          <NavLink
            className={
              location.pathname === "/admin/announcement"
                ? "tab-link active"
                : "tab-link "
            }
            to="/admin/announcement"
          >
            Announcement
          </NavLink>

          <NavLink
            className={
              location.pathname === "/admin/about-us"
                ? "tab-link active"
                : "tab-link "
            }
            to="/admin/about-us"
          >
            About Us
          </NavLink>

          <NavLink
            className={
              location.pathname === "/admin/advanced-setteing"
                ? "tab-link active"
                : "tab-link "
            }
            to="/admin/advanced-setteing"
          >
            Advanced
          </NavLink>
        </nav>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default AdminDashBoard;
