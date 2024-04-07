import { useParams } from "react-router-dom";
import { useGetProductsByCategorieQuery } from "../../../api/appApi/appApi";
import ProductsCardsComponetns from "../../../components/cardsComponents/ProductsCardsComponents";
import ProductsCart from "../../../components/cardsComponents/ProductsCart";

function Categories() {
    const {categorieId}= useParams()
    const {data,isSuccess,isLoading,isError} = useGetProductsByCategorieQuery(categorieId)

    if(isLoading){
        return "loading..."
    }

    if(isError){
        return "Something went wrong!!!!";
    }

     
    return (
      <div className="flex gap-4 w-1/3 h-full">
        {
            data.products.map((p,i)=><ProductsCart product={p} key={i}/>)
        }
      </div>
    );
}

export default Categories;