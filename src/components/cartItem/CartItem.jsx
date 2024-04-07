import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartAction } from "../../api/axios/cart/cartActions";
import { axiosClient } from "../../api/axios/axios";
import { useGetProductQuery } from "../../api/appApi/appApi";
import ItemLoader from "../Skeleton/ItemLoader";

function CartItem({item}) {
    const {data,isError,isLoading} = useGetProductQuery(item.product_id);
    const [isChanged,setIsChanged] = useState(false);
    const [quantity,setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    console.log("this is prp",data)

    const handleChangeQuantity = (e)=>{
        const {value} = e.target;
        setQuantity(value)
        dispatch(updateCartAction({id:item.product_id,value}))
    }

    if(!data){
        return(
            <>
             <ItemLoader/>
             <ItemLoader/>
             <ItemLoader/>
            </>
        )
    }
    return (
        <tr className="shadow-md ">
            <td className="flex gap-2 p-4">
                <img src="" alt="" />
                <span>{data.product.description}</span>
            </td>
            <td>
                <span>{data.price}DH</span>
            </td>
            <td>
                <input type="number" className="border outline-none text-center" value={quantity}  onChange={handleChangeQuantity}  min={1}/>
            </td>
            <td>
                <span>{data.product.price*quantity}DH</span>
            </td>
        </tr>
    );
}

export default CartItem;