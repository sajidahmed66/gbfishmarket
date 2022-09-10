import { CircularProgress } from "@mui/material";
import React from "react";
import { getAllCompanyInfo } from "../../../api/apiAdminCompany";

const History = () => {
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
        <>
          <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl pt-4 pb-2 mx-auto"></div>

          <div className="flex flex-col items-center w-full max-w-screen-xl p-6 justify-items-center md:flex-row md:items-start md:justify-center md:mx-auto">
            {/* history image */}
            <div className="w-5/6 h-full py-6 mx-auto md:w-1/2">
              <div className="flex justify-start">
                <img
                  src={companyDetails && companyDetails.history_image_link}
                  className="w-5/6 rounded-2xl"
                  alt="aboutimg"
                />
              </div>
            </div>
            <div className="w-full pl-2 pr-4 md:w-1/2">
              <p className="p-4 text-xl font-bold text-gray-800 md:text-2xl font-skModernistBold">
                {companyDetails && companyDetails.history_title}
              </p>
              <div className="text-left">
                <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
                  {companyDetails && companyDetails.history_description}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full py-8">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default History;
