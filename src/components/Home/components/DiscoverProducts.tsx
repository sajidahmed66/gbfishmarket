import { Link } from "react-router-dom";
import ProductCards from "./ProductCard";

const DiscoverProducts = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-8 pt-4 pb-6 mx-auto">
        <h2 className="text-sm font-bold text-[#b8cc08] font-Caveat text-transform: lowercase font-style: italic ">
          Sea food
        </h2>
        <h2 className="text-2xl font-bold text-[#b8cc08] font-skModernistBold text-transform: uppercase ">
          DISCOVER OUR PRODUCTS
        </h2>
        <div className="flex items-center justify-center pt-4 ">
          <img src={require("../../../assets/img/divider.png")} alt="divider" />
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-8 pt-4 pb-6 mx-auto">
        {/* img diveder */}
        {/* end img divider */}

          <ProductCards />
      </div>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-8 pt-4 pb-6 mx-auto">
        <button className="bg-[#2c3941] text-white py-2 px-4 rounded-lg">
          <Link to="/products">
            <span className="text-sm font-bold font-skModernistBold text-transform: uppercase">
              View All Products
            </span>
          </Link>
        </button>
        </div>
    </>
  );
};

export default DiscoverProducts;
