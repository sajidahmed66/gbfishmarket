import { API_URL } from "../utils/config";
import axios from "axios";

interface ILogoData {
  data: FormData;
}

const getLogo = () => {
  return axios.get(`${API_URL}/admin/home/logo`);
};

// const updatelogo =({data, token})
