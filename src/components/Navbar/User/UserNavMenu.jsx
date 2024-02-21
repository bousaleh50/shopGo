import { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserContext";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import { Link } from "react-router-dom";

function UserNavMenu() {
    const {state} = useContext(UserContext);
    return (
        <>
         <ul className='flex flex-col w-full md:flex-row md:gap-10 justify-end '>
            <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                <div className='md:hidden'>
                    <HomeOutlinedIcon/>
                </div>
                <Link to={"/"}>Home</Link> 
            </li>
            <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                <div className='md:hidden'>
                    <MailOutlineOutlinedIcon/>
                </div>
                <Link to={"/contact"}>Contact</Link> 
            </li>
            <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                <div className='md:hidden'>
                    <InfoOutlinedIcon/>
                </div>
                <Link to={"/about"}>About</Link> 
            </li>
            <li className='border-b-2 py-4 flex gap-4 hover:text-red-500 md:border-none md:py-0'>
                <div className='md:hidden'>
                    <SensorOccupiedOutlinedIcon className=''/>
                </div>
                {
                    state.isAuthenticated?<Link to="/login">Login</Link>
                    :
                    <Link to="/register">Sign up</Link>
                }
            </li>
            
         </ul>
        </>
    );
}

export default UserNavMenu;