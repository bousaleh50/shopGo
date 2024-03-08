import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";



export const appApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8000/api/",
        prepareHeaders: (headers, { getState }) => {
            // Include withCredentials in the headers
             // Assuming you have user info in your Redux store
             const {user} = getState();
             console.log("this is the fucking user",user.token)
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
        CartProducts:builder.query({
            query:()=>{
                return {
                    url : `cart`,
                    method:"GET",
                }
            }
        }),
        UserLogin:builder.query({
            async queryFn(){
                const user = await axiosClient.post(`${USER_BASE_URL}/login`,{email,password})
                return user
            }
        }),
        getProduct:builder.query({
            query:(id)=> `product/${id}`,
        })
    })
})

export const {useCartProductsQuery,
    useUserLoginQuery,
    useUserLogoutQuery,
    useGetProductQuery,
} = appApi