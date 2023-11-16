import { useState } from "react";
import ProductCard from "./ProductCard";
import "./style.css";
import WishListProductCard from "./WishListProductCard";
function ProductsCardsComponetns({type}) {
    const [products,setProducts]=useState([
        1,2,3,4,5,6,7,8,9
    ])
    
    return (
      <div className="flex gap-4 overflow-x-scroll cards">
        {
            products.map((p,i)=><ProductCard key={i}/>)
        }
      </div>
    );
}

export default ProductsCardsComponetns;