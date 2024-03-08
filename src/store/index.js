import {configureStore} from "@reduxjs/toolkit"
import { userSlice } from "../api/axios/User/UserSlice"
import { appApi } from "../api/axios/app/appApi"
import { cartSlice } from "../api/axios/app/cartSlice"

export const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        cart : cartSlice.reducer,
        [appApi.reducerPath]:appApi.reducer
    },
    middleware : getDefaultMiddleware=>getDefaultMiddleware().concat(appApi.middleware)
})