import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Order/Orders";
import Signup from "../Pages/Signup/Signup";
import PriveteRoute from "./PriveteRoute";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(` https://car-servar-side.vercel.app/services/${params.id}`),
                element: <PriveteRoute><CheckOut></CheckOut></PriveteRoute>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }

        ]
    }
])

export default router;