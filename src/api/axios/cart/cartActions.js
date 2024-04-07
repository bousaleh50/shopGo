import { BASE_URL, axiosClient } from "../axios"
import { cartActions } from "./cartSlice"



export const addTocartAction = (payload)=>{
    return async (dispatch)=>{
        const addToCart = async ()=>{
            const qnt = payload.quantity?payload.quantity:1;
            console.log('this is the payload ',payload)
            await dispatch(cartActions.addToCart(payload));
            const response = await axiosClient.post(`api/cart/add/${payload.product.id}/${qnt}`).then(res=>{
                return res;
            }).catch(err=>{
                return err;
            })
        }
        await addToCart();
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


export const loadCartDataAction = ()=>{
    return async (dispatch)=>{
        const loadData = async ()=>{
            const res = await axiosClient.get("/api/cart");
            await dispatch(cartActions.loadProducts(res.data))
        }

        await loadData();
    }
}