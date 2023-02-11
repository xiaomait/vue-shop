import axios from "axios";
import store from "@/store";

const service = axios.create({
  baseURL: baseURL,
  timeout: 5000, //请求超时时间
});
//request请求拦截器
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
//response响应拦截器
service.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);
