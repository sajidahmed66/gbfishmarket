import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllCompanyInfo } from "../../../api/apiAdminCompany";

const IntroAbout = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [companyDetails, setCompanyDetails] = React.useState<any>(null);
  const [companyId, setCompanyId] = React.useState<number>(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    setIsLoading(true);
    getAllCompanyInfo()
      .then((res) => {
        setCompanyDetails(res.data.data);
        setCompanyId(res.data.data.id);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [companyId]);
  return (
    <>
      {/* about section with a side image */}
      <div className="p-6 mt-1 lg:py-12 px-8 xl:px-64 lg:px-24 md:px-12 sm:px-8 py-8">
        <div className="container flex flex-col flex-wrap items-center py-4 mx-auto lg:container md:flex-row md:items-center md:justify-start ">
          {/* about intro  div*/}
          <div className="w-full pr-4 md:w-1/2">
            <div className="text-left">
              <div>
                <h4 className="font-bold font-skModernist text-2xl leading-8 py-4 px-1 text-[#b8cc08]">
                  About us
                </h4>
                <h1 className="pb-5 text-4xl font-bold text-gray-800 font-skModernistBold">
                  Golden Bough Aquaculture Ltd.
                </h1>
              </div>

              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
                {!isLoading && companyDetails && companyDetails.description}
              </p>
              <div className="pt-5">
                <button
                  className=" rounded-xl  text-gray-800 font-skModernistBold bg-[#b8cc08] text-lg border-solid  border-4  hover:border-[#b8cc08]"
                  onClick={() => {
                    navigate("/about-us");
                  }}
                >
                  <div className="p-2 text-white">Read More</div>
                </button>
              </div>
            </div>
          </div>
          {/* about image */}
          <div className="flex flex-col items-center justify-center  w-full md:w-1/2  sm:w-full h-full pt-8 md:pl-12 md:justify-start">
            <img
              src={!isLoading && companyDetails && companyDetails.image_link}
              className="w-full rounded-2xl"
              alt="aboutimg"
            />
          </div>
          {/* end of about image */}
        </div>
      </div>
    </>
  );
};

export default IntroAbout;
