import axios from "axios";
import { ProductsType } from "../types";

const API_URL = "https://fakestoreapi.com/";

const http = axios.create({
  baseURL: API_URL,
});

export const apiEcommerceService = {
  getProducts: async () => {
    const response = await http.get<ProductsType>("products");
    return response.data;
  },
}