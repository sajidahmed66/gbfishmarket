import { API_URL } from "../utils/config";
import axios from "axios";

interface ILogoData {
  data: FormData;
}

export const getLogo = () => {
  return axios.get(`${API_URL}/admin/home/logo`);
};

export const addLogo = (data: ILogoData) => {
  return axios.post(`${API_URL}/admin/home/logo`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateLogo = (data: ILogoData) => {
  return axios.put(`${API_URL}/admin/home/logo`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
