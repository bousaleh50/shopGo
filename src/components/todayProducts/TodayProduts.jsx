import ProductsCardsComponetns from "../cardsComponents/ProductsCardsComponents";

function TodayProducts() {
    return (
        <div className="flex flex-col gap-4 ">
            <div className="text-red-500 border-l-8 border-red-500 pl-2">
                <p>Today's</p>
            </div>
            <div className="text-3xl">
                <p>Flash Sales</p>
            </div>
            <ProductsCardsComponetns/>
            <div className="w-full flex ">
                <button className="bg-red-500 text-white p-2  m-auto rounded md:w-36">View all</button>
            </div>
            <hr className="mt-10"/>
        </div>
    );
}

export default TodayProducts;