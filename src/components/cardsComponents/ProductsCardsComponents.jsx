import {useEffect, useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./style.css";
import { Card, CardContent } from "@/components/ui/card"
import GamePad from "../../assets/images/gamePad.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { useCartProductsQuery, useGetProductsQuery } from "../../api/appApi/appApi";
import { useDispatch, useSelector } from "react-redux";
import { addTocartAction } from "../../api/axios/cart/cartActions";
import { addToWishAction } from "../../api/wishList/wishlistActions";

function ProductsCardsComponetns() {
  const user  =  useSelector(state=>state.user.user)
  const dispatch = useDispatch()
  const {data,isLoading,isSuccess} = useGetProductsQuery();
  
  const handleAddToCart = (product)=>{
     dispatch(addTocartAction(product))
  }

  const handleAddToWishList = (product)=>{
    dispatch(addToWishAction(product));
  }

  if(isLoading){
    return "...loading"
  }

    return (
     <div className="">
        <Carousel className="w-full flex ">
        <CarouselContent>
      {
        data.products.map((p,i)=>(
        <CarouselItem className="basis-1/3" key={i}>
          <div className="p-1">
            <Card className="">
              <CardHeader className="">
                <div>
                  <span className="bg-red-500 text-white p-2 rounded">-50%</span>
                </div>
                <div className="flex flex-col gap-4">
                  <VisibilityOutlinedIcon className="hover:text-red-500"/>
                  <FavoriteBorderOutlinedIcon className="hover:text-red-500" onClick={()=>handleAddToWishList(p)}/>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 aspect-square items-center justify-center  bg-gray-400">
                <div>
                 <img src={GamePad} alt="" className=""/>
                </div>
                <div className="bg-black text-white w-full text-center p-4 hover:bg-red-500 ">
                  <button className="w-full" onClick={()=>handleAddToCart(p)}>Add TO Cart</button>
                </div>
              </CardContent>
              <CardFooter className="flex-col">
                 <CardTitle>
                   <span>{p.description}</span>
                 </CardTitle>
                 <CardDescription className="flex gap-4">
                  <span>{p.price}DH</span>
                  <span className="line-through">1160DH</span>
                 </CardDescription>
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
        ))
      }</CarouselContent>
      <CarouselPrevious className="hidden md:flex bg-red-500 text-white"/>
      <CarouselNext className="hidden md:flex bg-red-500 text-white"/>
    </Carousel>
     </div>
    );
}

export default ProductsCardsComponetns;