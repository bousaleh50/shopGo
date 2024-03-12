import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL, axiosClient } from "../axios";
import { USER_BASE_URL } from "../../../routes/routes";


export const userApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl : `${BASE_URL}/api`,
    }),
    endpoints:builder=>({
        UserLogin:builder.query({
            async queryFn(){
                const user = await axiosClient.post(`${USER_BASE_URL}/login`,{email,password})
                return user
            }
        }),
    })
})

export const {useUserLogin,useUserLogout} = userApi