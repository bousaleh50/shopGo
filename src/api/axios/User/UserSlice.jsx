import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name:"user",
    initialState:{
        user:{
            isAuthenticated:false
        },
        isAuthenticated:false,
        token:null,
    },
    reducers:{
        login(state,action){
            window.localStorage.setItem("ACCESS_TOKEN",action.payload.token)
            window.localStorage.setItem("AUTHENCTICTED",true);
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.token = action.payload.token
        },
        logout(state){
            localStorage.clear();
            state.isAuthenticated = false;
        },
    }
});

export const UserActions = UserSlice.actions;