import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

function GuestLayout() {
    return (
        <>
          <Navbar/>
         <div className="md:p-20">
           <Outlet/>
         </div>
         <Footer/>
        </>
    );
}

export default GuestLayout;