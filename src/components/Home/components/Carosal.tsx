import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from "../../../data/sliderData";


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
      {/* {console.log(sliderData)} */}
      <div className="">
        <Slider {...settings}>
          <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] ">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-3.jpg")}
              alt="imag"
            />
          </div>

          {/* <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] ">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-2.jpg")}
              alt="imag"
            />
          </div> */}

          {/* <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] ">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-3.jpg")}
              alt="imag"
            />
          </div> */}

          <div className="h-[22rem] md:h-[24rem] lg:h-[28rem]">
            <img
              className="object-cover w-full h-[22rem] md:h-full"
              src={require("../../../assets/img/banner/car-4.jpg")}
              alt="imag"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carosal;
