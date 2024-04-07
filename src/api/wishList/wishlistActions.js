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

export const loadDataToWhishlistAction = ()=>{
    return async (dispatch)=>{
        const setData = async ()=>{
            const res = await axiosClient.get("/api/whishlist");
            await dispatch(whishlistActions.loadData(res.data.products))
        }
        await setData();
    }
}