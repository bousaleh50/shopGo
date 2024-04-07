import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:"whishlist",
    initialState:{
        items:[],
    },
    reducers:{
        addToWishList : (state,action)=>{
            const existItem = state.items.find(p=>p.id === Number(action.payload.id))
            if(!existItem){
                state.items = [...state.items,action.payload]
            }
        },
        removeFromWhishlist : (state,action)=>{
            state.items = state.items.filter(p=>p.id !== Number(action.payload));
        },
        loadData:(state,action)=>{
            state.items = [...action.payload]
        }
    }
});

export const whishlistActions = wishlistSlice.actions;