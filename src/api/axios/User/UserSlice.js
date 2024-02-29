import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isAuthenticated:'true'===window.localStorage.getItem("AUTHENTICATED"),
        token:null,
    },
    reducers:{
        login(state,action){
            window.localStorage.setItem("ACCESS_TOKEN",action.payload.token);
            window.localStorage.setItem("AUTHENTICATED",true);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout(state,action){
            state.user = null,
            state.isAuthenticated = false,
            state.token = ""
            localStorage.clear();
        },
    }
});

export const userACtions = userSlice.actions;