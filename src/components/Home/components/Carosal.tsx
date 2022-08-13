import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getBanner } from "../../../api/apiAdminDashboard";
import { IBanner } from "../../admin/nestedComponents/Banner/data";
/* 
Notes :
  1. Api call for carosal images
  2. Image  size will be full viewport- navbar height
  3. the tilte and subtitle will be in center of the image and fade in to the image with transition,
  4. dots will be in the bottom of the image
*/

const Carosal = () => {
  const [banner, setBanner] = useState<IBanner[]>([]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getBanner()
      .then((res) => res.data)
      .then((data) => {
        console.log("data", data);
        let displayedBanner = data.filter(
          (item: IBanner) => item?.show_on_home
        );
        console.log(displayedBanner);
        setBanner(displayedBanner);
      })
      .catch((err) => console.log(err));
    return () => setBanner([]);
  }, []);

  const CarosalImage: React.FunctionComponent<IBanner> = ({
    id,
    name,
    description,
    file_link,
    title,
  }) => {
    return (
      <div
        key={id}
        className="h-[22rem] md:h-[24rem] lg:h-[44rem] relative bg-black "
      >
        <img
          className="object-cover w-full h-full"
          src={file_link}
          alt={name}
        />
        <span className="absolute inset-0 w-full h-full bg-black opacity-25"></span>
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
          {
            <motion.div
              initial="hidden"
              whileInView="visiable"
              transition={{ duration: 1.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visiable: { opacity: 1, scale: 1.5 },
              }}
            >
              <h1 className="py-4 -mt-16 text-xl text-center text-white sm:text-2xl md:text-4xl lg:text-5xl-mt-24">
                {title}
              </h1>
            </motion.div>
          }
          {/* <p className="text-center text-white md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <Slider waitForAnimate={true} {...settings} className="-z-10">
          {banner.map((item) => (
            <CarosalImage key={item.id} {...item} />
          ))}

          {/* <div className="h-[22rem] md:h-[24rem] lg:h-[28rem] relative bg-black">
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
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default Carosal;
