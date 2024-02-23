import { useState } from "react";
import {Link} from "react-router-dom"
import ProductCard from "./ProductCard";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./style.css";
import WishListProductCard from "./WishListProductCard";
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

function ProductsCardsComponetns({type}) {
    const [products,setProducts]=useState([
        1,2,3,4,5,6,7,8,9
    ])
    
    return (
     <div className="">
        <Carousel className="w-full flex ">
        <CarouselContent>
      {
        products.map((p,i)=><>
        <CarouselItem className="basis-1/3">
          <div className="p-1">
            <Card className="">
              <CardHeader className="">
                <div>
                  <span className="bg-red-500 text-white p-2 rounded">-50%</span>
                </div>
                <div className="flex flex-col gap-4">
                  <VisibilityOutlinedIcon/>
                  <FavoriteBorderOutlinedIcon/>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 aspect-square items-center justify-center  bg-gray-400">
                <div>
                 <img src={GamePad} alt="" className=""/>
                </div>
                <div className="bg-black text-white w-full text-center p-4 hover:bg-red-500 ">
                  <button className="w-full">Add TO Cart</button>
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
    </>)
      }</CarouselContent>
      <CarouselPrevious className="hidden md:flex bg-red-500 text-white"/>
      <CarouselNext className="hidden md:flex bg-red-500 text-white"/>
    </Carousel>
     </div>
    );
}

export default ProductsCardsComponetns;