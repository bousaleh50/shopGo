import sidebar_image from "../../assets/images/sidebar_image.jpg"

function Register() {
    return (
        <div className="w-screen h-screen flex flex-col items-center sm:flex-row">
            <div className="hidden   sm:flex h-full sm:w-1/2">
                <img src={sidebar_image} alt="" className="w-full"/>
            </div>
            <div className="flex flex-col items-center gap-4 m-auto h-full justify-center  w-full shadow-2xl sm:w-1/2 ">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">Create an account</h1>
                    <p>Enter your details below</p>
                </div>
                <form className="flex flex-col  items-center gap-10 w-full py-20">
                    <input type="text" placeholder="Name" className="p-2 rounded-md border sm:border-0 sm:border-b w-1/2 outline-none"/>
                    <input type="email" placeholder="Email" className="p-2 rounded-md border sm:border-0 sm:border-b w-1/2 outline-none"/>
                    <input type="password" placeholder="Password" className="p-2 rounded-md border sm:border-0 sm:border-b w-1/2 outline-none "/>
                    <div className="flex flex-col w-full items-center gap-4">
                        <button className="bg-red-400 text-white w-1/2  rounded-md p-2 hover:bg-red-200">Create Account</button>
                        <button className="w-1/2 border-2 rounded-md p-2 hover:bg-red-200">Sing up with Google</button>
                        <p href="" >Already have account?<a href="" className="underline">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;