const ProductCards = () => {
  /*
leaving it as it is now 
*/

  return (
    <div className="flex flex-col items-center p-4 justify-items-center md:flex-row md:flex-wrap">
      {/* single card */}
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div className="max-w-sm md:max-w-sm lg:max-w-[18rem] mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-3.5">
          <img
            className="object-cover w-full transition duration-300 ease-in-out h-72 hover:scale-110"
            src={require("../../../assets/img/products/protuct-1.jpg")}
            alt="avatar"
          />
          <div className="px-2 py-5 text-center">
            <div className="py-2">
              <a className="block text-2xl font-bold text-gray-800 dark:text-white">
                CATLA FISH
              </a>
            </div>
            <div className="text-sm leading-6 text-gray-700 dark:text-gray-200 font-skModernistBold">
              Lorem ipsum dolor sit amet consectetur consectetur adipiscing
              elit. Mauris sed odio
              <div className="inline-block hover:text-yellow-400 text-stone-500">
                {" "}
                .... more
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* single card */}
      {/* <div className="max-w-sm md:max-w-sm lg:max-w-[18rem]  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-3.5">
        <img
          className="object-cover w-full transition duration-300 ease-in-out h-72 hover:scale-110"
          src={require("../../../assets/img/products/protuct-1.jpg")}
          alt="avatar"
        />

        <div className="px-2 py-5 text-center">
          <div className="py-2">
            <a
              href="#"
              className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              CATLA FISH
            </a>
          </div>
          <div className="text-sm leading-6 text-gray-700 dark:text-gray-200 font-skModernistBold">
            Lorem ipsum dolor sit amet consectetur consectetur adipiscing elit.
            Mauris sed odio
            <div className="inline-block hover:text-yellow-400 text-stone-500">
              {" "}
              .... more
            </div>
          </div>
        </div>
      </div> */}
      {/* single card */}
      {/* <div className="max-w-sm md:max-w-sm lg:max-w-[18rem]  mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-3.5">
        <img
          className="object-cover w-full transition duration-300 ease-in-out h-72 hover:scale-110"
          src={require("../../../assets/img/products/protuct-1.jpg")}
          alt="avatar"
        />

        <div className="px-2 py-5 text-center">
          <div className="py-2">
            <a
              href="#"
              className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              CATLA FISH
            </a>
          </div>
          <div className="text-sm leading-6 text-gray-700 dark:text-gray-200 font-skModernistBold">
            Lorem ipsum dolor sit amet consectetur consectetur adipiscing elit.
            Mauris sed odio
            <div className="inline-block hover:text-yellow-400 text-stone-500">
              {" "}
              .... more
            </div>
          </div>
        </div>
      </div> */}
      {/* single card */}
      {/* <div className="max-w-sm md:max-w-sm lg:max-w-[18rem] mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-3.5">
        <img
          className="object-cover w-full transition duration-300 ease-in-out h-72 hover:scale-110"
          src={require("../../../assets/img/products/protuct-1.jpg")}
          alt="avatar"
        />

        <div className="px-2 py-5 text-center">
          <div className="py-2">
            <a
              href="#"
              className="block text-2xl font-bold text-gray-800 dark:text-white"
            >
              CATLA FISH
            </a>
          </div>
          <div className="text-sm leading-6 text-gray-700 dark:text-gray-200 font-skModernistBold">
            Lorem ipsum dolor sit amet consectetur consectetur adipiscing elit.
            Mauris sed odio
            <div className="inline-block hover:text-yellow-400 text-stone-500">
              {" "}
              .... more
            </div>
          </div>
        </div>
      </div> */}
      {/* single card */}
      {/* <div className="max-w-[19rem] mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4">
        <img
          className="object-cover w-full h-64"
          src={require("../../../assets/img/products/protuct-1.jpg")}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <a
            href="#"
            className="block text-2xl font-bold text-gray-800 dark:text-white"
          >
            fish
          </a>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur 
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCards;
