// importing components
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Scheduler from "./pages/scheduler/Scheduler";

// importing React Router Dom
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// importing Global CSS File
import "./styles/global.scss"

// importing from react Query
import { QueryClientProvider, QueryClient } from "react-query";

// initializing react query
const queryClient = new QueryClient();

// Layout View - To dynamically load pages
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar></Navbar>
        <div className="container">
          <div className="menuContainer">
            <Menu></Menu>
          </div>
          <div className="contentContainer">
            {/* react query wrapper */}
            <QueryClientProvider client={queryClient}>
              {/* dynamically changes */}
              <Outlet></Outlet>
            </QueryClientProvider>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };


  // Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
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

  return (
    // calling the router
    <RouterProvider router={router} />
  )
}

export default App
