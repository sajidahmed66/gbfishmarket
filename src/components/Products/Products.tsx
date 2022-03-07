import Layout from "../Common/Layout";
import Card from "./components/Card";
import { productsData } from "../../data/produtsData";
const Products = () => {
  return (
    <Layout title="Our Products">
      {/* page banner */}
      <div>
        <img
          src={require("../../assets/img/product-fish.jpg")}
          className="w-full"
          alt="aboutimg"
        />
      </div>
      {/* end of page banner */}
      {/* products section */}
      <div className="container flex flex-col items-center justify-start max-w-screen-xl px-8 mx-auto">
        {/* Product page intro */}
        <span className="block py-8 text-xl font-bold font-skModernistBold">
          For all our fishes, we can curate it to you preference.
          <p>Styles:</p>
          <p>
            {`Whole, cleaned and gutted, butterfly cut (For Seabass & Red Snapper
            Only), fillet, portion cut, fresh or frozen)`}
          </p>
        </span>
        {/* end of Product page intro */}
        {/* products section */}
        {productsData.map((product, index) => (
          <Card product={product} />
        ))}
      </div>
      {/* end of product section */}
    </Layout>
  );
};

export default Products;
