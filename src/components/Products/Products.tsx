import Layout from "../Common/Layout";
const Products = () => {
  return (
    <Layout title="Our Products">
      <div>
        <img
          src={require("../../assets/img/product-fish.jpg")}
          className="w-full"
          alt="aboutimg"
        />
      </div>
      <div className="container flex flex-col justify-start items-center mx-auto px-8 max-w-screen-xl">
        <span className="block py-8 text-lg font-bold font-roboto">
          For all our fishes, we can curate it to you preference.
          <p>Styles:</p>
          <p>
            Whole, cleaned and gutted, butterfly cut (For Seabass & Red Snapper
            Only), fillet, portion cut, fresh or frozen)
          </p>
        </span>
        {/* sigle fish products */}
        <div className="max-w-7xl flex flex-row items-start justify-items-start py-8 ">
          <div className="w-1/3 px-4 flex flex-col items-start justify-end pt-6 ">
            <img
              className="w-full rounded-lg object-cover md:w-64 "
              src="https://www.worldlifeexpectancy.com/images/a/w/b/mugil-cephalus/mugil-cephalus.jpg"
              alt="mugil-cephalus"
            />
          </div>
          <div className="w-2/3">
            <div className="flex flex-col justify-center items-center">
              <h2 className="w-full font-bold font-skModernist text-2xl leading-8 py-4">
                Fish name title
              </h2>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
            </div>
          </div>
        </div>
        {/* end of single fish products */}
        {/* sigle fish products */}
        <div className="max-w-7xl flex flex-row items-start justify-items-start py-8 ">
          <div className="w-1/3 px-4 flex flex-col items-start justify-end pt-6">
            <img
              className="w-full rounded-lg object-cover md:w-64 "
              src="https://fishmart.com.bd/wp-content/uploads/2019/09/Bele-Medium-1kg-750tk-copy.jpg"
              alt="mugil-cephalus"
            />
          </div>
          <div className="w-2/3">
            <div className="flex flex-col justify-end items-center">
              <h2 className="w-full font-bold font-skModernist text-2xl leading-8 py-4">
                Fish name title
              </h2>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
            </div>
          </div>
        </div>
        {/* sigle fish products */}
        <div className="max-w-7xl flex flex-row items-start justify-items-start py-8 ">
          <div className="w-1/3 px-4 flex flex-col items-start justify-end pt-6">
            <img
              className="w-full rounded-lg object-cover md:w-64 "
              src={require("../../assets/img/products/protuct-1.jpg")}
              alt="mugil-cephalus"
            />
          </div>
          <div className="w-2/3">
            <div className="flex flex-col justify-end items-center">
              <h2 className="w-full font-bold font-skModernist text-2xl leading-8 py-4">
                Fish name title
              </h2>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
            </div>
          </div>
        </div>
        {/* sigle fish products */}
        <div className="max-w-7xl flex flex-row items-start  justify-items-start py-8 ">
          <div className="w-1/3 px-4 flex flex-col items-start justify-end pt-6">
            <img
              className="w-full rounded-lg object-cover md:w-64 "
              src={require("../../assets/img/products/protuct-5.jpg")}
              alt="mugil-cephalus"
            />
          </div>
          <div className="w-2/3">
            <div className="flex flex-col justify-end items-center">
              <h2 className="w-full font-bold font-skModernist text-2xl leading-8 py-4 ">
                Fish name title
              </h2>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
              <p className="font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
            </div>
          </div>
        </div>

        {/* sigle fish products */}
        <div className="max-w-7xl flex flex-row items-start justify-items-start py-8 ">
          <div className="w-1/2 px-4 flex flec-col items-start justify-end pt-8 mr-12">
            <img
              className="w-full rounded-lg object-cover md:w-64 "
              src="https://fishmart.com.bd/wp-content/uploads/2019/10/Deshi-Katol-1.5kg-2kg-450tk-per-kg-1-600x582.jpg"
              alt="mugil-cephalus"
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col justify-center items-center">
              <h2 className="w-full text-2xl font-roboto font-bold py-4">
                Fish name title
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque iure quidem fuga magnam molestias placeat quisquam
                itaque vitae minus tenetur, unde possimus sapiente vel cumque
                rerum quae ea iusto impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis, harum. Ea sunt nemo
                corrupti repellendus, quidem officiis placeat nam, commodi
                libero obcaecati totam at ipsa cupiditate soluta numquam
                mollitia quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
