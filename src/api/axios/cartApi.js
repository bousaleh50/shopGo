import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";


export const api = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8000/api",
        prepareHeaders: (headers, { getState }) => {
            // Include withCredentials in the headers
             // Assuming you have user info in your Redux store
             
            if (user?.token) {
              headers.set('Authorization', `Bearer ${user.token}`);
            }
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            headers.set('withCredentials', 'true'); // Set withCredentials to true
            return headers;
          },
    }),
    endpoints:build =>({
        CartProducts:build.query({
            query:()=>{
                
                return {
                    url : `/cart`,
                    method:"GET",
                }
            }
        })
    })
})

export const {useCartProductsQuery} = api