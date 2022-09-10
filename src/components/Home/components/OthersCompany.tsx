import React from "react";
const OthersCompany = () => {
  return (
    <div className="bg-white-500 ">
      <div className="container flex flex-col md:grid md:grid-cols-3 text-center items-center justify-center w-full max-w-screen-xl px-8 xl:px-24 lg:px-24 md:px-12 sm:px-8 pt-4 pb-6 mx-auto">
        <div className="w-36 bg-white h-36 md:h-36 ">
          <img
            src={require("../../../assets/img/company_1.png")}
            className="relative w-full min-w-full h-36"
            style={{ objectFit: "cover" }}
            alt="aboutimg"
          />
        </div>
        <div className="w-36 bg-white h-36 md:h-36 ">
          <img
            src={require("../../../assets/img/banner_ann.jpg")}
            className="relative w-full min-w-full h-36"
            style={{ objectFit: "cover" }}
            alt="aboutimg"
          />
        </div>
        <div className="w-36 bg-white h-36 md:h-36 ">
          <img
            src={require("../../../assets/img/banner_ann.jpg")}
            className="relative w-full min-w-full h-36"
            style={{ objectFit: "cover" }}
            alt="aboutimg"
          />
        </div>
      </div>
    </div>
  );
};
export default OthersCompany;
