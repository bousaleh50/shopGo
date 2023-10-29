import appleIphone from "../../assets/images/apple_iphone.png"
function CategorieChoice() {
    return (
        <div className="bg-black flex flex-col-reverse gap-0  md:flex-row">
            <div className="bg-black text-white w-full flex flex-col gap-3 justify-evenly p-2 md:px-20 border-none">
                <div className="text-green-500">
                    <span>Categories</span>
                </div>
                <div className="">
                    <h1 className="text-2xl  md:text-xl lg:md-text-4xl">Enhance Your Music Experience</h1>
                </div>
                <div>

                </div>
                <div className="w-full">
                    <button className="bg-green-500 p-4 w-1/2 rounded hover:bg-green-400">By Now!</button>
                </div>
            </div>
            <div className="">
                <img src={appleIphone} alt=""  className="h-full"/>
            </div>
        </div>
    );
}

export default CategorieChoice;