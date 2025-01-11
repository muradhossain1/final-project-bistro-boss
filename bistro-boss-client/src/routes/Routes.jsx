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

  export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/manu',
            element: <Manu></Manu>
        },
        {
            path:'/order/:category',
            element: <Order></Order>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <SingUp></SingUp>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoutes><Deshboard></Deshboard></PrivateRoutes>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        },

        //admin routes
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        },
      ]
    },
  ]);