import { Link } from "react-router-dom";

function Departments() {
    return (
        <div className="">
                <ul className="flex flex-col gap-4">
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to={`/products/categorie/1`}>Women's Fashion</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Men's Fashion</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Electronics</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Home & Lifestyle</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Medicine</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Sports & Outdoor</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Baby's & Toys</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Groceries & Pets</Link></li>
                    <li className="w-full p-4 hover:bg-red-500 hover:text-white"><Link to="">Health & Beauty</Link></li>
                </ul>
        </div>
    );
}

export default Departments;