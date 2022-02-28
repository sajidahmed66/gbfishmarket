import ProductCards from "./ProductCard";

const DiscoverProducts = () => {
  return (
    <>
      <div className="container mx-auto w-full flex flex-col items-center justify-center pt-4 pb-6 max-w-screen-xl">
        <h2 className="text-5xl font-bold text-[#b8cc08] font-skModernistBold ">
          Discover Products
        </h2>
        <div className=" flex items-center justify-center pt-4">
          <img src={require("../../../assets/img/divider.png")} alt="divider" />
        </div>
        <div className="container mx-auto py-4 text-center max-w-screen-md">
          <p className="font-skModernistBold text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            odio sit amet nibh vulputate cursus. Nullam accumsan, nulla sed
            dictum eleifend, nunc risus consectetur purus, at elementum risus
            nulla et nunc.
          </p>
        </div>
      </div>
      <div className="container w-full flex flex-wrap flex-row mx-auto max-w-screen-xl">
        <ProductCards />
      </div>
    </>
  );
};

export default DiscoverProducts;
