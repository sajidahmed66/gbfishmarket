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
      <div className="container max-w-fit max-h-fit">
        <Slider {...settings} className="-z-10">
          {sliderData.map((slide, index) => {
            return (
              <div key={index} className="h-[22rem] md:h-[24rem] lg:h-[28rem] ">
                <img
                  className="object-cover w-full h-[22rem] md:h-full"
                  src={slide.url}
                  alt="imag"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carosal;
