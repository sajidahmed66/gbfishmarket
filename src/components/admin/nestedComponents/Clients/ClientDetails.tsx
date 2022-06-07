import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import { getClientById } from "../../../../api/apiClient";
import { IClient } from "./AllClients";
import { BASE_URL } from "../../../../utils/config";
const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState<IClient>({} as IClient);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    if (id) {
      getClientById(parseInt(id))
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          setClient(data.client);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
  }, []);
  const {
    name,
    company_name,
    company_description,
    location_address,
    location_lat,
    location_long,
    logo_image_link,
    logo_image_name,
  } = client;
  return (
    <Container maxWidth="lg">
      {(loading && <Loading />) || (
        <Box>
          <div className="block py-10 ">
            <div className="">
              <div className="w-full">
                <div className="w-full h-48 bg-blue-600 rounded-t-lg">
                  {/* banner Images here */}
                </div>
                <div className="absolute ml-5 -mt-20">
                  <div className="w-40 bg-gray-200 border border-b border-gray-300 rounded-lg shadow-md h-36">
                    {/* logoImage goes here */}
                    <img
                      className="w-full h-full"
                      src={`${BASE_URL}/${logo_image_link}`}
                      alt={`${logo_image_name}`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start p-5 pt-20 border rounded-b-lg ">
                <div className="mb-1 ">
                  <Typography variant="body1" className="text-black ">
                    Name : {name}
                  </Typography>
                </div>
                <div className="mb-1 ">
                  <Typography variant="body1" className="text-black ">
                    Comapny Name : {company_name}
                  </Typography>
                </div>
                <div className="mb-1 ">
                  <Typography variant="body1" className="text-black ">
                    Comapny Description : {company_description}
                  </Typography>
                </div>
                <div className="mb-1 ">
                  <Typography variant="body1" className="text-black ">
                    Location Address : {location_address}
                  </Typography>
                </div>
                <div className="mt-2 text-sm text-gray-200">
                  <div className="flex flex-row items-center ml-auto space-x-2">
                    <div className="flex flex-row items-center">
                      <LocationOnOutlinedIcon color="primary" />
                      <Typography variant="body1" className="text-black ">
                        geo-location
                      </Typography>
                    </div>
                    <div className="h-8 p-1 mb-1 bg-gray-200 border border-gray-300">
                      <Typography variant="body1" className="text-black ">
                        {location_lat} lat
                      </Typography>
                    </div>
                    <div className="w-1 h-1 bg-blue-200 rounded-full"></div>
                    <div className="h-8 p-1 mb-1 bg-gray-200 border border-gray-300 ">
                      <Typography variant="body1" className="text-black ">
                        {location_long} long
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      )}
    </Container>
  );
};

export default ClientDetails;
