import ProductCards from "./ProductCard";

const DiscoverProducts = () => {
  return (
    <>
      <div className="container mx-auto w-full flex items-center justify-center pt-4 pb-12">
        <h2 className="text-6xl font-bold text-[#042a2b] font-dancingScript ">
          Discover Products
        </h2>
      </div>
      <div className="container w-full flex flex-wrap flex-row mx-auto">
        <ProductCards />
      </div>
    </>
  );
};

export default DiscoverProducts;
