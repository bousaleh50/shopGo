import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartAction } from "../../api/axios/app/cartActions";
import { axiosClient } from "../../api/axios/axios";
import { useGetProductQuery } from "../../api/axios/app/appApi";

function CartItem({item}) {
   // const {data:product,isError,isLoading} = useGetProductQuery({id:item.product_id});
    const [product,setProduct] = useState(null);
    const [quantity,setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
            const response = await axiosClient.get(`/api/product/${item.product_id}`);
            console.log("this is product",response);
            setProduct(response.data.product)
        }

        getProduct();
    },[])

    const handleChangeQuantity = (e)=>{
        const {value} = e.target;
        setQuantity(value)
        dispatch(updateCartAction({id,value}))
    }

    if(!product){
        return "...loadding"
    }
    return (
        <tr className="shadow-md ">
            <td className="flex gap-2 p-4">
                <img src="" alt="" />
                <span>{product.description}</span>
            </td>
            <td>
                <span>{product.price}DH</span>
            </td>
            <td>
                <input type="number" className="border outline-none text-center" value={quantity}  onChange={handleChangeQuantity}  min={1}/>
            </td>
            <td>
                <span>{product.price*quantity}</span>
            </td>
        </tr>
    );
}

export default CartItem;