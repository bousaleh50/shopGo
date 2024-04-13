import { useContext, useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { Form, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCartProductsQuery } from "../../api/appApi/appApi";
import { cartActions } from "../../api/axios/cart/cartSlice";
import { loadCartDataAction } from "../../api/axios/cart/cartActions";
import CartTotalCounter from "./CartTotal";
import { totalContext } from "./Context/TotalContext";

function Cart() {
    const user  =  useSelector(state=>state.user.user)
    const products = useSelector(state=>state.cart.itemsList);
    const {data,isLoading,isSuccess,isError} = useCartProductsQuery()
    const [totalPrice,setTotalPrice] = useState(0);
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
        <div className="w-full m-auto ">
            <Form action="" className="grid grid-cols-3 gap-4">
                <table className="text-center table-auto col-span-2" border={1}>
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
                            products.map((p,i)=><CartItem key={i} item={p} setTotalPrice={setTotalPrice}/>)
                        }
                    </tbody>
                </table>
                <CartTotalCounter data={data} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                <div className="mt-10 col-span-3">
                      <Link to="/" className="text-center bg-red-500 text-white p-4">Return To Shop</Link>
                </div>
            </Form>
        </div>
    );
}

export default Cart;