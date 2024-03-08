import { BASE_URL, axiosClient } from "../axios"
import { cartActions } from "./cartSlice"



export const addTocartAction = (payload)=>{
    return async (dispatch)=>{
        const addToCart = async ()=>{
            const response = await axiosClient.post(`api/cart/add/${payload.id}`).then(res=>{
                return res;
            }).catch(err=>{
                return err;
            })
            console.log(response);
            dispatch(cartActions.addToCart(payload))
        }
        addToCart();
    }
}

export const updateCartAction = (payload)=>{
    return async (dispatch)=>{
        const updateCart = async ()=>{
            dispatch(cartActions.updateCart(payload))
        }
        updateCart();
    }
}