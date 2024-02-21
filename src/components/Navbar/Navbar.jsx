import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import "./style.css";
import {useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import UserSideBar from '../UserSideBar/UserSideBar';
import { UserAvatar } from './User/UserAvatar';
import UserSubIcons from './User/UserSubIcons';



function Navbar() {
    const [isHide,setIsHide] = useState(true);
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
            <nav className="w-screen p-4 flex flex-wrap gap-4  justify-evenly items-center border-b-2" >
                <div className='ml-auto'>
                     <MenuOutlinedIcon className='hover:text-red-500' onClick={()=>{setIsHide(!isHide)}}/>
                </div>
                <div className=''>
                 <Link to={"/"}>
                   <h1 className='text-3xl font-black'>Shop<span className='text-red-500'>Go</span></h1>
                 </Link>
                </div>
                <div className='flex justify-center flex-1'>
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="hidden sm:block"
                    />
                </div>
                <div className='ml-auto flex items-center gap-4'>
                    <UserSubIcons className={"hidden sm:flex sm:gap-4"}/>
                    <UserAvatar/>
                </div>
                {
                        !isHide&&
                        <div className="w-1/2 absolute top-24 left-0 h-screen">
                          <UserSideBar/>
                        </div>
                }
            </nav>
        </header>
    );
}

export default Navbar;