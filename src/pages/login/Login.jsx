import sidebar_image from "../../assets/images/sidebar_image.jpg"

function Login() {
    return (
        <div className="w-screen h-screen flex flex-col items-center sm:flex-row">
            <div className="hidden   sm:flex h-full sm:w-1/2">
                <img src={sidebar_image} alt="" className="w-full"/>
            </div>
            <div className="flex flex-col items-center gap-4 m-auto h-full justify-center  w-full shadow-2xl sm:w-1/2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">Login to <span className="text-red-500">ShopGO</span></h1>
                    <p>Enter your details below</p>
                </div>
                <form className="flex flex-col  items-center gap-10 w-full py-20">
                    <input type="email" placeholder="Email" className="p-2 rounded-md border sm:border-0 sm:border-b w-1/2 outline-none"/>
                    <input type="password" placeholder="Password" className="p-2 rounded-md border sm:border-0 sm:border-b w-1/2 outline-none "/>
                    <div className="flex flex-col w-full items-center gap-4">
                        <button className="bg-red-400 text-white w-1/2  rounded-md p-2 hover:bg-red-200">Login</button>
                        <a href="" className="text-red-500 hover:text-red-300">Forget Password?</a>
                        <span>Dont have an Account <a href="" className="underline">Sign up</a></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;