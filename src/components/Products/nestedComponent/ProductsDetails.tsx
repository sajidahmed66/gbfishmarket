import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../../api/apiAdminProducts";
import { useParams, useNavigate } from "react-router-dom";
import { IProduct } from "../../admin/nestedComponents/Products/AllProducts";
//this will be a dummy component for now

const ProductsDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    getAllProducts()
      .then((res) => res.data)
      .then((data) => {
        // setProduct(data.find((item) => item.id === parseInt(productId)));
        setProduct(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <>
      {product && (
        <div className="w-full mt-8 mb-12 ml-0 md:mt-0 md:ml-4 md:w-3/4 lg:w-3/4 ">
          <div className="flex flex-col items-start justify-start md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={product.image_link}
                alt=""
                className="w-full rounded-lg h-60 md:h-56 lg:h-72"
              />
              <div className="hidden w-full mt-12 md:flex md:flex-row md:items-center md:justify-center">
                <button
                  className="text-white  bg-[#b8cc08] btn hover:bg-pink-900"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Cantact sales
                </button>
              </div>
            </div>
            <div className="w-full h-auto p-4 md:w-1/2">
              <div className="flex flex-row items-center justify-center w-full h-12">
                <h2 className="mb-2 text-2xl ">{product.title}</h2>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="mb-2 text-base text-gray-500">
                  {product.subtitle}
                </p>
                <p className="mb-2 text-lg text-gray-500">
                  {product.short_description}
                </p>
              </div>
              <div>
                <p className="text-lg text-left text-gray-500">
                  {product.long_description}
                </p>
              </div>
              <div className="flex flex-row items-center justify-center w-full mt-12 md:hidden">
                <button
                  className="text-white  bg-[#b8cc08] btn hover:bg-pink-900"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Cantact sales
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetails;
