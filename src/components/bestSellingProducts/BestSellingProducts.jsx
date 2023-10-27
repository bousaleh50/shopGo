import ProductsCardsComponetns from "../cardsComponents/ProductsCardsComponents";

function BestSellingPRoducts() {
    return (
        <div className="flex flex-col gap-10 ">
            <div className="text-red-500 border-l-8 border-red-500 pl-2">
                <p>This Month</p>
            </div>
            <div className="md:flex md:justify-between md:items-center">
                <p className="text-3xl">Best Selling Products</p>
                <button className="bg-red-500 text-white p-2  ml-auto rounded md:w-36">View all</button>
            </div>
            {/** Dont forget to pass the products to this component for Reused Compoents */}
            <ProductsCardsComponetns/>
            <hr className="mt-10"/>
        </div>
    );
}

export default BestSellingPRoducts;