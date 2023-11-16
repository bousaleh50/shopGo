import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import "./style.css";
import { useRef } from 'react';
import Departments from '../departments/Departments';
import { Link } from 'react-router-dom';


function Navbar() {
   
    const menuRef=useRef(null);
   
    const handleShowMenu=(status)=>{
        const menu=menuRef.current;
        if(status){
            menu.classList.remove("show-menu");
            menu.classList.add("hidden");
        }else{
            menu.classList.add("show-menu");
            menu.classList.remove("hidden");
        }
    }

    return (
        <header className=" w-screen h-10 flex flex-col">
            <div className="hidden xl:flex gap-40 bg-black w-full ">
                <p className="text-white m-auto">Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%! <a href="" className="underline">ShopNow</a></p>
                <select name="" id="" defaultValue={"English"} className="m-auto bg-black text-white">
                    <option value="en">English</option>
                    <option value="fr">Francais</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>
            <nav className="w-screen p-4 flex flex-wrap gap-4  justify-evenly items-center border-b-2 sm:flex-nowrap sm:gap-0 " >
                <div className=''>
                 <h1 className='text-3xl font-black'>Shop<span className='text-red-500'>Go</span></h1>
                </div>
                <div className='w-1/2 h-screen absolute right-0 bottom-0 hidden flex-col items-center gap-20 p-4 bg-white border md:border-none md:flex md:relative md:h-fit ' ref={menuRef}>
                    <div className='mr-auto md:hidden'>
                        <CloseOutlinedIcon className='text-3Xl' onClick={()=>handleShowMenu(true)}/>
                    </div>
                    <ul className='flex flex-col w-full md:flex-row md:gap-10 justify-end '>
                        <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                            <div className='md:hidden'>
                              <HomeOutlinedIcon/>
                            </div>
                            <a href="">Home</a>
                        </li>
                        <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                            <div className='md:hidden'>
                             <MailOutlineOutlinedIcon/>
                            </div>
                            <a href="">Contact</a>
                        </li>
                        <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                            <div className='md:hidden'>
                             <InfoOutlinedIcon/>
                            </div>
                            <a href="">About</a>
                        </li>
                        <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                            <div className='md:hidden'>
                             <SensorOccupiedOutlinedIcon className=''/>
                            </div>
                            <Link to="/register">Sign up</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-2/5 m-2 hidden xl:block'>
                  <form className=''>
                     <div className='border flex rounded-md p-2  w-1/2'>
                      <input type="search" className='hidden outline-none w-full md:inline ' placeholder='search'/>
                      <SearchOutlinedIcon/>
                     </div>
                  </form>
                </div>
                <div className='ml-auto flex gap-10'>
                    <Link to="/cart"><ShoppingCartOutlinedIcon className='hover:text-red-500'/></Link>
                    <FavoriteBorderOutlinedIcon className='hover:text-red-500'/>
                    <div className='ml-auto md:hidden'>
                     <MenuOutlinedIcon className='hover:text-red-500' onClick={()=>handleShowMenu(false)}/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;