import axios from "axios";
import { ProductsType, CategoryType } from "../types";

const API_URL = "https://fakestoreapi.com/";

const http = axios.create({
  baseURL: API_URL,
});

export const apiEcommerceService = {
  getProducts: async () => {
    const response = await http.get<ProductsType>("products");
    return response.data;
  },

  getProductById: async (id: number) => {
    const response = await http.get<ProductsType>(`products/${id}`);
    return response.data
  },


  getAllCategory: async () => {
    const response = await http.get<CategoryType>("products/categories");
    return response.data
  },


  getCategoryById: async (category: string) => {
    const response = await http.get<ProductsType>(`products/category/${category}`);
    return response.data
  },

  addCartProductById: async () => {
    const response = await http.get<ProductsType>("products");
    return response.data
  }


}