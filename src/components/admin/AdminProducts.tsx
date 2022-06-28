import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, useLocation, Outlet } from "react-router-dom";

const AdminProducts = () => {
  const location = useLocation();

  return (
    <Container
      maxWidth="lg"
      className="flex flex-col items-center justify-center"
    >
      <Box>
        <Typography variant="h5">Products Customaization</Typography>
        <Typography variant="h6" className="py-4">
          Add new products, edit existing products, Feature Products to your
          homepage doscover sections
        </Typography>
        <Box>
          <nav className="mt-4 tab tab-lg tab-full">
            {/* react-routers Navlink sends a active class when the path(to='/...) is selected. so the check i did with location.pathname to send the active class is unnecessary here but  i did to solve a small bug with the index route being always active */}

            <NavLink
              className={
                location.pathname === "/admin/products"
                  ? "tab-link active"
                  : "tab-link "
              }
              to="/admin/products/"
            >
              Browse All Product
            </NavLink>

            <NavLink
              className={
                location.pathname === "/admin/products/add"
                  ? "tab-link active"
                  : "tab-link "
              }
              to="/admin/products/add"
            >
              Add New Product
            </NavLink>

            <NavLink
              className={
                location.pathname === "/admin/products/feature-in-discover"
                  ? "tab-link active"
                  : "tab-link "
              }
              to="/admin/products/feature-in-discover"
            >
              Feature a product on Homepage
            </NavLink>

            {/* <NavLink
              className={
                location.pathname === "/admin/about-us"
                  ? "tab-link active"
                  : "tab-link "
              }
              to="/admin/about-us"
            >
              Feature Product to Discover Section
            </NavLink> */}
          </nav>
        </Box>
      </Box>
      <Outlet />
    </Container>
  );
};

export default AdminProducts;