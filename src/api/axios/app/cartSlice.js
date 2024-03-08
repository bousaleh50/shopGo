import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        itemsList:[],
        totalQuantity:0,
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.itemsList.find(p=>p.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            }else{
                state.itemsList.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.name
                });
                state.totalQuantity++;
            }
        },
        removeFromCart:()=>{

        },
        updateCart : (state,action)=>{
            const existingItem = state.itemsList.find(p=>p.id === Number(action.payload.id));
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price
            }
        },
        loadProducts : (state,action)=>{
            state.itemsList = action.payload.products
        }
    }
})


export const cartActions = cartSlice.actions;