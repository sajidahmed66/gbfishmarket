import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carosal = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings} className="-z-10">
          <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] relative bg-black">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-1.jpg")}
              alt="imag"
            />
            <span className="absolute inset-0 w-full h-full bg-black opacity-25"></span>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
              <h1 className="py-4 text-xl text-center text-white sm:text-2xl md:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-center text-white md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] relative">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-2.jpg")}
              alt="imag"
            />
            <span className="absolute inset-0 w-full h-full bg-black opacity-25"></span>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
              <h1 className="py-4 text-xl text-center text-white sm:text-2xl md:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-center text-white md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] relative ">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-3.jpg")}
              alt="imag"
            />
            <span className="absolute inset-0 w-full h-full bg-black opacity-25"></span>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
              <h1 className="py-4 text-xl text-center text-white sm:text-2xl md:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-center text-white md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] relative">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-4.jpg")}
              alt="imag"
            />
            <span className="absolute inset-0 w-full h-full bg-black opacity-25"></span>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
              <h1 className="py-4 text-xl text-center text-white sm:text-2xl md:text-4xl lg:text-5xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-center text-white md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carosal;
