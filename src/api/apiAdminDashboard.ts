import { API_URL } from "../utils/config";
import axios from "axios";

interface IPostLogoData {
  data: FormData;
}
interface IPutLogoData {
  data: FormData;
  id: number;
}

export const getLogo = () => {
  return axios.get(`${API_URL}/admin/home/logo`);
};

export const addLogo = (data: FormData, token: string) => {
  return axios.post(`${API_URL}/admin/home/logo`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateLogo = (data: FormData, id: number, token: string) => {
  return axios.put(`${API_URL}/admin/home/logo/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: `Bearer ${token}`,
    },
  });
};
