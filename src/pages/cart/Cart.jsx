import { useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCartProductsQuery } from "../../api/axios/app/appApi";

function Cart() {
    const user  =  useSelector(state=>state.user.user)
    const {data,isLoading,isSuccess,isError} = useCartProductsQuery()
    console.log("test",data)
    const dispatch = useDispatch()

    if(isLoading){
      return "...loding"
    }
    if(isError){
      return "something went wrong"
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
                            data.cart.map((p,i)=><CartItem key={i} item={p}/>)
                        }
                    </tbody>
                </table>
                <div className="mt-4 flex justify-between">
                <Link to="/" className="border p-4 text-center">Return To Shop</Link>
                    <button className="border p-4 text-center">Update The Cart</button>
                </div>
            </Form>
        </div>
    );
}

export default Cart;