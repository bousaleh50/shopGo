import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { useSelector } from "react-redux";


function UserLayout({isHide}) {
    const user = useSelector(state=>state.user);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!user.isAuthenticated){
            navigate("/login");
        }
    },[user.isAuthenticated])
    return (
        <>
            <UserNav/>
            <main className="md:p-20">
                <div className="">
                    <div className="">
                        <Outlet/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default UserLayout