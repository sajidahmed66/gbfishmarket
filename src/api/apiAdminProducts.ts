import { API_URL } from "../utils/config";
import axios from "axios";
import { IProduct } from "../components/admin/nestedComponents/Products/AllProducts";
import { FormValues } from "../components/admin/nestedComponents/Products/AddProduct";
export const getAllProducts = () => {
  return axios.get(`${API_URL}/admin/products`);
};

export const getProduct = (id: number) => {
  return axios.get(`${API_URL}/admin/products/${id}`);
};

export const addProduct = (product: FormData) => {
  console.log(product);
  return axios.post(`${API_URL}/admin/products`, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProduct = (product: FormData | IProduct, id: number) => {
  return axios.put(`${API_URL}/admin/products/${id}`, product);
};

export const deleteProduct = (id: number) => {
  return axios.delete(`${API_URL}/admin/products/${id}`);
};
