import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsCategoryData } from "../../../data/produtsData";

interface Idata {
  id: number;
  name: string;
  image: any;
}
const FilteredProducts = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<Idata[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let getproducts = categoryId
      ? productsCategoryData.filter((item) => item.id === parseInt(categoryId))
      : ([] as Idata[]);
    setFilteredProducts(getproducts);
    setIsLoading(false);
    return () => {
      setFilteredProducts([]);
    };
  }, [categoryId]);

  // setFilteredProducts(getproducts);
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 w-full gap-4 mt-2 md:mt-8 mb-12 ml-0 md:mt-0 md:ml-4 md:w-3/4 lg:w-3/4">
      {filteredProducts.map((item) => (
        <div className="flex flex-col items-center">
          <div className="w-full bg-white h-36 md:h-48 ">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full hover:opacity-50"
              onClick={() => navigate(`/products/product-details/${item.id}`)}
            />
          </div>
          <div className="w-full h-12 ">
            <p className="text-sm text-center text-gray-800 md:text-base">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredProducts;
