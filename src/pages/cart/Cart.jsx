import { useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCartProductsQuery } from "../../api/appApi/appApi";
import { cartActions } from "../../api/axios/cart/cartSlice";
import { loadCartDataAction } from "../../api/axios/cart/cartActions";

function Cart() {
    const user  =  useSelector(state=>state.user.user)
    const products = useSelector(state=>state.cart.itemsList);
    const {data,isLoading,isSuccess,isError} = useCartProductsQuery()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadCartDataAction());
    },[data])

    if(isLoading){
      return "...loding"
    }
    if(isError){
      return "something went wrong"
    }

    if(products.length == 0){
        return <div>
            <h1>Your Packet is currently Empty please add some of products you like to buy</h1>
        </div>
    }

    

    return (
        <div className="w-full m-auto mt-20">
            <Form action="">
                <table className="w-full text-center table-auto" border={1}>
                    <thead>
                        <tr className="border shadow-md bg-red-500">
                            <td className="p-4">Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p,i)=><CartItem key={i} item={p}/>)
                        }
                    </tbody>
                </table>
                <div className="mt-4 flex justify-between">
                <Link to="/" className="border p-4 text-center">Return To Shop</Link>
                    <button className="border p-4 text-center" onClick={null}>Update The Cart</button>
                </div>
            </Form>
        </div>
    );
}

export default Cart;