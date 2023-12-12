// importing from react router dom
import { createBrowserRouter } from "react-router-dom";

// importing the components
import Main from "../layout/main";
// import Footer from "../components/footer/Footer";
// import Menu from "../components/menu/Menu";
// import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import Products from "../pages/products/Products"
import Users from "../pages/users/Users"
import User from "../pages/user/User";
import Product from "../pages/product/Product";
import Scheduler from "../pages/scheduler/Scheduler";
import PrivateRoute from "./PrivateRoute";
import New from "../pages/new/New";
import { productInputs, userInputs } from "../data";
import Forms from "../pages/forms/Forms";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>
    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
          // {
          //   path: "/",
          //   element: <Home></Home>
          // },
          {
            path: "/home",
            element: <Home></Home>
          },
          {
            path: "/users",
            element: <Users></Users>
          },
          // for a single specific user
          {
            path: "/users/:id",
            element: <User></User>
          },
          {
            path: "/products",
            element: <Products></Products>
          },
          // for a single specific product
          {
            path: "/products/:id",
            element: <Product></Product>
          },
          // for the calendar
          {
            path: "/calendar",
            element: <PrivateRoute><Scheduler></Scheduler></PrivateRoute>
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/new",
            element: <Forms></Forms>
          },
          {
            path: "/new/users",
            // @ts-ignore
            element: <New inputs={userInputs} title="Add New User"></New>
          },
          {
            path: "/new/products",
            // @ts-ignore
            element: <New inputs={productInputs} title="Add New Product"></New>
          }
        ]
      },
      
]);