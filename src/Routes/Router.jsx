import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes><Home></Home></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
