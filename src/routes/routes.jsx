import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/mainLayout";
import Home from "../pages/Home/HOme";

const createdRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default createdRoutes;