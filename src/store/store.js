import {configureStore} from "@reduxjs/toolkit"
import { api } from "../api/axios/cartApi"
import { UserActions } from "../api/axios/User/UserSlice"


export const store = configureStore({
    reducer:{
        user : UserActions.reducer,
    }
})