import { Outlet } from "react-router-dom";
import UserNav from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

function Layout() {
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

export default Layout;