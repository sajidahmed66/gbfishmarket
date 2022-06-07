import { API_URL } from "../utils/config";
import axios from "axios";

export const createClient = (data: FormData, token: string) => {
  return axios.post(`${API_URL}/admin/client`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getAllClients = () => {
  return axios.get(`${API_URL}/admin/client`);
};

export const getClientById = (id: number) => {
  return axios.get(`${API_URL}/admin/client/${id}`);
};

export const updateClientById = (
  id: number,
  data: FormData,
  token: string
) => {};

export const deleteClientById = (id: number, token: string) => {
  return axios.delete(`${API_URL}/admin/client/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
