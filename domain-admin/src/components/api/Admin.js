import axios from "axios";
import {siteUrl} from "./Constant";

export const Admin = axios.create({
  baseURL: `${siteUrl}`,
  headers: {
     "Content-Type": "application/json"
  },
});

Admin.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null;

    config.headers["accept-language"] = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "az";


    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




export default Admin;