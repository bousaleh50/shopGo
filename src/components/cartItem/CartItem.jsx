import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartAction } from "../../api/axios/cart/cartActions";
import { axiosClient } from "../../api/axios/axios";
import { useGetProductQuery } from "../../api/appApi/appApi";

function CartItem({item}) {
   // const {data:product,isError,isLoading} = useGetProductQuery({id:item.product_id});
    const [product,setProduct] = useState(null);
    const [isChanged,setIsChanged] = useState(false);
    const [quantity,setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=>{
            const response = await axiosClient.get(`/api/product/${item.product_id}`);
            setProduct(response.data.product)
        }

        getProduct();
    },[])

    const handleChangeQuantity = (e)=>{
        const {value} = e.target;
        setQuantity(value)
        dispatch(updateCartAction({id:item.product_id,value}))
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
                <span>{product.price*quantity}DH</span>
            </td>
        </tr>
    );
}

export default CartItem;