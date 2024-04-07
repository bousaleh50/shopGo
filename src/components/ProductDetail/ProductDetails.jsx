import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../api/axios/axios";
import { useGetProductQuery } from "../../api/appApi/appApi";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch } from "react-redux";
import { addTocartAction } from "../../api/axios/cart/cartActions";
import { addToWishAction } from "../../api/wishList/wishlistActions";
function ProductDetails() {
    const qntRef = useRef();
    const dispatch = useDispatch();
    const {id} = useParams();
    const {data,isLoading} = useGetProductQuery(id)
    if(isLoading){
        return "loading ...."
    }
    const handleAddToWishList = (product)=>{
        dispatch(addToWishAction(product))
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const product = data.product
        console.log("thsssss",product)
        dispatch(addTocartAction({product,quantity:qntRef.current}));
    }
    return (
        <div className="flex gap-4 flex-wrap">
            <div className="flex-1">
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-center p-10">
                <div className="flex flex-col gap-4">
                    <span className="text-2xl">{data.product.description}</span>
                    <hr />
                </div>
                <div>
                    <button className="hover:text-red-500 flex gap-2" onClick={()=>handleAddToWishList(data.product)}>
                      <FavoriteBorderOutlinedIcon/>
                      wishlist
                    </button>
                </div>
                <div className="">
                    <ul className="list-disc p-5">
                        <li>t</li>
                        <li>t</li>
                        <li>t</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl">{data.product.price}DH</h1>
                </div>
                <div>
                    <form  className="flex gap-4" onSubmit={handleSubmit}>
                        <input type="number" className="p-4 rounded-md border" placeholder="quantity" min={1} onChange={(e)=>qntRef.current=e.target.value}/>
                        <button className="bg-red-500 text-white p-4 rounded-md">Add To cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;