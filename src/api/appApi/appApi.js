import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { USER_BASE_URL } from "../../routes/routes";



export const appApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8000/api/",
        prepareHeaders: (headers, { getState }) => {
            // Include withCredentials in the headers
             // Assuming you have user info in your Redux store
             const {user} = getState();
            if (user.token) {
              headers.set('Authorization', `Bearer ${user.token}`);
            }
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            headers.set('withCredentials', 'true'); // Set withCredentials to true
            return headers;
          },
    }),
    endpoints:builder =>({
        UserLogin:builder.query({
            async queryFn(){
                const user = await axiosClient.post(`${USER_BASE_URL}/login`,{email,password})
                return user
            }
        }),
        CartProducts:builder.query({
            query:()=>{
                return {
                    url : `cart`,
                    method:"GET",
                }
            }
        }),
        getProduct:builder.query({
            query:(id)=> `products/product/${id}`,
        }),
        getProducts:builder.query({
            query:()=>{
                return{
                    url:"products",
                    method:"GET"
                }
            }
        }),
        getProductsByCategorie:builder.query({
            query:(id)=> `products/categorie/${id}`
        }),
        WhishlistProducts:builder.query({
            query:()=>{
                return {
                    url : "whishlist",
                    method:"GET",
                }
            }
        }),
        
    })
})

export const {useCartProductsQuery,
    useGetProductQuery,
    useUserLogin,
    useWhishlistProductsQuery,
    useGetProductsQuery,
    useGetProductsByCategorieQuery
} = appApi