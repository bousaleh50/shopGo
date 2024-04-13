import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        itemsList:[],
        changedItems : [],
        totalQuantity:0,
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload.product;
            const existingItem = state.itemsList.find(p=>p.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.subTotal += newItem.price
                state.totalPrice += newItem.price
            }else{
                const qnt = action.payload.quantity
                state.itemsList.push({
                id:newItem.id,
                price:newItem.price,
                quantity:qnt?qnt:1,
                subTotal:newItem.price,
                description:newItem.description
                });
                state.totalQuantity++;
                state.totalPrice += newItem.price
            }
        },
        removeFromCart:()=>{

        },
        updateCart : (state,action)=>{
            const existingItem = state.itemsList.find(p=>p.id === Number(action.payload.id));
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;
                state.changedItems.push({id:action.payload.id,
                    total:existingItem.totalPrice,
                    quantity:existingItem.quantity
                });
            }
        },
        loadProducts : (state,action)=>{
            state.itemsList = [...action.payload.cart]
            state.totalPrice = action.payload.total
        }
    }
})


export const cartActions = cartSlice.actions;