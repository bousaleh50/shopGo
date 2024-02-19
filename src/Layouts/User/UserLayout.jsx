import { Outlet, useNavigate } from "react-router-dom";
import UserNav from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { axiosClient } from "../../api/axios/axios";

function UserLayout() {
    const {state} = useContext(UserContext);
    const navigate = useNavigate();
    console.log(state);
    useEffect(()=>{
        if(state.isAuthenticated){
            axiosClient.get("/api/user").then(({data})=>{
                console.log(data);
            }).catch(err=>{
                console.log(err);
            })
        }else{
            navigate("/login")
        }
    },[state.isAuthenticated])
    return (
        <>
            <UserNav/>
            <div className="md:p-20">
            <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default UserLayout