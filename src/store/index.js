import {configureStore} from "@reduxjs/toolkit"
import { userSlice } from "../api/axios/User/UserSlice"
import { appApi } from "../api/appApi/appApi"
import { cartSlice } from "../api/axios/cart/cartSlice"
import { wishlistSlice } from "../api/wishList/wishlistSlice"

export const store = configureStore({
    reducer:{
        user:userSlice.reducer,
        cart : cartSlice.reducer,
        whishlist : wishlistSlice.reducer,
        [appApi.reducerPath]:appApi.reducer
    },
    middleware : getDefaultMiddleware=>getDefaultMiddleware().concat(appApi.middleware)
})