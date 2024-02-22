import { Link } from "react-router-dom";

function Departments() {
    return (
        <div className="">
                <ul className="flex flex-col gap-4">
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Women's Fashion</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Men's Fashion</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Electronics</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Home & Lifestyle</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Medicine</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Sports & Outdoor</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Baby's & Toys</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Groceries & Pets</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link href="">Health & Beauty</Link></li>
                </ul>
        </div>
    );
}

export default Departments;