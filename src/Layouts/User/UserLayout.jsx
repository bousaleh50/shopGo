import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserContext";


function UserLayout({isHide}) {
    const {state,dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!state.isAuthenticated){
            navigate("/login");
        }
    },[state.isAuthenticated])
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