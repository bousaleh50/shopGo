import { useState } from "react";

import WishListProductCard from "../cardsComponents/WishListProductCard";

function WishList() {
    const [products,setProducts]=useState([
        1,2,3,4,5,6,7,8,9
    ])
    
    return (
        <div className="md:flex md:flex-col gap-4">
            <div className="md:flex md:justify-between md:items-center">
                <h1>Wishlist(<span>4</span>)</h1>
                <button className="border p-4 text-center">Move All To Bag</button>
            </div>
            <div className="flex gap-4 overflow-x-scroll cards">
                {
                    products.map((p,i)=><WishListProductCard key={i}/>)
                }
            </div>
        </div>
    );
}

export default WishList;