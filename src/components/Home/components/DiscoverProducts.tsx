import ProductCards from "./ProductCard";

const DiscoverProducts = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl px-12 pt-4 pb-6 mx-auto">
        <h2 className="text-5xl font-bold text-[#b8cc08] font-skModernistBold ">
          Discover Products
        </h2>
        {/* img diveder */}
        <div className="flex items-center justify-center pt-4 ">
          <img src={require("../../../assets/img/divider.png")} alt="divider" />
        </div>
        {/* end img divider */}
        {/* paragraph */}
        <div className="container max-w-screen-md py-8 mx-auto">
          <p className="text-lg leading-8 font-skModernistBold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            odio sit amet nibh vulputate cursus. Nullam accumsan, nulla sed
            dictum eleifend, nunc risus consectetur purus, at elementum risus
            nulla et nunc.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center justify-items-center">
          <ProductCards />
        </div>
      </div>
    </>
  );
};

export default DiscoverProducts;
