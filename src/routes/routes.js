import { createBrowserRouter } from "react-router-dom";
import AffiliatePrograme from "../pages/AffiliatePrograme";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Kids from "../pages/Kids";
import Login from "../pages/Login";
import PlanAndPricing from "../pages/PlanAndPricing";
import TeachWithUs from "../pages/TeachWithUs";
import Main from "../utilities/Main";
import Register from "./Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },


            {
                path: '/plan-and-pricing',
                element: <PlanAndPricing></PlanAndPricing>,
            },
            {
                path: '/teach-with-us',
                element: <TeachWithUs></TeachWithUs>
            },
            {
                path: '/affiliate-programe',
                element: <AffiliatePrograme></AffiliatePrograme>
            },
            {
                path: '/kids',
                element: <Kids></Kids>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },




        ]
    }
])