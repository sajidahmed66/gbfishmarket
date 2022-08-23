import { CircularProgress } from "@mui/material";
import React from "react";
import { getAllCompanyInfo } from "../../../api/apiAdminCompany";
const AboutDetails = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [companyDetails, setCompanyDetails] = React.useState<any>(null);
  const [companyId, setCompanyId] = React.useState<number>(0);

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
      {!isLoading ? (
        <div className="flex flex-wrap max-w-screen-xl pl-6 md:flex-row md:px-8">
          <div className="w-full pr-4 md:w-1/2 ">
            <p className="p-4 text-xl font-bold text-gray-800 md:text-2xl font-skModernistBold">
              {companyDetails && companyDetails.title}
            </p>
            <div className="text-left">
              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
                {companyDetails && companyDetails.description}
              </p>
            </div>
          </div>
          {/* about image */}
          <div className="w-5/6 h-full py-6 pl-2 md:w-1/2">
            <div className="flex justify-end">
              <img
                src={companyDetails && companyDetails.image_link}
                className="w-5/6 rounded-2xl"
                alt="aboutimg"
              />
            </div>
          </div>
          {/* end of about image */}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full py-8">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default AboutDetails;
