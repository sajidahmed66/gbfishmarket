const ProductCards = () => {
  /*
leaving it as it is now 
*/

  return (
    <ul className="flex flex-row flex-wrap items-center  justify-items-center md:flex-row md:flex-wrap">
      {/* single card */}
      {[1, 2, 3, 4].map((item, index) => (
        <li className="max-w-sm md:max-w-sm lg:max-w-[18rem] mx-auto overflow-hidden bg-white rounded-lg  dark:bg-gray-800 mb-4 ml-0 lg:ml-9 md:ml-7 sm:ml-5 ">
          <img
            className="object-cover w-full transition duration-300 ease-in-out h-28 lg:h-48 md:h-44 sm:h-40 hover:opacity-50  "
            src={require("../../../assets/img/products/protuct-1.jpg")}
            alt="avatar"
          />
          <div className="px-2 pt-8 text-center">
            <a className="block text-md text-transform: uppercase text-gray-800 dark:text-white">
              CATLA FISH
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductCards;
