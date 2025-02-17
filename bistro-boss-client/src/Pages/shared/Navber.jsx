import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../Hooks/useCard";
import useAdmin from "../../Hooks/useAdmin";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCard();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'success!',
                    text: 'LogOut successful!!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            })
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/manu'>Our Manu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        {
            user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to='/dashboard/userHome'>Dashboard</Link></li>
        }
        <li><Link to='/dashboard/cart'>
            <button className="flex items-center text-base">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary ml-2">+{cart.length}</div>
            </button>
        </Link></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn">LogOut</button>
                            :
                            <Link to='/login' className="btn">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navber;