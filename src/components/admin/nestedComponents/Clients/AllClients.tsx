import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllClients, deleteClientById } from "../../../../api/apiClient";
import ClientCard from "../../components/ClientCard";
import { userInfo } from "../../../../utils/auth";
//component import

export interface IClient {
  id: number;
  name: string;
  company_name: string;
  location_lat: number;
  location_long: number;
  location_address: string;
  company_description: string;
  logo_image_name: string;
  logo_image_link: string;
  created_at?: Date;
  updated_at?: Date;
}

const AllClients = () => {
  const navigation = useNavigate();
  const [clients, setClients] = useState<IClient[]>([]);
  const [reload, setReload] = useState({});
  const handeleDeleteClient = (id: number) => {
    console.log("delete client", id);
    const token: string = userInfo().token;
    deleteClientById(id, token)
      .then((res) => res.data)
      .then((data) => {
        console.log("delete client", data);
        setReload({});
      })
      .catch((err) => {
        console.log(err); // genarate error to see what happens
      });
  };

  useEffect(() => {
    getAllClients()
      .then((res) => res.data)
      .then((data) => setClients(data.clients))
      .catch((err) => console.log(err));
  }, [reload]);
  return (
    <div className="bg-slate-50">
      <div className="flex flex-col items-start justify-between w-full p-4 my-4 h-36 ">
        <Typography variant="h5">
          quickly organize your client/vendors/suppliers in one place{" "}
        </Typography>
        <button
          className="w-48 btn btn-outline-primary ring-transparent"
          onClick={() => navigation("/admin/clients/add-client")}
        >
          Add New
        </button>
      </div>
      <Divider />
      <div className="w-full mt-4">
        <p>List of clients</p>
        <Grid container spacing={2}>
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              item={client}
              deleteClient={(id: number) => handeleDeleteClient(id)}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllClients;