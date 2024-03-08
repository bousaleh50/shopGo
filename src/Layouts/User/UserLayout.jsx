import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



function UserLayout() {
    const currentUser = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!currentUser.isAuthenticated){
            navigate("/login");
        }
    })
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