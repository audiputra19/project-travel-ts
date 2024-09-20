import { FC } from "react";
import Tabs from "../Layouts/Tabs";
import Home from "../Pages/Home";
import { useRoutes } from "react-router-dom";
import Wishlist from "../Pages/Wishlist";
import Profile from "../Pages/Profile";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import Booking from "../Pages/Booking";

const Router: FC = () => {
    let element = [
        {
            path: '/',
            element: <ProtectedRoute><Tabs/></ProtectedRoute>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: '/wishlist',
                    element: <Wishlist/>
                },
                {
                    path: '/profile',
                    element: <Profile/>
                }
            ]
        },
        {
            path: '/details/:id',
            element: <Details/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/booking',
            element: <Booking/>
        }
    ];

    let routes = useRoutes(element);

    return routes;
}

export default Router;