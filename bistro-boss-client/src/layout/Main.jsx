import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Navber from "../Pages/shared/Navber";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;