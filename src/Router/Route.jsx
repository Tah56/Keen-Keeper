import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router =createBrowserRouter([
    {
        path:"/",
        Component:Layout,
        children:[
            {
                index:true,
                Component:HomePage,
            },
            {
                path:"timeline"
            }
        ],
        errorElement:<ErrorPage/>
        
    }
])