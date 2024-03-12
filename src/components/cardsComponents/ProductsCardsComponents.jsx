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
import { useCartProductsQuery } from "../../api/appApi/appApi";
import { useDispatch, useSelector } from "react-redux";
import { addTocartAction } from "../../api/axios/cart/cartActions";
import { addToWishAction } from "../../api/wishList/wishlistActions";

function ProductsCardsComponetns() {
  const user  =  useSelector(state=>state.user.user)
  const {data,isLoading,isSuccess,isError} = useCartProductsQuery()
  const dispatch = useDispatch()
  const products = [
    {
      id: 1,
      name: "MacBook",
      imgURL:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 25,
    },
    {
      id: 2,
      name: "Lenovo Yoga",
      imgURL:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 25,
    },
    {
      id: 3,
      name: "Dell lattitude",
      imgURL:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 25,
    },
    {
      id: 4,
      name: "HP Pavillion",
      imgURL:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 25,
    },
    {
      id: 5,
      name: "Acer Aspire",
      imgURL:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 25,
    },
  ];
  if(isLoading){
    return "...loding"
  }
  if(isError){
    return "something went wrong"
  }

  const handleAddToCart = (product)=>{
    dispatch(addTocartAction(product))
  }

  const handleAddToWishList = (product)=>{
    dispatch(addToWishAction(product));
  }

    return (
     <div className="">
        <Carousel className="w-full flex ">
        <CarouselContent>
      {
        products.map((p,i)=>(
        <CarouselItem className="basis-1/3" key={i}>
          <div className="p-1">
            <Card className="">
              <CardHeader className="">
                <div>
                  <span className="bg-red-500 text-white p-2 rounded">-50%</span>
                </div>
                <div className="flex flex-col gap-4">
                  <VisibilityOutlinedIcon />
                  <FavoriteBorderOutlinedIcon onClick={()=>handleAddToWishList(p)}/>
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
                   <span>AK-900 Wired Keyboard</span>
                 </CardTitle>
                 <CardDescription className="flex gap-4">
                  <span>$960</span>
                  <span>$1160</span>
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