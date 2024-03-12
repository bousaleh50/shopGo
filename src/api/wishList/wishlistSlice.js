import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:"whishlist",
    initialState:{
        items:[],
    },
    reducers:{
        addToWishList : (state,action)=>{
            state.items.push({
                id:action.payload.id,
                price:action.payload.price,
                quantity:1,
                totalPrice:action.payload.price,
                name:action.payload.name
            });
        },
        removeFromWhishlist : (state,action)=>{
            const item = action.payload;
            state.items.filter(p=>p.id === Number(item.id));
        }
    }
});

export const whishlistActions = wishlistSlice.actions;