import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/mainLayout";
import Home from "../pages/Home/HOme";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsPage from "../pages/NewsPage/NewsPage";
import PrivateRoute from "./PrivateRoute";

const createdRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/news/:id",
                element: <PrivateRoute><NewsPage></NewsPage></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    }
])

export default createdRoutes;