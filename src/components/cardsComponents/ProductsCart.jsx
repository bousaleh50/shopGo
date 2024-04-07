import GamePad from "../../assets/images/gamePad.png"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./style.css";
import { Card, CardContent } from "@/components/ui/card"
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";
import { addTocartAction } from "../../api/axios/cart/cartActions";
import { addToWishAction } from "../../api/wishList/wishlistActions";
import { useDispatch } from "react-redux";
function ProductsCart({product}) {
    const dispatch = useDispatch();
    const handleAddToCart = (product)=>{
        dispatch(addTocartAction({product}))
     }
   
     const handleAddToWishList = (product)=>{
       dispatch(addToWishAction(product));
     }
    return (
        <Card className="">
              <CardHeader className="">
                <div>
                  <span className="bg-red-500 text-white p-2 rounded">-50%</span>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to={`/product/${product.id}`}>
                    <VisibilityOutlinedIcon className="hover:text-red-500"/>
                  </Link>
                  <FavoriteBorderOutlinedIcon className="hover:text-red-500 cursor-pointer" onClick={()=>handleAddToWishList(product)}/>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 aspect-square items-center justify-center  bg-gray-400">
                <div>
                 <img src={GamePad} alt="" className="hover:scale-125"/>
                </div>
                <div className="bg-black text-white w-full text-center p-4 hover:bg-red-500 ">
                  <button className="w-full" onClick={()=>handleAddToCart(product)}>Add TO Cart</button>
                </div>
              </CardContent>
              <CardFooter className="flex-col">
                 <CardTitle>
                   <span>{product.description}</span>
                 </CardTitle>
                 <CardDescription className="flex gap-4">
                  <span>{product.price}DH</span>
                  <span className="line-through">1160DH</span>
                 </CardDescription>
              </CardFooter>
            </Card>
    );
}

export default ProductsCart;