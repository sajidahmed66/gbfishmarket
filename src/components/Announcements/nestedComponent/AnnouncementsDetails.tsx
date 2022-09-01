import React, { useState, useEffect } from "react";
import { getAllProducts } from "../../../api/apiAdminProducts";
import { useParams, useNavigate } from "react-router-dom";
import { IProduct } from "../../admin/nestedComponents/Products/AllProducts";
//this will be a dummy component for now

const AnnouncementsDetails = () => {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { announcementId } = useParams();
  useEffect(() => {
    getAllProducts()
      .then((res) => res.data)
      .then((data) => {
        // setProduct(data.find((item) => item.id === parseInt(productId)));
        setAnnouncements(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  console.log(announcements);
  return (
    <>
      {announcements && (
        <div className="w-full mt-8 mb-12 ml-0 md:mt-0 md:ml-4 md:w-3/4 lg:w-3/4 ">
          <div className="flex flex-row items-start justify-start">
            <div className="w-1/2">
              <img
                src={announcements.image_link}
                alt=""
                className="w-full h-48 rounded-lg md:h-56 lg:h-72"
              />
              <div className="flex flex-row items-center justify-center w-full mt-12">
                <button
                  className="text-white bg-[#b8cc08] btn hover:bg-pink-900"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Cantact sales
                </button>
              </div>
            </div>
            <div className="w-1/2 h-auto p-4">
              <div className="flex flex-row items-center justify-center w-full h-12">
                <h2 className="mb-2 text-2xl ">{announcements.title}</h2>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="mb-2 text-lg text-gray-500">
                  {announcements.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnnouncementsDetails;