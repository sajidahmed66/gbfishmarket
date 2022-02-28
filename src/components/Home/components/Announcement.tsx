import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Announcement = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container mx-auto w-full flex flex-col items-center justify-center pt-4 pb-6 max-w-screen-xl">
        <h2 className="text-5xl font-bold text-[#b8cc08] font-skModernistBold ">
          Announcements
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
      <div className="container mx-auto w-full items-center justify-center pt-4 pb-6 max-w-screen-xl">
        <Slider {...settings}>
          <div className="max-w-[18rem] lg:max-w-[38rem] md:max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-1">
            <img
              className="object-cover w-full h-72 hover:scale-110 transition duration-300 ease-in-out"
              src={require("../../../assets/img/products/protuct-1.jpg")}
              alt="avatar"
            />

            <div className="py-5 px-4 text-center">
              <div className="py-2">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  CATLA FISH
                </a>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200 font-skModernistBold leading-6">
                Lorem ipsum dolor sit amet consectetur consectetur adipiscing
                elit. Mauris sed odio sit amet nibh vulputate
                <div className="inline-block hover:text-yellow-400 text-stone-500">
                  {" "}
                  .... more
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[18rem] lg:max-w-[38rem] md:max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-1">
            <img
              className="object-cover w-full h-72 hover:scale-110 transition duration-300 ease-in-out"
              src={require("../../../assets/img/products/protuct-1.jpg")}
              alt="avatar"
            />

            <div className="py-5 px-4 text-center">
              <div className="py-2">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  CATLA FISH
                </a>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200 font-skModernistBold leading-6">
                Lorem ipsum dolor sit amet consectetur consectetur adipiscing
                elit. Mauris sed odio sit amet nibh vulputate
                <div className="inline-block hover:text-yellow-400 text-stone-500">
                  {" "}
                  .... more
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[18rem] lg:max-w-[38rem] md:max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-1">
            <img
              className="object-cover w-full h-72 hover:scale-110 transition duration-300 ease-in-out"
              src={require("../../../assets/img/products/protuct-1.jpg")}
              alt="avatar"
            />

            <div className="py-5 px-4 text-center">
              <div className="py-2">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  CATLA FISH
                </a>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200 font-skModernistBold leading-6">
                Lorem ipsum dolor sit amet consectetur consectetur adipiscing
                elit. Mauris sed odio sit amet nibh vulputate
                <div className="inline-block hover:text-yellow-400 text-stone-500">
                  {" "}
                  .... more
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[18rem] lg:max-w-[38rem] md:max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-4 ml-1">
            <img
              className="object-cover w-full h-72 hover:scale-110 transition duration-300 ease-in-out"
              src={require("../../../assets/img/products/protuct-1.jpg")}
              alt="avatar"
            />

            <div className="py-5 px-4 text-center">
              <div className="py-2">
                <a
                  href="#"
                  className="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                  CATLA FISH
                </a>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-200 font-skModernistBold leading-6">
                Lorem ipsum dolor sit amet consectetur consectetur adipiscing
                elit. Mauris sed odio sit amet nibh vulputate
                <div className="inline-block hover:text-yellow-400 text-stone-500">
                  {" "}
                  .... more
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Announcement;
