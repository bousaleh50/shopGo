import { axiosClient } from "../axios/axios"
import { whishlistActions } from "./wishlistSlice"


export const addToWishAction = (payload)=>{
    return async (dispatch)=>{
        const addToWish = async()=>{
            dispatch(whishlistActions.addToWishList(payload));
            await axiosClient.post(`/api/whishlist/add/${payload.id}`)
        }
        await addToWish();
    }
}

export const removeFromWhishlistAction  = (payload)=>{
    return async (dispatch)=>{
        const removeItem = async()=>{
            dispatch(whishlistActions.removeFromWhishlist(payload))
            await axiosClient.delete(`/api/whishlist/remove/${payload}`)
        }
        try {
            await removeItem();
        } catch (error) {
            console.log(error);
        }
    }
}

export const loadDataToWhishlistAction = (payload)=>{
    return async (dispatch)=>{
        const setData = async ()=>{
            await dispatch(whishlistActions.loadData(payload))
        }
        await setData();
    }
}