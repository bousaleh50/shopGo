import { Link } from "react-router-dom";

function Departments() {
    const categorie = [
        "Women's Fashion",
        "Men's Fashion",
        "Electronics",
        "Home & lifestyle",
        "Medicine",
        "Sports & outdoor",
        "Baby's and toys"
    ]
    return (
        <div className="">
                <ul className="flex flex-col gap-4">
                    {
                        categorie.map((c,i)=>(
                        <li className="w-full p-4 hover:bg-red-500 hover:text-white" key={c}>
                            <Link to={`/products/categorie/${i+1}`}>{c}</Link>
                            </li>
                        ))
                    }
                </ul>
        </div>
    );
}

export default Departments;