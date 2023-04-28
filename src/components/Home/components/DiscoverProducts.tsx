import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductCategories } from "../../../api/apiAdminProducts";
import ProductCards from "./ProductCard";

const DiscoverProducts = () => {
  const [allProductsCategories, setAllProductsCategories] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    getProductCategories()
      .then((res) => {
        let displayProductsCategory = res.data.categoryProducts.filter(
          (item: any) => item?.show_on_home
        );
        setAllProductsCategories(displayProductsCategory);
        setLoadingData(false);
      })
      .catch((err) => {
        setLoadingData(false);
      });
    return () => {
      setAllProductsCategories([]);
      setLoadingData(false);
    };
  }, []);
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-8 pt-4 pb-6 pr-4 mx-auto">
        <h2 className="text-sm font-montserrat font-semibold text-[#b8cc08] text-transform: lowercase font-style: italic ">
          Sea food
        </h2>
        <h2 className="text-2xl font-montserrat font-semibold text-[#b8cc08] text-transform: uppercase ">
          DISCOVER OUR PRODUCTS
        </h2>
        <div className="flex items-center justify-center pt-4 ">
          <img
            src={
              new URL("../../../assets/img/divider.png", import.meta.url).href
            }
            alt="divider"
          />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-8 pt-4 pb-6 mx-auto xl:px-24 lg:px-24 md:px-12 sm:px-8">
        {/* img diveder */}
        {/* end img divider */}
        <ProductCards
          allProductsCategories={allProductsCategories}
          loadingData={loadingData}
        />
      </div>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-8 pt-4 pb-6 mx-auto">
        <button className="bg-[#2c3941] text-white py-2 px-4 rounded-lg">
          <Link to="/products">
            <span className="text-sm font-semibold uppercase font-montserrat text-transform:">
              View All Products
            </span>
          </Link>
        </button>
      </div>
    </>
  );
};

export default DiscoverProducts;
