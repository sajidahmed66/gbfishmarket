import { useState, useEffect } from "react";
import Layout from "../Common/Layout";
import { productsData, productsCategoryData } from "../../data/produtsData";
import Container from "@mui/material/Container";
import { useLocation, useNavigate, Outlet, Link } from "react-router-dom";
const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let pathnamearry = location.pathname.split("/");
  return (
    <Layout title="Our Products">
      {/* page banner */}
      <div className="w-full h-96">
        <div className="absolute w-full h-96">
          <img
            src={require("../../assets/img/product-fish.jpg")}
            className="relative w-full min-w-full h-96"
            alt="aboutimg"
          />
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full bg-black h-96 bg-opacity-30">

            {/* <p className="text-5xl text-white text-transform: uppercase">Products</p>
            <div className="flex flex-row my-2 text-2xl text-white">
              <Link to={'/'} className="" >home</Link> {"|"}
              <Link to={'/products'}> products</Link> */}
            <p className="text-5xl text-white">Products</p>
            <div className="flex flex-row my-2 text-3xl text-white capitalize transition-colors duration-500 font-skModernist ">
              <p
                className="px-1 cursor-pointer hover:text-orange-400 "
                onClick={() => {
                  navigate("/");
                }}
              >
                home
              </p>{" "}
              {"|"}
              <p
                className="px-1 cursor-pointer hover:text-orange-400"
                onClick={() => {
                  navigate("/products");
                }}
              >
                {" "}
                products
              </p>
              {pathnamearry.length === 4 && pathnamearry[2] === "category" ? (
                <>
                  {"|"}
                  <p className="px-1 cursor-pointer hover:text-orange-400">
                    {
                      productsCategoryData.find(
                        (item) => item.id === parseInt(pathnamearry[3])
                      )?.name
                    }
                  </p>
                </>
              ) : (
                <></>
              )}
              {pathnamearry.length === 4 &&
              pathnamearry[2] === "product-details" ? (
                <>
                  {"|"}
                  <p className="px-1 cursor-pointer hover:text-orange-400">
                    {
                      productsCategoryData.find(
                        (item) => item.id === parseInt(pathnamearry[3])
                      )?.name
                    }
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* end of page banner */}
      {/* products section */}
      <Container maxWidth="lg">
        <div className="flex flex-col items-center justify-start w-full px-2 md:px-16 mt-2 md:mt-24 md:flex-row md:items-start">
          {/* category filter container  */}
          <div className="flex flex-row items-center justify-start w-full px-4 py-8 md:flex-col md:w-1/4 lg:w-1/4 bg-slate-100">
            <ul className="w-full">
              <li className="flex flex-row items-center justify-start h-4 m-3 ">
                <div className="bg-[#3a6ea5] h-2 w-2 rounded-full"></div>{" "}
                <p
                  className={
                    location.pathname === "/products"
                      ? "pl-3 text-base text-[#3a6ea5] cursor-pointer"
                      : "pl-4 text-sm hover:transform hover:duration-200 hover:text-[#3a6ea5] hover:ease-in hover:scale-125 cursor-pointer"
                  }
                  onClick={() => navigate("/products")}
                >
                  All Category
                </p>
              </li>
              {productsCategoryData.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center justify-start h-4 m-3 "
                >
                  <div className="bg-[#3a6ea5] h-2 w-2 rounded-full"></div>{" "}
                  <p
                    className={
                      location.pathname === `/products/category/${item.id}`
                        ? "pl-3 text-base text-[#3a6ea5] cursor-pointer"
                        : "pl-4 text-sm hover:transform hover:duration-200 hover:text-[#3a6ea5] hover:ease-in hover:scale-125 cursor-pointer"
                    }
                    onClick={() => navigate(`/products/category/${item.id}`)}
                  >
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <>
            {/* category items image cards container */}
            <Outlet />
          </>
        </div>
      </Container>

      {/* end of product section */}
    </Layout>
  );
};

export default Products;
