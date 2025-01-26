import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Manu from "../Pages/Manu/Manu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SignUp/SingUp";
import Deshboard from "../layout/Deshboard";
import Cart from "../Pages/deshboard/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/deshboard/AllUsers";
import AddItems from "../Pages/deshboard/AddItems";
import AdminRoutes from "./AdminRoutes";
import MangeItems from "../Pages/deshboard/MangeItems";
import UpdateItem from "../Pages/deshboard/UpdateItem";
import Payment from "../Pages/deshboard/Payment";
import PaymentHistory from "../Pages/deshboard/PaymentHistory";
import UserHome from "../Pages/deshboard/UserHome";
import AdminHome from "../Pages/deshboard/AdminHome";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/manu',
        element: <Manu></Manu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SingUp></SingUp>
      },
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Deshboard></Deshboard></PrivateRoutes>,
    children: [
      // normal user
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },

      //admin routes
      {
        path: 'adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: 'addItems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: 'users',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: 'manageItems',
        element: <AdminRoutes><MangeItems></MangeItems></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-pro.vercel.app/menu/${params.id}`)
      },
    ]
  },
]);