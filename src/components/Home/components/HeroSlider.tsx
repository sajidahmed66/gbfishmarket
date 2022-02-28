import { useState, useEffect } from "react";
import sliderData from "../../../data/sliderData";

const HeroSlider = () => {
  const [sliderData1, setSliderData1] = useState(sliderData);
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentSlide === sliderData1.length - 1) {
  //       setCurrentSlide(0);
  //     } else {
  //       setCurrentSlide(currentSlide + 1);
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [currentSlide, sliderData1]);

  // console.log(currentSlide);

  const RenderImages = (sliderData: { url: string }[]) => {
    return sliderData.map((item, index) => {
      const { url } = item;
      return (
        <div
          id={`item${index + 1}`}
          className="w-full max-h-[80vh]  carousel-item relative bg-gradient-to-t from-gray-900 to-gray-600"
        >
          <img
            src={url}
            className="w-full h-full aspect-video inset-0 opacity-60"
          />
          <div className="flex flex-col w-full h-full items-center justify-center absolute ">
            <h1 className="text-4xl font-bold text-white">
              {/* {sliderData[index].title} */}
              Slider title that is very long
            </h1>
            <p className="text-base text-white text-center px-12 md:px-28 md:text-xl lg:w-1/2">
              {/* {sliderData[index].description} */}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum consequuntur pariatur, quia voluptatibus quam esse
              voluptas doloremque fuga illo odio et vel, consectetur enim
              recusandae illum natus ex possimus nihil.
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="w-full relative">
        <div className="carousel">{RenderImages(sliderData1)}</div>
        <div className="flex justify-center w-full py-2 gap-2 bottom-0 absolute z-10">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
