import appleIphone from "../../assets/images/apple_iphone.png";
function NewArrival() {
    return (
        <div className="hidden md:flex-col md:grid grid-rows-4 grid-flow-col gap-4 ">
            <div className="row-span-5 col-span-4 flex flex-col-reverse justify-between bg-black text-white">
                <div className="p-10">
                    <p className="text-3xl">ahmed</p>
                    <p>Lorem, hsssssldfhqsldfhsfsf adjfsdfaasflkj lsdfasf </p>
                    <a href="" className="underline">shop Now!</a>
                </div>
                <img src={appleIphone} alt="" className=""/>
            </div>
            <div className="col-span-2 row-span-2 flex  justify-center items-center bg-black rounded text-white">
                <div className="p-4 ">
                    <p className="text-2xl">ahmed</p>
                    <p>Lorem, hsssssldfhqsldfhsfsf  </p>
                    <a href="" className="underline">shop Now!</a>
                </div>
                <img src={appleIphone} alt="" className="w-1/2 object-contain "/>
            </div>
            <div className="col-span-1 row-span-3 flex flex-col-reverse bg-black rounded text-white">
                <div className="p-4">
                    <p className="text-2xl">ahmed</p>
                    <p>Lorem, hsssssldfhqsldfhsfsf  </p>
                    <a href="" className="underline">shop Now!</a>
                </div>
                <img src={appleIphone} alt="" className=""/>
            </div>
            <div className="col-span-1 row-span-3 flex flex-col-reverse bg-black rounded text-white">
                <div className="p-4">
                    <p className="text-2xl">ahmed</p>
                    <p>Lorem, hsssssldfhqsldfhsfsf </p>
                    <a href="" className="underline">shop Now!</a>
                </div>
                <img src={appleIphone} alt="" className=""/>               
            </div>
        </div>
    );
}

export default NewArrival;