import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom'
import useCard from '../Hooks/useCard';
import useAdmin from '../Hooks/useAdmin';

const Deshboard = () => {
    const [cart] = useCard();

    //todo: get isAdmin value from the database
    const [isAdmin]= useAdmin();
    console.log(isAdmin)
    return (
        <div className="flex">
            {/* deshboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashBoard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashBoard/addItems"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashBoard/manageItems"><FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to="/dashBoard/booking"><FaBook></FaBook> Manage Booking</NavLink></li>
                            <li><NavLink to="/dashBoard/users"><FaUsers></FaUsers> All users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashBoard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashBoard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                            <li><NavLink to="/dashBoard/cart"><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
                            <li><NavLink to="/dashBoard/review"><FaAd></FaAd> Add Review</NavLink></li>
                            <li><NavLink to="/dashBoard/booking"><FaList></FaList> My Booking</NavLink></li>
                        </>
                    }
                    {/* shared navlinks */}
                    <div className='divider'></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/order/salad"><FaSearch></FaSearch> Manu</NavLink></li>
                    <li><NavLink to="/order/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            {/* content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;