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


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
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
            element: <Scheduler></Scheduler>
          },
        ]
      },
      {
        path: "/login",
        element: <Login></Login>
      }
]);