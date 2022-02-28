import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carosal = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="h-auto md:h-auto lg:h-[28rem] w-screen">
            <h3>
              <img
                className="object-cover w-full h-full"
                src={require("../../../assets/img/banner/car-1.jpg")}
                alt="imag"
              />
            </h3>
          </div>
          <div className="h-auto md:h-auto lg:h-[28rem] w-screen ">
            <h3>
              <img
                className="object-cover w-full h-full"
                src={require("../../../assets/img/banner/car-2.jpg")}
                alt="imag"
              />
            </h3>
          </div>
          <div className="h-auto md:h-auto lg:h-[28rem] w-screen">
            <h3>
              <img
                className="object-cover w-full h-full"
                src={require("../../../assets/img/banner/car-3.jpg")}
                alt="imag"
              />
            </h3>
          </div>
          <div className="h-auto md:h-auto lg:h-[28rem] w-screen">
            <h3>
              <img
                className="object-cover w-full h-full"
                src={require("../../../assets/img/banner/car-4.jpg")}
                alt="imag"
              />
            </h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carosal;
