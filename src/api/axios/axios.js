import axios from "axios";

export const BASE_URL = "http://localhost:8000"

const axiosClient = axios.create({
    baseURL:BASE_URL,
    withCredentials:true,
});

axiosClient.interceptors.request.use(function (config){
    const token = window.localStorage.getItem("tk");
    if(token){
        config.headers.Authorization = 'Bearer '+token;
    }
    return config;
})

export {axiosClient};