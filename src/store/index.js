import {configureStore} from "@reduxjs/toolkit"
import { userSlice } from "../api/axios/User/UserSlice"

export const store = configureStore({
    reducer:{
        user:userSlice.reducer,
    }
})