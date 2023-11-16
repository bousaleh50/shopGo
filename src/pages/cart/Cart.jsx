import { useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import { Form, Link } from "react-router-dom";

function Cart() {
    const [product,setProduct]=useState([
        1,2,3,4,5,6
    ]);

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
                            product.map((p,i)=><CartItem key={i}/>)
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