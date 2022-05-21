import { API_URL } from "../utils/config";
import axios from "axios";

export const getAllProducts = () => {
  return axios.get(`${API_URL}/admin/products`);
};

export const getProduct = (id: number) => {
  return axios.get(`${API_URL}/admin/products/${id}`);
};

// export const addProduct = (product: IProductsData) => {
//     return axios.post(`${API_URL}/admin/products`, product);
//     }

// export const updateProduct = (product: IProductsData) => {
//     return axios.put(`${API_URL}/admin/products/${product.id}`, product);
//     }

// export const deleteProduct = (id: number) => {
//     return axios.delete(`${API_URL}/admin/products/${id}`);
//     }
