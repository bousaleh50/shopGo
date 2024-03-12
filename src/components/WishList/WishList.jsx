import WishListProductCard from "../cardsComponents/WishListProductCard";
import {useWhishlistProductsQuery } from "../../api/appApi/appApi";



function WishList() {
    const {data,isError,isLoading} = useWhishlistProductsQuery()

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
                    data.products.map((p,i)=><WishListProductCard key={i} item={p}/>)
                }
            </div>
        </div>
    );
}

export default WishList;