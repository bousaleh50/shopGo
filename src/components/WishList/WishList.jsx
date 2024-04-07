import WishListProductCard from "../cardsComponents/WishListProductCard";
import {useWhishlistProductsQuery } from "../../api/appApi/appApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {loadDataToWhishlistAction } from "../../api/wishList/wishlistActions";



function WishList() {
    const {data,isError,isSuccess,isLoading} = useWhishlistProductsQuery();
    const products = useSelector(state=>state.whishlist.items);
    const dispatch = useDispatch();
   
    useEffect(()=>{
        dispatch(loadDataToWhishlistAction());
    },[data])

    if(products.length == 0){
        return <h1>Your whishlist is currently empty please add some products that you like</h1>
    }

    if(isLoading){
        return "loading....";
    }

    return (
        <div className="md:flex md:flex-col gap-4">
            <div className="md:flex md:justify-between md:items-center">
                <h1>Wishlist(<span>4</span>)</h1>
                <button className="border p-4 text-center">Move All To Bag</button>
            </div>
            <div className="flex gap-4 overflow-x-scroll cards">
                {
                    products.map((p,i)=><WishListProductCard key={i} item={p}/>)
                }
            </div>
        </div>
    );
}

export default WishList;