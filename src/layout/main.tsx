// importing from react router dom
import { Outlet, useLocation } from "react-router-dom";

// importing the components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

// importing from react Query
import { QueryClientProvider, QueryClient } from "react-query";


// initializing react query
const queryClient = new QueryClient();

const Main = () => {

    // Removing the header and footer from the login page
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration');

    const Layout = () => {
        return (
          <div className="main">
            {noHeaderFooter || <Navbar></Navbar>}
            {/* <Navbar></Navbar> */}
            <div className="container">
              <div className="menuContainer">
                {noHeaderFooter || <Menu></Menu>}
                {/* <Menu></Menu> */}
              </div>
              <div className="contentContainer">
                {/* react query wrapper */}
                <QueryClientProvider client={queryClient}>
                  {/* dynamically changes */}
                  <Outlet></Outlet>
                </QueryClientProvider>
              </div>
            </div>
            {noHeaderFooter || <Footer></Footer>}
            {/* <Footer></Footer> */}
          </div>
        );
      };
    return (
        <div>
            <Layout></Layout>
        </div>
    );
};

export default Main;