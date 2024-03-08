import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:JSON.parse(window.localStorage.getItem("b_user")),
        isAuthenticated:'true'===window.localStorage.getItem("AUTHENTICATED"),
        token:window.localStorage.getItem("tk"),
        error:null,
    },
    reducers:{
        login(state,action){
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout(state,action){
            state.user = null,
            state.isAuthenticated = false,
            state.token = ""
        },
        setError(state,action){
            state.error = action.payload
        },
        setUser(state,action){
            console.log("this is the fucking payload ",action.payload.token)
            state.user = action.payload.user
            state.token = action.payload.token
        }
    }
});

export const userActions = userSlice.actions;