import { axiosClient } from "../axios/axios"
import { whishlistActions } from "./wishlistSlice"


export const addToWishAction = (payload)=>{
    return async (dispatch)=>{
        const addToWish = async()=>{
            await axiosClient.post(`/api/whishlist/add/${payload.id}`)
        }
        addToWish();
    }
}

export const removeFromWhishlistAction  = (payload)=>{
    return async (dispatch)=>{
        const removeItem = async()=>{
            //dispatch(whishlistActions.removeFromWhishlist(payload))
            await axiosClient.delete(`/api/whishlist/remove/${payload.id}`)
        }
        try {
            removeItem();
        } catch (error) {
            console.log(error);
        }
    }
}