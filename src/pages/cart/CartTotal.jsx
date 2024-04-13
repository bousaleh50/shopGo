import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartTotalCounter({data,totalPrice,setTotalPrice}) {
    useEffect(()=>{
        setTotalPrice(data.total)
    },[])
    return (
        <div className="flex flex-1 flex-col gap-4 ">
                    <div className="flex justify-between items-center">
                        <span>{data.cart.length} items</span>
                        <span>{totalPrice}DH</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Shipping</span>
                        <span>7</span>
                    </div><hr />
                    <div className="flex justify-between items-center">
                        <span>Total(taxt excl)</span>
                        <span>126</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Taxes(tax incl)</span>
                        <span>0.00</span>
                    </div><hr />
                    <Link className="bg-red-500 p-4 text-center text-white">
                        
                           Proceed to checkout
                    </Link>
                </div>
    );
}

export default CartTotalCounter;